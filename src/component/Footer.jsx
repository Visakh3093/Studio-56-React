import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { t } = useTranslation()
  const { lang } = useSelector(state => state.language)
  const scrollToTop = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div id="footer" className={lang !== "en" ? 'rtl-container' : 'ltr-container'} >
      <div className="container">
        <div className="clearfix"></div>
        <div className="copy-text">{t('footer')}</div>
        <a href="https://mada.org.qa/" target="_blank">
          <img
            src="https://monitor.mada.org.qa/acc/en/N1EuEczqIXmhWhrWDdYIXALNseSGpmAc5vGQejSV4WhaNJ9gOpNDTU0hqGbI"
            alt="Mada National Web Accreditation, Access Certified"
          />
        </a>
      </div>
      <div>

        <button className="scroll-top scroll-top-en" onClick={scrollToTop}>{t('footer-top')}</button>
      </div>
    </div>
  );
};

export default Footer;
