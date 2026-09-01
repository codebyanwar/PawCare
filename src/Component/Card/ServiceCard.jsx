import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ data }) => {
  const {  serviceId, serviceName, image, rating, price } = data;

  return (
    <div className="bg-base-100 rounded-sm text-start service-card duration-300">
      <img className="rounded-t-sm" src={image} alt="" />
      <div className="py-5 px-3">
        <h3 className="text-[18px] font-medium">{serviceName}</h3>

        <div className="flex items-center gap-1 py-1.5">
          {[1, 2, 3, 4, 5].map((star) => {
            const fillPercent = Math.min(
              Math.max((rating - (star - 1)) * 100, 0),
              100,
            );

            return (
              <div key={star} className="relative w-4 h-4">
                <FaStar
                  size={16}
                  className="text-gray-300 absolute top-0 left-0"
                />

                <div
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fillPercent}%` }}
                >
                  <FaStar size={16} className="text-yellow-400" />
                </div>
              </div>
            );
          })}
          <span className="text-sm text-gray-500 ml-1">({rating})</span>
        </div>

        <p className="font-bold text-18px">Price: ${price}</p>

        <Link
          to={`/service/service-details/${serviceId}`}
          className="btn btn-primary shadow-none text-white hover:bg-transparent hover:text-primary mt-2.5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;