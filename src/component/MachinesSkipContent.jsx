import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MachinesSkipContent = ({ ...item }) => {
  const { t } = useTranslation();
  return (
    <>
      <figure className="machine-item-figure">
        <img
          src={`http://51.136.51.121/drupal-app/web/${item.field_machines_image_1}`}
          alt="Back End Image Error"
        />
      </figure>
      <aside className="machine-item-content">
        <Link to={`/machine-detail/${item.nid}`}>
          <h4>{item.title}</h4>
        </Link>

        <h5>{item.field_machine_brand}</h5>
        <div
          dangerouslySetInnerHTML={{ __html: item.field_machines_brief }}
        ></div>
        <a
          href="#"
          aria-label="view more Ultimaker 3 & Ultimaker 3 Extended"
          className="machine-btn"
        >
          {t("view-more-btn")}
        </a>
      </aside>
    </>
  );
};

export default MachinesSkipContent;
