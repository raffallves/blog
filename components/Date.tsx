import { parseISO, format } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'

export default function Date<Any>({ dateString, language }) {
    const date = parseISO(dateString)

    const locales = {
        en: enUS,
        pt: ptBR
    }

    return <time dateTime={dateString}>{format(date, 'P', { locale: locales[language] })}</time>
}