import React, { Suspense } from 'react';
import ServiceCard from './Card/ServiceCard';

const ServiceSection = ({ serviceData }) => {

  const sliceServiceData = serviceData.slice(0,6);

  return (
    <div className="lg:py-20">
      <div className="lg:w-7xl mx-auto text-center">
        <h6 className="text-[14px] lg:text-[16px] text-black font-medium">
          What We Offer
        </h6>
        <h2 className="text-[48px] font-semibold title-font mb-10">
          Our Pet Care Services
        </h2>

        <div className="grid lg:grid-cols-3 lg:gap-5">
          <Suspense fallback={<h3>Loading....</h3>}>
            {sliceServiceData.map((data) => (
              <ServiceCard key={data.serviceId} data={data}></ServiceCard>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;