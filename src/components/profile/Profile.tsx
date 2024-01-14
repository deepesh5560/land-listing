import React from "react";

const Profile = () => {
  return (
    <section className="mult-step_section  py-5">
      <div className="container">
        <div className="multi_step_wrapper user_profile">
          <div className="steps step_1 ">
            <div className="edit_user">
              <img src="images/edit_icon.png" alt="" />
              <span>Edit Profile</span>
            </div>
            <div className="custom_upload_file_block">
              <div className="custom_upload_file">
                <input type="file" id="file" />
                <label htmlFor="file">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M8.66732 12.9999H4.33398V43.3332C4.33398 45.7166 6.28398 47.6666 8.66732 47.6666H39.0006V43.3332H8.66732V12.9999ZM43.334 4.33325H17.334C14.9507 4.33325 13.0007 6.28325 13.0007 8.66658V34.6666C13.0007 37.0499 14.9507 38.9999 17.334 38.9999H43.334C45.7173 38.9999 47.6673 37.0499 47.6673 34.6666V8.66658C47.6673 6.28325 45.7173 4.33325 43.334 4.33325ZM41.1673 23.8333H32.5006V32.4999H28.1673V23.8333H19.5007V19.4999H28.1673V10.8333H32.5006V19.4999H41.1673V23.8333Z"
                      fill="#23094E"
                    />
                  </svg>
                </label>
              </div>
              <h5>Upload Photo</h5>
            </div>
            <div className="custom_form">
              <div className="row_form">
                <div className="small_input select_custom">
                  <label htmlFor="">Title</label>
                  <select>
                    <option value="">Mr</option>
                    <option value="">Mrs</option>
                  </select>
                </div>
                <div className="form-outline">
                  <input type="text" className="form-control" />
                  <label className="form-label" style={{ marginLeft: "0" }}>
                    Enter your name
                  </label>
                </div>
              </div>
              <div className="row_form">
                <div className="small_input">
                  <select>
                    <option value="">Mr</option>
                    <option value="">Mrs</option>
                  </select>
                </div>
                <div className="form-outline">
                  <input type="text" className="form-control" />
                  <label className="form-label" style={{ marginLeft: "0" }}>
                    Contact number
                  </label>
                </div>
              </div>

              <div className="form-outline">
                <input type="text" className="form-control" />
                <label className="form-label" style={{ marginLeft: "0" }}>
                  Email
                </label>
              </div>
              <div className="btn_form">
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
