import Link from 'next/link'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import MenuItems from '../../utils/MenuItems'
import styles from './header.module.scss'
import { MenuToggle } from './MenuToggle'
import { Logo } from './Logo'
import MenuList from './MenuList'

interface Props {
  userName?: string
}

export const PrincipalHeader: React.FC<Props> = ({ userName }) => {
  const [menuActive, setMenuActive] = useState(false)

  const handleMenuToggle = useCallback(() => {
    setMenuActive((prevState) => !prevState)
  }, [])

  return (
    <header className={styles.header}>
      <div className={menuActive ? styles.white_opacity_active : styles.white_opacity_inactive}></div>
      <div className={styles.header_content}>
        <Logo />
        <nav className={menuActive ? styles.nav_active : styles.nav_inactive}>
          <div className={styles.logo_mobile}>
            <Logo />
          </div>
          <MenuList />
        </nav>
        <MenuToggle isActive={menuActive} onClick={handleMenuToggle} />
      </div>
    </header>
  )
}
