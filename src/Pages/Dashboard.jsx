import React, { use } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const { user } = use(AuthContext);

    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          {/* Profile Header */}
          <div className="flex flex-col items-center pt-8">
            <div className="avatar">
              <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img
                  src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                  alt={user?.displayName || "User"}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-5">
              {user?.displayName || "User"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">My Profile</p>
          </div>

          {/* User Information */}
          <div className="card-body">
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-base-200">
                <FaUser className="text-primary text-xl" />

                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold">
                    {user?.displayName || "Not available"}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-base-200">
                <FaEnvelope className="text-primary text-xl" />

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold break-all">{user?.email}</p>
                </div>
              </div>
            </div>

            {/* Update Profile */}
            <Link to="/update-profile" className="btn btn-primary w-full mt-6">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;