import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
        <footer className="footer">
                &copy; {new Date().getFullYear()} RenderSpark. All rights reserved.
        </footer>
    </>
  )
}

export default Footer