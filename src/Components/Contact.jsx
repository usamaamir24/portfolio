import React from 'react';
import mine1 from '../Media/mine.jpg';
import contact  from'../Components/Contact.css'
import team3 from '../Media/Team/team-3.jpg'

export default function Contact() {
  return (
    <div className='contact'>
      <section className="contact mt-5 container" id="contact">
        <div className="container">
          <div className=" abc text-center">
            <h1>
              Feel free <span className="text-primary"> TO CONNECT </span>
            </h1>
            <hr className="mx-auto w-25" />
          </div>
        </div>
        <div className=" content row bg-light">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 ">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 text-end p-5">
            <img src={team3} className="img-fluid img-thumbnail p-2" style={{ maxHeight: '300px' }} alt="Profile" />
          </div>
        </div>
      </section>
    </div>
  );
}
