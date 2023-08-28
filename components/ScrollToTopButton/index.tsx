import { useState, useEffect } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'
import styles from './ScrollToTopButton.module.scss'

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const addEventListener = () => {
    window.addEventListener('scroll', toggleVisible)
  }

  const removeEventListener = () => {
    window.removeEventListener('scroll', toggleVisible)
  }

  useEffect(() => {
    addEventListener()
    return () => {
      removeEventListener()
    }
  }, [])

  return (
    <div className={styles.buttonTopContainer}>
      <button
        type='button'
        className={`${styles.buttonTop} ${visible ? styles.buttonTopShow : styles.buttonTopHidden}`}
        onClick={scrollToTop}
      >
        <BiArrowFromBottom fontSize='large' className={styles.iconArrow} aria-hidden='true' />
      </button>
    </div>
  )
}

export default ScrollToTopButton
