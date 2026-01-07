import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"

type Feedback = {
  id: number
  text: string
  rating: number
  date: string
}

type Institution = {
  id: number
  name: string
  latitude: number
  longitude: number
  address: string
  type: string
  openingHours: string
  phone: string
  accessibilityTags: any
  feedbacks: Feedback[]
}

async function getInstitution(id: number): Promise<Institution> {
  const { data: institution, error } = await supabase
    .from('Institution')
    .select('*, feedbacks:Feedback(*)')
    .eq('id', id)
    .single()

  if (error || !institution) {
    notFound()
  }

  // Ordenar feedbacks manualmente
  if (institution.feedbacks) {
    institution.feedbacks.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  return institution as unknown as Institution
}

export default async function InstitutionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const institution = await getInstitution(Number(id))
  const tags: string[] = Array.isArray(institution.accessibilityTags) 
    ? (institution.accessibilityTags as string[]) 
    : []

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 md:px-8 lg:px-16 xl:px-24 py-8 bg-background">
        <div className="mb-4">
          <Link href="/mapa" className="text-sm text-sky-600 hover:text-sky-800 underline underline-offset-4 font-medium">
            Voltar para o mapa
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">{institution.name}</h1>
        <p className="text-muted-foreground mb-6">{institution.type}</p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border border-sky-100 bg-sky-50/30 p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-sky-900">Informações</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div><span className="text-sky-600 font-medium">Endereço:</span> {institution.address}</div>
                <div><span className="text-sky-600 font-medium">Horário:</span> {institution.openingHours}</div>
                <div><span className="text-sky-600 font-medium">Telefone:</span> {institution.phone}</div>
              </div>
              {tags.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold mb-2 text-sky-900">Acessibilidade</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t, i) => (
                      <span key={i} className="bg-sky-100 text-sky-700 px-2 py-1 rounded-md text-xs border border-sky-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-sky-900">Feedbacks</h2>
              {institution.feedbacks.length === 0 ? (
                <p className="text-sm text-muted-foreground">Ainda não há feedbacks para este local.</p>
              ) : (
                <ul className="space-y-4">
                  {institution.feedbacks.map((fb) => (
                    <li key={fb.id} className="border border-sky-50 bg-sky-50/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-sky-600 font-medium">
                          {new Date(fb.date).toLocaleDateString()}
                        </span>
                        <span className="text-sm font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">Nota {fb.rating}/5</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{fb.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-2 text-sky-900">Localização aproximada</h2>
              <p className="text-sm text-muted-foreground">Lat: {institution.latitude}, Lng: {institution.longitude}</p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/30 p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-2 text-sky-900">Avaliar</h2>
              <p className="text-sm text-muted-foreground">Volte ao mapa para avaliar este serviço.</p>
              <Link href="/mapa" className="mt-3 inline-block bg-[#02629C] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#02629C]/90 transition-colors shadow-sm">
                Abrir mapa
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
