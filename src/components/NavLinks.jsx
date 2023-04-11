import { useGlobalContext } from '../context'
import sublinks from '../data'

const NavLinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page } = link
        return (
          <button
            onMouseEnter={() => setPageId(pageId)}
            key={pageId}
            className="nav-link"
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
export default NavLinks
