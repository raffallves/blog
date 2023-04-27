import Logo from './Logo'
import LangMenu from './LangMenu'
import Back from '@/components/icons/Back'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { extractSubject, themes } from '@/lib/subjects'
import Link from 'next/link'
 
export default function NavBar<Any>({ layoutRef }) {
    const [backLink, setBackLink] = useState('')
    const router = useRouter()

    // Don't show language menu on post pages
    const dontShowLang = router.pathname.includes('posts')

    // Don't show the back button on the home page
    const dontShowBack = router.pathname.length === 3 ? true : false

    // Adjust the nav bar's element justify property depending on the presence of the back button
    const navJustify = dontShowBack ? 'flex-end' : 'space-between'

    // Use brand theme color on home page, and subject theme color on
    // respective subject's pages
    const subject = extractSubject(router.pathname)
    const theme = !subject ? '#ff0000' : themes.get(subject)

    // Set link for the back button based on the current path
    useEffect(() => {
        if (router.pathname.includes('posts')) {
            let counter = 0
            for (let i = router.pathname.length - 1; i > 0; i--) {
                if (router.pathname[i] === '/') {
                    if (counter === 1) {
                        setBackLink(router.pathname.substring(0, i))
                    }
                    counter++
                }
            }
        } else {
            for (let i = router.pathname.length - 1; i > 0; i--) {
                if (router.pathname[i] === '/') {
                    setBackLink(router.pathname.substring(0, i))
                }
            }
        }

    }, [router])
    
    return (
        <header>
            <style jsx>{`
                nav {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: ${navJustify};
                    background: black;
                    color: white;
                    height: 10vh;
                    width: 100%;
                    font-size: 1.2rem;
                    position: relative;
                }

            `}</style>
            <nav>
                <Logo theme={theme} />
                {!dontShowBack && 
                    <Link href={backLink}>
                        <Back />
                    </Link>
                }
                {!dontShowLang && <LangMenu layoutRef={layoutRef}/>}
            </nav>
        </header>
    )
}