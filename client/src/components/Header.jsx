import logo from '../icons/foodLogo.svg'
import search from '../icons/search.svg'

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo Dapur Mama" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Tentang Kami</a></li>
                    <li><a href="/contact">Kontak</a></li>
                    <li><a href="/branch">Cabang</a></li>
                </ul>
                <a href=""><img src={search} alt="Pencarian" /></a>
            </header>
        </>
    )
}

export default Header