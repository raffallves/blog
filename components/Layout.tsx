import NavBar from './NavBar'
import Footer from './Footer'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function Layout<Any>({ children }) {
    const router = useRouter()
    // Ref that will be used to close the language menu on an outside click
    const layoutRef = useRef(null)

    // Change the html's lang attribute based on the pathname
    // for accessibility
    useEffect(() => {
        const html = document.getElementsByTagName('html')

        if (html[0].lang !== router.pathname.substring(1, 3)) {
            html[0].setAttribute('lang', router.pathname.substring(1, 3))
        }
    }, [router])
    
    return (
        <>
            <NavBar layoutRef={layoutRef} />
            <style jsx>{`
                main {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    margin-right: 5%;
                    margin-left: 5%;
                    padding-top: 100px;
                    padding-bottom: 50px;
                }

            `}</style>
            <main ref={layoutRef}>{children}</main>
            <Footer />
        </>
    )
}