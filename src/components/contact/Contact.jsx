import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                upadhayayansu8@gmail.com
              </span>

              <div className="contact__card">
                <i className="bx bxl-Whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">Whatsapp</h3>
                <span className="contact__card-data">98000000</span>

                <div className="contact__card">
                  <i className="bx bxl-mail-messenger contact__card-icon"></i>
                  <h3 className="contact__card-title">Messenger</h3>
                  <span className="contact__card-data">user.fb123</span>

                  <a
                    href="mailto:examplemail@gmail.com"
                    className="contact__button"
                  >
                    Write me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact__content">
              <h3 className="contact__title">Write me your project</h3>

              <form className="contact__form">
                <div className="contact__form-div">
                  <label className="contact__form-tag">name</label>
                  <input
                    type="text"
                    name="name"
                    className="contact__form-input"
                    placeholder="Insert your name"
                  />
                  <label className="contact__form-tag">Mail</label>
                  <input
                    type="text"
                    name="name"
                    className="contact__form-input"
                    placeholder="Insert your email"
                  />
                </div>
                <div className="contact__form-div">
                  <label className="contact__form-tag">Project</label>
                  <textarea name="Project" cols="30" rows="10">
                    <text
                      type="text"
                      className="contact__form-input"
                      placeholder="Write your project"
                    />
                  </textarea>
                </div>

                <button className="button button--flex">
                  Send Messages
                  <svg
                    className="button-icon"
                    xmlns="http://WWW.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.2199 21.9352c13.0399 21.9352 11.3699 21.1052"
                      fill="var(--container-color)"
                    ></path>
                    <path
                      d="M10.11 14.7052c9.92005 14.7052 9.73005 14.6352"
                      fill="var(--container-color)"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
