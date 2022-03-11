import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout<Any>({ children }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}