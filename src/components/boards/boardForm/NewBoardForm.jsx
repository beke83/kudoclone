import React, { useState } from "react";
import cuid from "cuid";

export default function NewBoardForm({ createBoard }) {
  const initialValues = {
    recipient_first_name: "",
    reciepient_last_name: "",
    title: "",
    loading: false,
  };
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit(e) {
    e.preventDefault();
    createBoard({
      ...values,
      id: cuid(),
      boardType: "MINI BOARD",
      creator: "James Stone",
      dateCreated: "2021-59-9",
      posts: "3",
      lastPostAdded: "12 Month Ago",
      boardPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    });
  
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <div className='wizard-content'>
      <form className=''>
        <section>
          <div className='form-wrap mx-auto'>
            <label className='label-title' for='recipient_first_name'>
              Who is this Kudoboard for?
            </label>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='recipient_first_name'
                    value={values.recipient_first_name}
                    onChange={(e) => handleInputChange(e)}
                    placeholder='First name'
                    className='form-control input-lg js-recipient-first-name'
                  />
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='recipient_last_name'
                    value={values.recipient_last_name}
                    onChange={(e) => handleInputChange(e)}
                    placeholder='Last name'
                    className='form-control input-lg '
                  />
                </div>
              </div>
            </div>
            <label className='label-title' for='title'>
              What title would you like on top of the Kudoboard?
            </label>
            <div className='form-group'>
              <input
                type='text'
                name='title'
                value={values.title}
                onChange={(e) => handleInputChange(e)}
                placeholder="Get Well Soon, I Love You, You're Amazing, etc."
                className='form-control input-lg'
              />
            </div>
          </div>
          <button
            type='submit'
            onClick={handleFormSubmit}
            className='btn btn-primary btn-lg btn-block'
          >
            <span style={{ display: "none" }}>
              <i className='fa fa-spin fa-spinner' aria-hidden='true'></i>
            </span>
            Next
          </button>
        </section>
      </form>
    </div>
  );
}
