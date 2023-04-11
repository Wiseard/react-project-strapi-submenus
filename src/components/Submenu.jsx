import { useRef } from 'react'
import { useGlobalContext } from '../context'
import sublinks from '../data'

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)

  const submenuContainer = useRef(null)

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current
    const { clientX, clientY } = e
    const { left, right, bottom } = submenu.getBoundingClientRect()
    if (clientY > bottom - 1 || clientX < left - 1 || clientX > right - 1) {
      setPageId(null)
    }
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
        ref={submenuContainer}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default Submenu
