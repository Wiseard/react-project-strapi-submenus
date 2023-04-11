import { useGlobalContext } from '../context'
import logo from '../logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavLinks from './NavLinks'

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext()
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }
  return (
    <nav onMouseOver={handleSubmenu}>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <button onClick={openSidebar} type="button" className="btn-menu">
          <GiHamburgerMenu className="icon-menu" />
        </button>
        <NavLinks />
      </nav>
    </nav>
  )
}
export default Navbar
