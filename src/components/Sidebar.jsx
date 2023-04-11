import { useGlobalContext } from '../context'
import sublinks from '../data'
import { AiFillCloseSquare } from 'react-icons/ai'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      {sublinks.map((link) => {
        return <Sublink {...link} key={link.pageId} />
      })}
      <button onClick={closeSidebar} type="button" className="btn-sidebar">
        <AiFillCloseSquare className="icon-sidebar" />
      </button>
    </aside>
  )
}
export default Sidebar

const Sublink = ({ page, links }) => {
  return (
    <article className="sublink">
      <h4 className="sublink-title">{page}</h4>
      <div className="links-container">
        {links.map((link) => {
          const { id, label, icon, url } = link
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </article>
  )
}
