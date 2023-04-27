import { useRouter } from 'next/router'
import { extractSubject, themes } from '@/lib/subjects'

export default function Footer<Any>() {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = !subject ? '#ff0000' : themes.get(subject)

    let intro: string

    if (router.pathname.substring(0, 3) === '/en') {
        intro = 'by'
    } else if (router.pathname.substring(0, 3) === '/pt') {
        intro = 'por'
    }

    return (
        <footer>
            <style jsx>{`
                footer {
                    position: relative;
                    bottom: 0;
                    width: 100%;
                    height: 10vh;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-itens: center;
                    z-index: 10;
                }

                hr {
                    width: 100%;
                    background-image: -moz-linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                    background-image: -webkit-linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
                    border: none;
                }

                ::selection {
                    background-color: ${theme};
                    color: white;
                }
            
            `}</style>
            <hr/>
            <p>{intro} <strong>Rafael Alves 🧠📚💰🌌</strong></p>
        </footer>
    )
}