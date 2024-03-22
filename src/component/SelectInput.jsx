import React from 'react'
import { useTranslation } from 'react-i18next'

const SelectInput = ({ value, name, Mandatory, option, onChange, label, Lang }) => {
    const { t } = useTranslation()
    return (
        <div>
            <div className="result-type">
                <div className="input-field mobileSelect">
                    <label
                        htmlFor={name}
                        style={{
                            left: Lang === "en" ? 0 : "auto",
                            right: Lang === "en" ? "auto" : 0,
                        }}
                    >
                        {label}
                        {Mandatory && <span className="asterisk">*</span>}
                    </label>
                    <select
                        className="browser-default"
                        name={name}
                        id={name}
                        style={{ textAlign: Lang === "en" ? "left" : "right" }}
                        tabIndex={0}
                        value={value}
                        onChange={onChange}
                    >
                        <option value="0">{t("school-type-select")}</option>
                        {option.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.sname}
                            </option>
                        ))}
                        {/* <option value="123">abc</option> */}
                        <option value="Other">Other</option>
                    </select>

                    <span
                        className="helper-text"
                        data-error="Required field."
                        style={{ textAlign: "left" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectInput


// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const SelectInput = ({ value, name, Mandatory, onChange, option, label, Lang }) => {
//     const { t } = useTranslation();
//     // console.log(option);
//     return (
//         <div>
//             <div className="result-type">
//                 <div className="input-field mobileSelect">
//                     <label
//                         htmlFor={name}
//                         style={{
//                             left: Lang === 'en' ? 0 : 'auto',
//                             right: Lang === 'en' ? 'auto' : 0,
//                         }}
//                     >
//                         {t(label)} {/* Translate the label using the t function */}
//                         {Mandatory && <span className="asterisk">*</span>}
//                     </label>
//                     <select
//                         className="browser-default"
//                         name={name}
//                         id={name}
//                         style={{ textAlign: Lang === 'en' ? 'left' : 'right' }}
//                         tabIndex={0}
//                         value={value}
//                         onChange={onChange}
//                     >
//                         <option value="0">{t('school-type-select')}</option>
//                         {option.map((opt) => (
//                             <option key={opt.id} value={opt.id}>
//                                 {opt.label}
//                             </option>
//                         ))}
//                         <option value="Other">{t('Other')}</option>
//                     </select>

//                     <span
//                         className="helper-text"
//                         data-error={t('Required field.')}
//                         style={{ textAlign: 'left' }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SelectInput;
