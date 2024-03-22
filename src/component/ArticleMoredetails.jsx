import { Link } from "react-router-dom";
import Pagetitle from "./Pagetitle";
import { useTranslation } from "react-i18next";

const ArticleMoredetails = ({ img, ...data }) => {
  const { t } = useTranslation();

  return (
    <div class="articles">
      <Pagetitle name={t("article")} />

      <div id="skipContent">
        <div id="main-container" className="single-news">
          <div>
            <div className="container">
              <span className="multi-square">
                <b>
                  <i />
                </b>
              </span>
              <span className="grey-square-rotate" />
              <span className="grey-square-rotate bottom" />
              <span className="orange-circle" />
              <nav
                className="breadcrumb"
                id="breadcrumb-wrap"
                aria-label="breadcrumb"
              >
                <ul>
                  <li className="breadcrumb-item">
                    <Link to="/">{t("home")}</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/media-center">{t("mediacenter")}</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a tabIndex={0} aria-current="page">
                      <span>{data && data.title}</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <h2
                id="gallery-title"
                tabIndex={0}
                aria-label="Green is the New Smart Published 17 May 2023 
"
              >
                {data && data.title}
              </h2>
              <div
                className="date-wrap"
                dangerouslySetInnerHTML={{ __html: data.date }}
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: data && data.description }}
                className="content"
              >
              
              </div>
            </div>
            <div className="container">
              <div className="view-more articles">
                <Link to="/media-center">
                  <i className="material-icons ar">arrow_backward</i> {t('back')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMoredetails;
