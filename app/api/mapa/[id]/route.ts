import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const institutionId = Number(id)

  try {
    let { data: institution, error } = await supabase
      .from('Institution')
      .select('*, feedbacks:Feedback(*)')
      .eq('id', institutionId)
      .single()

    if (error) {
      // Tenta lowercase
      const retry = await supabase
        .from('institution')
        .select('*, feedbacks:feedback(*)')
        .eq('id', institutionId)
        .single()
      
      if (retry.error) {
        if (retry.error.code === 'PGRST116') {
          return NextResponse.json({ error: "institution_not_found" }, { status: 404 })
        }
        throw retry.error
      }
      institution = retry.data
    }

    // Ordenar feedbacks manualmente
    if (institution && institution.feedbacks) {
      institution.feedbacks.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    return NextResponse.json(institution)
  } catch (err: any) {
    console.error(`Erro na API /api/mapa/${institutionId}:`, err)
    return NextResponse.json({ error: "failed_to_get_institution" }, { status: 500 })
  }
}
