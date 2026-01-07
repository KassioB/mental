"use client"

import { useEffect, useState } from "react"
import { Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface RatingDialogProps {
  facilityId: number
  facilityName: string
  onClose: () => void
}

export function RatingDialog({ facilityId, facilityName, onClose }: RatingDialogProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [institution, setInstitution] = useState<{
    id: number
    name: string
    latitude: number
    longitude: number
    address: string
    type: string
    openingHours: string
    phone: string
    accessibilityTags: any
    feedbacks: Array<{
      id: number
      text: string
      rating: number
      date: string
    }>
  } | null>(null)
  const [infoLoading, setInfoLoading] = useState(false)
  const [infoError, setInfoError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      setInfoLoading(true)
      setInfoError(null)
      try {
        const res = await fetch(`/api/mapa/${facilityId}`, { cache: "no-store" })
        if (!res.ok) throw new Error("failed")
        const data = await res.json()
        if (mounted) setInstitution(data)
      } catch {
        if (mounted) setInfoError("Não foi possível carregar as informações do local")
      } finally {
        if (mounted) setInfoLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [facilityId])

  const handleSubmit = async () => {
    setSending(true)
    setError(null)
    try {
      const res = await fetch(`/api/mapa/${facilityId}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: comment.slice(0, 500), rating }),
      })
      if (!res.ok) {
        throw new Error("failed")
      }
      // Após o envio bem-sucedido, recarregar as informações da instituição para atualizar os feedbacks
      const updatedRes = await fetch(`/api/mapa/${facilityId}`, { cache: "no-store" })
      if (!updatedRes.ok) throw new Error("failed_to_reload_institution")
      const updatedData = await updatedRes.json()
      setInstitution(updatedData)

      setIsSubmitted(true)
      setComment("") // Limpar o campo de comentário
      setRating(0) // Resetar a avaliação
      
      // Fechar o modal automaticamente após 3 segundos
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (e) {
      console.error(e)
      setError("Falha ao enviar. Tente novamente.")
    } finally {
      setSending(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="relative z-[10000] bg-card border-2 border-border rounded-xl shadow-2xl p-8 max-w-md mx-4 text-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="absolute top-2 right-2 hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </Button>
          <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Avaliação enviada!</h3>
          <p className="text-muted-foreground mb-4">Obrigado por compartilhar sua experiência.</p>
          <Button onClick={onClose} className="bg-sky-600 hover:bg-sky-700 text-white w-full">
            Fechar
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative z-[10000] bg-card border-2 border-border rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground mb-1">Avaliar Atendimento</h2>
            <p className="text-sm text-muted-foreground">{facilityName}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-muted -mt-1 -mr-1">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Institution info */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Informações do local</h3>
            {infoLoading && (
              <p className="text-xs text-muted-foreground">Carregando informações...</p>
            )}
            {infoError && (
              <p className="text-xs text-destructive">{infoError}</p>
            )}
            {institution && (
              <div className="space-y-1 text-sm">
                <div><span className="text-muted-foreground">Tipo:</span> {institution.type}</div>
                <div><span className="text-muted-foreground">Endereço:</span> {institution.address}</div>
                <div><span className="text-muted-foreground">Horário:</span> {institution.openingHours}</div>
                <div><span className="text-muted-foreground">Telefone:</span> {institution.phone}</div>
                {(() => {
                  try {
                    const tags = Array.isArray(institution.accessibilityTags) 
                      ? institution.accessibilityTags 
                      : JSON.parse((institution.accessibilityTags as unknown as string) || "[]")
                    if (!tags.length) return null
                    return (
                      <div className="mt-2">
                        <span className="text-muted-foreground text-sm">Acessibilidade:</span>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {tags.map((t: string, i: number) => (
                            <span key={i} className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs border">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  } catch {
                    return null
                  }
                })()}
              </div>
            )}
          </div>

          {/* Feedbacks existentes */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Avaliações existentes</h3>
            {infoLoading && (
              <p className="text-xs text-muted-foreground">Carregando avaliações...</p>
            )}
            {infoError && (
              <p className="text-xs text-destructive">{infoError}</p>
            )}
            {institution && institution.feedbacks && institution.feedbacks.length > 0 ? (
              <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                {institution.feedbacks.map((feedback) => (
                  <div key={feedback.id} className="p-3 bg-muted/50 rounded-md">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= feedback.rating ? "fill-yellow-400 text-yellow-400" : "fill-none text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-foreground">{feedback.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(feedback.date).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              !infoLoading && <p className="text-sm text-muted-foreground">Nenhuma avaliação ainda.</p>
            )}
          </div>

          {/* Rating stars */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">Como foi sua experiência?</label>
            <div className="flex gap-2 justify-center py-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  <Star
                    className={`w-10 h-10 transition-colors ${
                      star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "fill-none text-muted"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-muted-foreground">
                {rating === 1 && "Muito insatisfeito"}
                {rating === 2 && "Insatisfeito"}
                {rating === 3 && "Regular"}
                {rating === 4 && "Satisfeito"}
                {rating === 5 && "Muito satisfeito"}
              </p>
            )}
          </div>

          {/* Comment field */}
          <div>
            <label htmlFor="comment" className="block text-sm font-semibold text-foreground mb-2">
              Conte-nos sobre sua experiência
            </label>
            <Textarea
              id="comment"
              placeholder="Descreva como foi o atendimento, o que você achou das instalações, equipe, tempo de espera, etc."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground mt-1">{comment.length}/500 caracteres</p>
            {error && <p className="text-xs text-destructive mt-1">{error}</p>}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-border bg-muted/30">
          <Button 
            variant="outline" 
            onClick={onClose} 
            className="flex-1 bg-transparent hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200"
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={rating === 0 || sending} 
            className="flex-1 bg-[#02629C] hover:bg-[#02629C]/90 text-white"
          >
            Enviar Avaliação
          </Button>
        </div>
      </div>
    </div>
  )
}
