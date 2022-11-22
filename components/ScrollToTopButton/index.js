import React, { useState, useEffect } from "react"
import { BiArrowFromBottom } from "react-icons/bi"
import styles from "./styles"

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
    return () => {
      window.removeEventListener("scroll", toggleVisible)
    }
  }, [])

  return (
    <div className="button-top-container">
      <button
        type="button"
        className={`button-top ${
          visible ? "button-top-show" : "button-top-hidden"
        }`}
        onClick={scrollToTop}
      >
        <BiArrowFromBottom
          fontSize="large"
          className="icon-arrow"
          aria-hidden="true"
        />
      </button>

      <style jsx>{styles}</style>
    </div>
  )
}

export default ScrollToTopButton
