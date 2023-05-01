import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Languages from '@/components/icons/Languages'
import Brazil from '@/components/icons/flags/Brazil'
import USA from '@/components/icons/flags/USA'

export default function LangMenu<Any>({ layoutRef }) {
    const [isShow, setIsShow] = useState(false)
    const router = useRouter()

    // Close language menu with outside click
    useEffect(() => {
        // Saving the ref in a variable prevents it from running into an error if the ref changes
        // since its a react node
        const node = layoutRef.current
        node.addEventListener('click', () => {
            setIsShow(false)
        })

        return () => {
            node.removeEventListener('click', () => {
                setIsShow(false)
            })
        }

    }, [layoutRef])

    return (
        <>
            <style jsx>{`
                .menu-wrapper {
                    height: auto;
                    width: 70px;
                    display: flex;
                    justify-content: space-around;
                    align-content: center;
                    flex-wrap: wrap;
                    position: relative;
                }

                .lang-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: none;
                    border: none;
                    padding: 0;
                }

                .lang-menu-wrapper {
                    width: 70px;
                    display: none;
                }

                .lang-menu-wrapper.open {
                    min-height: 70px;
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    top: 65px;
                    left: 5px;
                }

                .lang-menu {
                    max-width: 60px;
                    background-color: #000;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: center;
                    justify-content: center;
                }

                .lang-menu {
                    cursor: pointer;
                }

            `}</style>
            <div className="menu-wrapper">
                <button className="lang-icon" onClick={() => setIsShow(!isShow)}>
                    <Languages />
                </button>
                <div className={`lang-menu-wrapper${isShow ? ' open' : ''}`}>
                    <div className="lang-menu">
                        <Link href={router.pathname.replace(router.pathname.substring(0, 3), '/pt')}>
                            <Brazil />
                        </Link>
                        <Link href={router.pathname.replace(router.pathname.substring(0, 3), '/en')}>
                            <USA />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}