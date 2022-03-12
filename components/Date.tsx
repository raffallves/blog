import { parseISO, format } from 'date-fns'

export default function Date<Any>({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}