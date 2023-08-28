import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuItems from '../../utils/MenuItems'
import styles from './header.module.scss'

const MenuList: React.FC = () => {
  const router = useRouter()

  return (
    <ul>
      {MenuItems.map(({ menuTitle, pageURL }) => (
        <li key={menuTitle}>
          <Link href={pageURL}>
            <a className={router.pathname === pageURL ? styles.selected : ''}>{menuTitle}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuList
