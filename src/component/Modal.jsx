import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { showOff } from "../redux/slices/privacySlice";
import { useTranslation } from "react-i18next";

const AppModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch();
  const {show} = useSelector((state) => state.privacy);
  const { t } = useTranslation();

  useEffect(() => {
    // Open the modal when the component mounts
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    dispatch(showOff());
    setIsModalOpen(false);
  };

  return (
    <div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="modal-content">
          <span className="badge modalClose">
            <button
              type="button"
              aria-label="close"
              tabIndex={0}
              className="close"
              onClick={closeModal}
            >
              <i className="material-icons">{t("close")}</i>
            </button>
          </span>
          <h4>{t("terms")}</h4>
          <div className="description">
            <p>{t("modal-1")}</p>
            <p>{t("modal-2")}</p>
            <p>{t("modal-3")}</p>
          </div>
          <button
            onClick={closeModal}
            className="modal-close waves-effect waves-green btn blue pull-right"
          >
            {t("agree")}
          </button>
        </div>


      </Modal>
    </div>
  );
};

export default AppModal;
