import React from 'react'
import Lowerimg from './Lowerimg'
import { useTranslation } from 'react-i18next'

const ContactSuccess = () => {
  const {t} = useTranslation()
  return (
    <div>
        
        <div className="container">
  <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
    <ul>
      <li className="breadcrumb-item">
        <a href="/">{t('home')}</a>{" "}
      </li>
      <li className="breadcrumb-item">
        <a tabIndex={0} aria-current="page" >
          <span>{t('contactus')}</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

<div id="skipContent">
  <div id="main-container">
    <div className="container">
      <div className="row col-2">
        <div className="item subscribe-form">
          <h2 style={{ marginBottom: 10 }}>{t('contactus')}</h2>
          <div className="thankyou-box" tabIndex={0}>
            <h2 className="">{t("Thank you")}</h2>
            <span className="">
              {t("We appreciate that you've taken the time to write us")}
            </span>
            <br />
            <span className=""> {t("We'll get back to you very soo")}n </span>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>


<Lowerimg />

    </div>
  )
}

export default ContactSuccess