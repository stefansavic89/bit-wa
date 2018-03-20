import React from 'react'
import PropTypes from 'prop-types'


const Footer = (props) => {
    return (
        <footer className="page-footer">
        <div class="footer-copyright">
          <div class="container">
          © 2018 Copyright Bit 
          </div>
        </div>
      </footer>
    )
}

Footer.propTypes={
    title: PropTypes.string.isRequired
}


export default Footer;