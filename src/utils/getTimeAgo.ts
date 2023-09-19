import { formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getTimeAgo(createdAt?: string) {
  if (!createdAt) {
    return 'Data inválida' // ou alguma mensagem padrão
  }

  try {
    const parsedCreatedAt = parseISO(createdAt)
    const relativeTime = formatDistanceToNow(parsedCreatedAt, {
      locale: ptBR,
      addSuffix: false,
    })

    return relativeTime
  } catch (error) {
    console.error('Erro ao formatar a data:', error)
    return 'Data inválida' // ou outra mensagem de erro
  }
}
