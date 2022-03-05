import Link from 'next/link'
import Image from 'next/image'

export default function NavBar<Any>() {
    return (
        <>
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

                #about {
                    align-self: center;
                }

                .logo {
                    position: relative;
                }

                .logo #V {
                    fill: #f00;
                }

                .logo #A {
                    fill: #fff;
                }

                .logo .handles {
                    stroke: #000;
                    stroke-width: 0.728948;
                }

                .logo .contour {
                    stroke: #000;
                    stroke-width: 0.633868;
                }

            `}</style>
            <nav>
                <Link href={'/'}>
                    <a>
                    <svg className={'logo'} width="70" height="200" viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id={'V'} d="M14.4839 61.1925L1.05204 37.9786C1.05204 37.9786 2.13672 39.15 3.60936 38.0934C5.19284 36.9573 6.19043 37.3888 6.19043 37.3888L14.5156 51.7826L22.8526 37.369C22.8526 37.369 24.1946 36.8583 25.1051 37.8915C26.2453 39.5502 27.7417 37.9786 27.7417 37.9786L14.4839 61.1925Z"/>
                        <path id={'A'} d="M14.4636 1.00586L27.7411 37.9446C27.7411 37.9446 26.5297 39.5241 25.2115 38.0198C24.1299 36.7855 22.8442 37.3904 22.8442 37.3904L14.4992 14.5446L6.16216 37.3904C6.16216 37.3904 4.931 37.0503 3.65629 38.0673C2.18761 39.2391 1 37.9446 1 37.9446L14.4636 1.00586Z"/>
                        <g className={'handles'}>
                            <path id={'right-handle'} d="M22.8416 37.3799C22.8416 37.3799 24.2668 36.8083 25.296 38.1194C26.3253 39.4305 27.7045 37.8741 27.7045 37.8741"/>
                            <path id={'left-handle'} d="M1.02042 37.7828C1.02042 37.7828 2.09436 39.2183 3.60856 38.0999C5.12277 36.9816 6.16391 37.4091 6.16391 37.4091"/>
                        </g>
                        <g className={'contour'}>
                            <path id={'outer'} d="M14.4675 1L1 37.9308L14.4675 61.2159L27.7688 37.9348L14.4675 1Z"/>
                            <path id={'inner'} d="M6.17935 37.3932L14.5045 51.8148L22.8416 37.3932L14.5045 14.5237L6.17935 37.3932Z"/>
                        </g>
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