import Link from 'next/link'
import Image from 'next/image'

export default function NavBar<Any>() {
    return (
        <>
            <style jsx>{`
                nav {
                    display: grid;
                    grid-template-columns: 50px 1fr 50px;
                    justify-itens: end;
                    align-itens: center;
                    background: black;
                    color: white;
                    height: 10vh;
                    font-size: 1.2rem;
                }

                #about {
                    justify-self: end;
                    align-self: center;
                }

                #logo {
                    align-self: center;
                    padding-left: 0px;
                }

            `}</style>
            <nav>
                <Link href={'/'}>
                    <a id={'logo'}>
                    <svg viewBox="-4200 -1000 8500 15000" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2182.91 9643.16L63.8654 5980.9C63.8654 5980.9 234.986 6165.71 467.312 5999.01C717.125 5819.77 874.508 5887.85 874.508 5887.85L2187.9 8158.65L3503.17 5884.72C3503.17 5884.72 3714.88 5804.16 3858.52 5967.16C4038.39 6228.84 4274.46 5980.9 4274.46 5980.9L2182.91 9643.16Z" fill="#FF0000"/>
                        <path d="M2179.52 147.75L4274.2 5975.26C4274.2 5975.26 4083.09 6224.45 3875.12 5987.13C3704.49 5792.41 3501.65 5887.83 3501.65 5887.83L2185.14 2283.65L869.871 5887.83C869.871 5887.83 675.641 5834.18 474.542 5994.62C242.84 6179.49 55.4805 5975.26 55.4805 5975.26L2179.52 147.75Z" fill="white"/>
                        <path d="M3501.32 5886.54C3501.32 5886.54 3726.16 5796.36 3888.53 6003.2C4050.91 6210.05 4268.5 5964.5 4268.5 5964.5" stroke="black" stroke-width="115"/>
                        <path d="M59 5950C59 5950 228.427 6176.47 467.31 6000.04C706.194 5823.6 870.446 5891.05 870.446 5891.05" stroke="black" stroke-width="115"/>
                        <path d="M2180.14 146.992L55.4805 5973.26L2180.14 9646.76L4278.57 5973.88L2180.14 146.992Z" stroke="black" stroke-width="100"/>
                        <path d="M872.699 5888.75L2186.09 8163.93L3501.36 5888.75L2186.09 2280.83L872.699 5888.75Z" stroke="black" stroke-width="100"/>
                    </svg>
                    </a>
                </Link>
                <Link href={'/about'}>
                    <a id={'about'}>About</a>
                </Link>
            </nav>
        </>
    )
}