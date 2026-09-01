import React, { useEffect, useState } from 'react';
import { GiPawPrint } from 'react-icons/gi';
import { MdOutlineBedroomParent, MdOutlineDirectionsCar, MdOutlineDryCleaning, MdOutlineHealthAndSafety, MdOutlineRestaurant, MdOutlineSportsEsports, MdOutlineWarningAmber } from 'react-icons/md';



const iconMap = {
  MdOutlineDryCleaning,
  GiPawPrint,
  MdOutlineRestaurant,
  MdOutlineDirectionsCar,
  MdOutlineBedroomParent,
  MdOutlineHealthAndSafety,
  MdOutlineSportsEsports,
  MdOutlineWarningAmber
};

const TipsSection = () => {
    const [tips, setTips] = useState([]);

    useEffect(()=>{
        fetch('/Tips.json')
        .then(res=>res.json())
        .then(data=> setTips(data));
    }, [])

    return (
      <div className="lg:py-20 py-10">
        <div className="lg:w-7xl mx-auto text-center px-[4%] lg:px-0">
          <h6 className="text-[14px] lg:text-[16px] text-black font-medium">
            Seasonal Guides
          </h6>
          <h2 className="text-[26px] lg:text-[48px] font-semibold title-font mb-10">
            Keep Your Pet Safe and Warm This Winter
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {
                tips.map(({tipId, title, description, icon})=>{

                    const Icon = iconMap[icon];

                    return (
                      <div
                        key={tipId}
                        className="border border-solid border-primary rounded-md py-8 px-5 flex flex-col items-center gap-2.5"
                      >
                        {Icon && (
                          <Icon className="h-14 w-14 lg:h-18 lg:w-18 text-primary bg-amber-50 rounded-full p-2.5" />
                        )}

                        <h3 className="text-[18px] lg:text-[22px] font-medium">
                          {title}
                        </h3>

                        <p className="text-[14px] lg:text-[18px] text-[#545454]">{description}</p>
                      </div>
                    );
                })
            }
          </div>
        </div>
      </div>
    );
};

export default TipsSection;