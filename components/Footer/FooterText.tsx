import styles from './footer.module.scss'

export const FooterText: React.FC = () => {
  return (
    <footer className={styles.footer}>
      Desarrollador por: Jorge Burguera y Raul Febres - {new Date().getFullYear()}
    </footer>
  )
}
