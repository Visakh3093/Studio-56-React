import React from 'react'
import Altimg from '../assets/images/logo56.png'
import { useTranslation } from 'react-i18next'

const EquipmentContainer = ({...item}) => {
    const {t} = useTranslation()
    // console.log(item);
  return (
  
            <div className="machine-item small">
                <figure className="machine-item-figure small">
                    <img src={ item.field_equipment_image ?  `http://51.136.51.121/drupal-app/web${item.field_equipment_image}` : Altimg } alt="Coding 101 image" />
                   


                </figure>
                <aside className="machine-item-content">
                    <h5>{item.title} <span>{item.field_equipment_type}</span>{" "}</h5>
                    <div className="machine-small-btn">
                        <a target="_black" href="">
                            <span>{t('updated-modal')}</span>
                            <em>{item.field_updated_model}</em>
                        </a>
                    </div>
                </aside>
            </div>
   

  )
}

export default EquipmentContainer