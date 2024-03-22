import React from 'react'
import Pagetitle from '../component/Pagetitle'
import Footer from '../component/Footer'
import ContactForm from '../component/ContactForm'
import { useTranslation } from 'react-i18next'

const Contactus = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div id="main-container">
        <Pagetitle name={t('contactus')} />
        <ContactForm />
      </div>


    </div>
  )
}

export default Contactus