import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pagetitle from "./Pagetitle";
import { useTranslation } from "react-i18next";

const GalleryMoredetails = ({ img, ...data }) => {
  const [count, setCount] = useState(1);
  const { t } = useTranslation();

  const buttonPlus = (e) => {
    if (count < img.length) {
      setCount(count + 1);
    }
  };

  const buttonMinz = (e) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  console.log(data);

  return (
    <div class="gallery">
      <Pagetitle name={t("gallery")} />

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
                <span>{data.title}</span>
              </a>
            </li>
          </ul>
        </nav>
        <h2
          id="gallery-title"
          tabIndex={0}
          aria-label="test Gallery Published 17 December 2023 
"
        >
          {data.title}
        </h2>
        <div className="date-wrap">{data.date}</div>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="content"
        ></div>
      </div>

      <div className="gallery-news">
        <div className="container">
          <div className="img-wrap">
            <div className="item-list">
              <ul className="list-group">
                <li className="list-group-item">
                  <div>
                    <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                      <div className="field__label visually-hidden">Image</div>
                      <div className="field__item">
                        {" "}
                        <img
                          loading="lazy"
                          src="/drupal-app/web/sites/default/files/2023-11/12.%203d%20print%20b_0.jpg"
                          width={4032}
                          height={3024}
                          alt="m"
                          typeof="foaf:Image"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                      <div className="field__label visually-hidden">Image</div>
                      <div className="field__item">
                        {" "}
                        <img
                          loading="lazy"
                          src="/drupal-app/web/sites/default/files/2023-11/MicrosoftTeams-image%20%288%29.png"
                          width={600}
                          height={500}
                          alt="3D Print a Mini-City"
                          typeof="foaf:Image"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                      <div className="field__label visually-hidden">Image</div>
                      <div className="field__item">
                        {" "}
                        <img
                          loading="lazy"
                          src="/drupal-app/web/sites/default/files/2023-11/3d.jpg"
                          width={4032}
                          height={3024}
                          alt="m"
                          typeof="foaf:Image"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                      <div className="field__label visually-hidden">Image</div>
                      <div className="field__item">
                        {" "}
                        <img
                          loading="lazy"
                          src="/drupal-app/web/sites/default/files/2023-11/Green%20is%20the%20New%20Smart%20Main%20Theme%20web%20size%201_1_0.jpg"
                          width={4500}
                          height={3750}
                          alt="Green is the New Smart"
                          typeof="foaf:Image"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                      <div className="field__label visually-hidden">Image</div>
                      <div className="field__item">
                        {" "}
                        <img
                          loading="lazy"
                          src="/drupal-app/web/sites/default/files/2023-11/spin.jpg"
                          width={300}
                          height={250}
                          alt="spin"
                          typeof="foaf:Image"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div>
                    <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                      <div className="field__label visually-hidden">Image</div>
                      <div className="field__item">
                        {" "}
                        <img
                          loading="lazy"
                          src="/drupal-app/web/sites/default/files/2023-11/Greenify%20Your%20Home%20web%20size%201.jpg"
                          width={300}
                          height={250}
                          alt="m"
                          typeof="foaf:Image"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3
          id="slideCount"
          className="gallery-slider-count"
          aria-label="test Gallery Photo 1 of 6"
          tabIndex={0}
        >
          <small>Photo </small>
          <strong>1 / 6</strong>
        </h3>
        <div className="slick-slider slider slick-initialized" dir="ltr">
          <button
            data-role="none"
            className="slick-prev slick-arrow slick-disabled"
            type="button"
            id="slide-prev"
            aria-labelledby="slideCount slide-prev"
            style={{ display: "block" }}
          >
            Previous gallery image
          </button>
          <div className="slick-list" style={{ padding: 0 }}>
            <div
              className="slick-track"
              style={{
                width: 7630,
                opacity: 1,
                transform: "translate3d(-1090px, 0px, 0px)",
              }}
            >
              <div
                data-index={-2}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: 545 }}
              >
                <div>
                  <div
                    className="item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div
                      className="sliderHeight"
                      style={{
                        backgroundImage:
                          'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/spin.jpg")',
                      }}
                    >
                      <img
                        src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/spin.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
          data-index={-1}
          tabIndex={-1}
          className="slick-slide slick-cloned"
          aria-hidden="true"
          style={{ width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Greenify%20Your%20Home%20web%20size%201.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Greenify%20Your%20Home%20web%20size%201.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={0}
          className="slick-slide slick-active slick-center slick-current"
          tabIndex={-1}
          aria-hidden="false"
          style={{ outline: "none", width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/12.%203d%20print%20b_0.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/12.%203d%20print%20b_0.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={1}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/MicrosoftTeams-image%20%288%29.png")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/MicrosoftTeams-image%20%288%29.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={2}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/3d.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/3d.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={3}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Green%20is%20the%20New%20Smart%20Main%20Theme%20web%20size%201_1_0.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Green%20is%20the%20New%20Smart%20Main%20Theme%20web%20size%201_1_0.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={4}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/spin.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/spin.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={5}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Greenify%20Your%20Home%20web%20size%201.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Greenify%20Your%20Home%20web%20size%201.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={6}
          tabIndex={-1}
          className="slick-slide slick-center slick-cloned"
          aria-hidden="true"
          style={{ width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/12.%203d%20print%20b_0.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/12.%203d%20print%20b_0.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={7}
          tabIndex={-1}
          className="slick-slide slick-cloned"
          aria-hidden="true"
          style={{ width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/MicrosoftTeams-image%20%288%29.png")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/MicrosoftTeams-image%20%288%29.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={8}
          tabIndex={-1}
          className="slick-slide slick-cloned"
          aria-hidden="true"
          style={{ width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/3d.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/3d.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={9}
          tabIndex={-1}
          className="slick-slide slick-cloned"
          aria-hidden="true"
          style={{ width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Green%20is%20the%20New%20Smart%20Main%20Theme%20web%20size%201_1_0.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Green%20is%20the%20New%20Smart%20Main%20Theme%20web%20size%201_1_0.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={10}
          tabIndex={-1}
          className="slick-slide slick-cloned"
          aria-hidden="true"
          style={{ width: 545 }}
        >
          <div>
            <div
              className="item"
              tabIndex={-1}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className="sliderHeight"
                style={{
                  backgroundImage:
                    'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/spin.jpg")'
                }}
              >
                <img
                  src="http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/spin.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>  */}
              <div
                data-index={11}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: 545 }}
              >
                <div>
                  <div
                    className="item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div
                      className="sliderHeight"
                      style={{
                        backgroundImage:
                          'url("http://51.136.51.121/drupal-app/web/sites/default/files/2023-11/Greenify%20Your%20Home%20web%20size%201.jpg")',
                      }}
                    >
                      <img src="" alt="hello" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            data-role="none"
            className="slick-next slick-arrow"
            id="slide-next"
            type="button"
            aria-labelledby="slideCount slide-next"
            style={{ display: "block" }}
          >
            Next gallery image
          </button>
          <ul className="slick-dots" style={{ display: "block" }}>
            <li className="slick-active">
              <button>1</button>
            </li>
            {/* <li className="">
        <button>2</button>
      </li>
      <li className="">
        <button>3</button>
      </li>
      <li className="">
        <button>4</button>
      </li>
      <li className="">
        <button>5</button>
      </li>
      <li className="">
        <button>6</button>
      </li> */}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="view-more gallery">
          <Link to="/media-center">
            <i className="material-icons ar">arrow_backward</i> {t("back")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryMoredetails;
