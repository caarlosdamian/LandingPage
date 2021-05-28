import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Linkedink from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
          <div className="socialMedia">
              <InstagramIcon/>
              <TwitterIcon/>
              <FacebookIcon/>
              <Linkedink/>
            <p>&copy;2021 carlosDamian.com</p>
          </div>
        </div>
    )
}

export default Footer
