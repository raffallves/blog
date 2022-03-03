import Link from 'next/link'
import Image from 'next/image'

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

                #logo {
                    justify-self: flex-start !important;
                }
            `}</style>
            <nav>
                <Link href={'/'}>
                    <a>
                        <Image id={'logo'} src={'/logo.svg'} height={'80px'} width={'80px'} alt={'logo'} />
                    </a>
                </Link>
                <Link href={'/about'}>
                    <a id={'about'}>About</a>
                </Link>
            </nav>
        </>
    )
}