import React from 'react'
import '../Styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon />
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
      <p>&copy; 2021 napoPizzeria.com </p>
    </div>
  )
}

export default Footer