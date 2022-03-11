import Link from 'next/link'
import Logo from './Logo'

export default function NavBar<Any>() {
    return (
        <header>
            <style jsx>{`
                nav {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    align-content: center;
                    background: black;
                    color: white;
                    height: 10vh;
                    font-size: 1.2rem;
                }

            `}</style>
            <nav>
                <Link href={'/'}>
                    <a>
                        <Logo />
                    </a>
                </Link>
            </nav>
        </header>
    )
}