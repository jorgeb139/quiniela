import styles from './MenuToggle.module.scss'

interface Props {
  isActive: boolean
  onClick: () => void
}

export const MenuToggle: React.FC<Props> = ({ isActive, onClick }) => (
  <button className={styles.bars_menu} onClick={onClick}>
    <span className={isActive ? styles.span_active : ''}></span>
    <span className={isActive ? styles.span_active : ''}></span>
    <span className={isActive ? styles.span_active : ''}></span>
  </button>
)
