import React, { useContext } from "react";
import contactCss from "./Contact.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { DataContext } from "../../context/data_context";
import { useFormik } from "formik";
import { ContactShema } from "../../components/yupSchema/YupSchema";
import langCheck from "./language";
function Contact() {
  const store = useContext(DataContext);
  function submit(values, action) {
    console.log(values);
  }
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactShema,
    onSubmit: submit,
  });

  return (
    <>
      <div className={contactCss.header}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "900" }}>
            {langCheck.heroSection.title[store.lang.data]}
          </h1>
          <p> {langCheck.heroSection.paragraph[store.lang.data]}</p>
        </div>
      </div>
      <div className={contactCss.container}>
        <div className={contactCss.info_div}>
          <ul>
            <li>
              <HomeOutlinedIcon style={{ color: "#384AEB" }} />
              <div className={contactCss.info_list_item}>
                <h4> {langCheck.info.location.state[store.lang.data]}</h4>
                <p> {langCheck.info.location.region[store.lang.data]}</p>
              </div>
            </li>
            <li>
              <HeadphonesIcon style={{ color: "#384AEB" }} />
              <div className={contactCss.info_list_item}>
                <h4>00 (440) 9865 562</h4>
                <p> {langCheck.info.phone.paragraph[store.lang.data]}</p>
              </div>
            </li>
            <li>
              <EmailOutlinedIcon style={{ color: "#384AEB" }} />
              <div className={contactCss.info_list_item}>
                <h4>support@colorlib.com</h4>
                <p>{langCheck.info.email.paragraph[store.lang.data]}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={contactCss.contact_form_div}>
          <form className={contactCss.contact_form} onSubmit={handleSubmit}>
            <div className={contactCss.form_container}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  gridArea: "leftDiv",
                }}
              >
                <input
                  type="text"
                  placeholder={`${
                    langCheck.form.inputs.name[store.lang.data]
                  }*`}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name ? (
                  <p className={contactCss.error_msg}>{errors.name}</p>
                ) : null}
                <input
                  type="email"
                  placeholder={`${
                    langCheck.form.inputs.email[store.lang.data]
                  }*`}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email ? (
                  <p className={contactCss.error_msg}>{errors.email}</p>
                ) : null}
                <input
                  type="text"
                  placeholder={`${
                    langCheck.form.inputs.subject[store.lang.data]
                  }`}
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                />{" "}
                {errors.subject ? (
                  <p className={contactCss.error_msg}>{errors.subject}</p>
                ) : null}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  gridArea: "rightDiv",
                }}
              >
                <textarea
                  placeholder={`${
                    langCheck.form.inputs.message[store.lang.data]
                  }*`}
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message ? (
                  <p className={contactCss.error_msg}>{errors.message}</p>
                ) : null}

                <div>
                  <input
                    type="submit"
                    value={langCheck.form.inputs.submit[store.lang.data]}
                    className={contactCss.submit_form}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
