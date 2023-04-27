import { useRouter } from 'next/router'
import { extractSubject, themes } from '@/lib/subjects'

export const Paragraph = ({ children }) => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)

    return (
        <>
            <style jsx>{`
                .mdx-p {
                    font-size: 1.1em;
                }

                .mdx-p::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }
                
                .mdx-p::selection {
                    background-color: ${theme};
                    color: white;
                }
            `}</style>
            <p className="mdx-p">{children}</p>
        </>
)}

const H1 = ({ children }) => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)

    return (
        <>
            <style jsx>{`
                .mdx-h1::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }
                
                .mdx-h1::selection {
                    background-color: ${theme};
                    color: white;
                }
            `}</style>
            <h1 className='mdx-h1'>{children}</h1>
        </>
    )
}

const H2 = ({ children }) => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)
    
    return (
        <>
            <style jsx>{`
                .mdx-h2::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }
                
                .mdx-h2::selection {
                    background-color: ${theme};
                    color: white;
                }
            `}</style>
            <h2 className='mdx-h2'>{children}</h2>
        </>
    )
}

const H3 = ({ children }) => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)
    
    return (
        <>
            <style jsx>{`
                .mdx-h3::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }
                
                .mdx-h3::selection {
                    background-color: ${theme};
                    color: white;
                }
            `}</style>
            <h3 className='mdx-h3'>{children}</h3>
        </>
    )
}

const H4 = ({ children }) => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)
    
    return (
        <>
            <style jsx>{`
                .mdx-h4::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }
                
                .mdx-h4::selection {
                    background-color: ${theme};
                    color: white;
                }
            `}</style>
            <h4 className='mdx-h4'>{children}</h4>
        </>
    )
}

const H5 = ({ children }) => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)
    
    return (
        <>
            <style jsx>{`
                .mdx-h5::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }
                
                .mdx-h5::selection {
                    background-color: ${theme};
                    color: white;
                }
            `}</style>
            <h5 className='mdx-h5'>{children}</h5>
        </>
    )
}

const H6 = ({ children }) => {
    const router = useRouter()
    const subject = extractSubject(router.pathname)
    const theme = themes.get(subject)
    
    return (
        <>
            <style jsx>{`
                .mdx-h6::-moz-selection {
                    background-color: ${theme};
                    color: white;
                }
                
                .mdx-h6::selection {
                    background-color: ${theme};
                    color: white;
                }
            `}</style>
            <h6 className='mdx-h6'>{children}</h6>
        </>
    )
}

export const Heading = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
}