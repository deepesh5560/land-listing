import React from "react";

const Page = () => {
  return (
    <div className="business_profile_wrapper">
      <div className="container">
        <div className="edit_form_wrapper block_contact custom_form">
          <div className="custom_form">
            <div className="row_form">
              <div className="small_input select_custom">
                <label>Title</label>
                <select>
                  <option value="">Mr</option>
                  <option value="">Mrs</option>
                </select>
              </div>
              <div className="form-outline">
                <input type="text" className="form-control" />
                <label className="form-label" style={{ marginLeft: 0 }}>
                  Contact Person
                </label>
              </div>
            </div>
            <div className="row_form">
              <div className="small_input select_custom">
                <select>
                  <option value="">+91</option>
                  <option value="">+91</option>
                </select>
              </div>
              <div className="form-outline">
                <input type="text" className="form-control" />
                <label className="form-label" style={{ marginLeft: 0 }}>
                  Contact number
                </label>
              </div>
            </div>
            <div className="form-outline">
              <input type="text" className="form-control" />
              <label className="form-label" style={{ marginLeft: 0 }}>
                Email
              </label>
            </div>
            <div className="btn_save_wrapper">
              <button className="btn_save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
