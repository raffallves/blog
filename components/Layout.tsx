import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout<Any>({ children }) {
    return (
        <>
            <NavBar />
            <style jsx>{`
                main {
                    display: flex;
                    justify-content: center;
                    margin-right: 10%;
                    margin-left: 10%;
                    padding-top: 100px;
                }
            `}</style>
            <main>{children}</main>
            <Footer />
        </>
    )
}