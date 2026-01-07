import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    // Tenta primeiro com CaseSensitive se falhar tenta lowercase
    let { data: institutions, error } = await supabase
      .from('Institution')
      .select(`
        *,
        feedbacks:Feedback(*)
      `)
      .order('id', { ascending: true })

    if (error) {
      // Segunda tentativa com lowercase
      const retry = await supabase
        .from('institution')
        .select(`
          *,
          feedbacks:feedback(*)
        `)
        .order('id', { ascending: true })
      
      if (retry.error) throw retry.error
      institutions = retry.data
    }

    return NextResponse.json(institutions)
  } catch (err: any) {
    console.error("Erro na API /api/mapa:", err)
    return NextResponse.json({ error: "failed_to_list_institutions" }, { status: 500 })
  }
}
