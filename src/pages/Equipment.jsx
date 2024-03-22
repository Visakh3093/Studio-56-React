import React, { useEffect, useState } from 'react'
import Pagetitle from '../component/Pagetitle'
import EquipmentContainer from '../component/EquipmentContainer'
import axiosInstance from '../../Axios'
import { useDispatch, useSelector } from 'react-redux'
import { loaderOff, loaderOn } from '../redux/slices/loaderSlice'
import { Link } from 'react-router-dom'
import { setResults } from '../redux/slices/EquipmentSlice'
import { useTranslation } from 'react-i18next'
import urls from '../endPoints/urls'

const Equipment = () => {
  const dispatch = useDispatch()
  // const results = useSelector(state=>state.equipment.results)
  const [{ lang }, { results }] = useSelector(state => [state.language, state.equipment])
  const { t } = useTranslation()
  useEffect(() => {
    dispatch(loaderOn());
    axiosInstance.get(urls.equipmentEndpoint(lang)).then((res) => {
      console.log("Equipment Data:", res.data.results);

      dispatch(setResults(res.data.results))
      dispatch(loaderOff())

    }).catch((err) => {
      console.log(err);
      dispatch(loaderOff())
    });
  }, [lang]);
  return (
    <div>
      <Pagetitle name={t("equipment")} />

      <div className="container">
        <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
          <ul>
            <li className="breadcrumb-item">
              <Link
                to="/">{t('home')}</Link>
            </li>
            <li className="breadcrumb-item">
              <a tabindex="{0}" aria-current="page" href="/equipment-used">
                <span>{t("equipment")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <h2 className="line">{t("equipment")}</h2>
        <div className="row machine-item-small-holder">
          {
            results && results.map((item, index) => (
              <div className="col m12 l6">
                <EquipmentContainer {...item} />
              </div>
            ))
          }
        </div>
        <nav className="pagination-wrapper" aria-label="pagination">
          <ul className="pagination">
            <li className="active">
              <a className="undefined" href="#" aria-label="Go to page number 1">
                1
              </a>
            </li>
          </ul>
        </nav>
      </div>



      {/* <Footer /> */}
    </div>
  )
}

export default Equipment