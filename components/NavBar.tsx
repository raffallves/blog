import Link from 'next/link'

export default function NavBar<Any>() {
    return (
        <>
            <style jsx>{`
                nav {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: flex-end;
                    align-content: center;
                    background: black;
                    color: white;
                    height: 7vh;
                    font-size: 1.2rem;
                }

                #about {
                    padding-right: 2em;
                }
            `}</style>
            <nav>
                <Link href={'/about'}>
                    <a id={'about'}>About</a>
                </Link>
            </nav>
        </>
    )
}