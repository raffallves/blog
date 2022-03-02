import Link from 'next/link'

export default function NavBar<Any>() {
    return (
        <>
            <style jsx>{`
                nav {
                    background: black;
                    color: white;
                }
            `}</style>
            <nav>
                <Link href={'/about'}>
                    <a>About</a>
                </Link>
            </nav>
        </>
    )
}