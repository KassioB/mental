import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { z } from "zod"

const feedbackBodySchema = z.object({
  text: z.string().min(1).max(500),
  rating: z.number().int().min(1).max(5),
})

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const institutionId = Number(id)

  try {
    const body = await request.json()
    const parse = feedbackBodySchema.safeParse(body)

    if (!parse.success) {
      return NextResponse.json({ error: "invalid_body", details: parse.error.flatten() }, { status: 400 })
    }

    // Verificar se instituição existe
    const { data: institution, error: checkError } = await supabase
      .from('Institution')
      .select('id')
      .eq('id', institutionId)
      .single()

    if (checkError || !institution) {
      return NextResponse.json({ error: "institution_not_found" }, { status: 404 })
    }

    const { data: feedback, error: insertError } = await supabase
      .from('Feedback')
      .insert([
        { 
          institutionId: institutionId, 
          text: parse.data.text, 
          rating: parse.data.rating 
        }
      ])
      .select()
      .single()

    if (insertError) throw insertError

    return NextResponse.json(feedback, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "failed_to_create_feedback" }, { status: 500 })
  }
}
