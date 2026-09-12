import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateProfile = () => {
    const navigate = useNavigate();

    const { updateUserProfile } = use(AuthContext);

    const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photoURL.value;

    updateUserProfile({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        Swal.fire({
            icon: "success",
            text: "Your profile updated successfully",
        });
        navigate("/dashboard");
      })
  };

  return (
    <div>
      <div className="card-body w-150 mx-auto py-30">
        <form onSubmit={handleOnSubmit}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Type your name"
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input w-full"
              placeholder="Paste your photo URL"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Update Your Profile
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
