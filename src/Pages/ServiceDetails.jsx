import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";
import {
  MdOutlineMailOutline,
  MdOutlineStorefront,
  MdOutlineEventAvailable,
} from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

import ServiceBookingForm from "../Component/Form/ServiceBookingForm";


const ServiceDetails = () => {
  const service = useLoaderData();

  const handleBookAService = () =>{
    MySwal.fire({
      title: `Book ${serviceName} Service`,
      html: <ServiceBookingForm></ServiceBookingForm>,
      showConfirmButton: false,
      showCloseButton: true,
    });
  }

  const {
    category,
    description,
    image,
    price,
    providerEmail,
    providerName,
    rating,
    slotsAvailable,
    serviceName,
  } = service;

  return (
    <div className="bg-base-100 text-base-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-20 grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
        {/* Left: image */}
        <div className="relative">
          <div className="rounded-4xl overflow-hidden aspect-4/3">
            <img
              src={image}
              alt={serviceName}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="heading-font absolute top-5 left-5 bg-base-100 text-base-300 text-sm px-3 py-1.5 rounded-full shadow">
            {category}
          </span>
        </div>

        {/* Right: details */}
        <div>
          <h1 className="title-font text-3xl lg:text-4xl leading-tight">
            {serviceName}
          </h1>

          <div className="flex items-center gap-1.5 mt-4">
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
                    <FaStar size={16} className="text-primary" />
                  </div>
                </div>
              );
            })}
            <span className="text-sm text-base-300/60 ml-1">({rating})</span>
          </div>

          <p className="mt-6 text-[17px] leading-relaxed text-base-300/75 max-w-lg">
            {description}
          </p>

          <div className="mt-8 flex items-baseline gap-2">
            <span className="title-font text-4xl">${price}</span>
            <span className="text-base-300/50 text-sm">/ session</span>
          </div>

          <div className="mt-8 pt-6 border-t border-base-300/15 space-y-4">
            <div className="flex items-center gap-3">
              <MdOutlineStorefront className="text-xl text-secondary shrink-0" />
              <div>
                <p className="heading-font text-sm text-base-300/60">
                  Provided by
                </p>
                <p>{providerName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineMailOutline className="text-xl text-secondary shrink-0" />
              <div>
                <p className="heading-font text-sm text-base-300/60">Contact</p>
                <p>{providerEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineEventAvailable className="text-xl text-secondary shrink-0" />
              <div>
                <p className="heading-font text-sm text-base-300/60">
                  Availability
                </p>
                <p>{slotsAvailable} slots open this week</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <button onClick={handleBookAService} className="btn mt-10 bg-primary text-base-300 px-8 py-5 rounded-full hover:bg-primary/80 transition-colors">
              Book Service
            </button>

            <a href="tel:010000000" className="btn mt-10 bg-primary text-base-300 px-8 py-5 rounded-full hover:bg-primary/80 transition-colors">
              Book Service By Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
