import React from 'react';
import Swal from 'sweetalert2';

const ServiceBookingForm = () => {

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        Swal.fire({
          title: "Great News!",
          text: "Your Service is Booked!",
          icon: "success",
        });
    }

    return (
      <div className="card-body">
        <form onSubmit={handleFormSubmit}>
            <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input required type="Text" className="input w-full" placeholder="Type Your Name" />

            {/* email */}
            <label className="label">Email</label>
            <input required type="email" className="input w-full" placeholder="Type Your Email" />

            <button type='submit' className="btn btn-neutral mt-4">Book Service</button>
            </fieldset>
        </form>
      </div>
    );
};

export default ServiceBookingForm;