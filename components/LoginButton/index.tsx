import { ReactNode, MouseEventHandler } from 'react'
import styles from './LoginButton.module.scss'

interface LoginButtonProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const LoginButton: React.FC<LoginButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
