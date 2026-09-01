import React, { useEffect, useState } from 'react';

const TeamSection = () => {

    const [team, setTeam] = useState([]);

    useEffect(()=>{
        fetch('/Team.json')
        .then(res=>res.json())
        .then(data=> setTeam(data));
    }, [])

    return (
      <div className="lg:py-20 pt-10 pb-15">
        <div className="lg:w-7xl mx-auto text-center px-[4%]">
          <h6 className="text-[14px] lg:text-[16px] text-black font-medium">
            Our Team
          </h6>
          <h2 className="text-[26px] lg:text-[48px] font-semibold title-font mb-10">
            Meet the People Behind PawCare
          </h2>

          <div className='grid lg:grid-cols-4 gap-5'>
            {
                team.map(member=>{
                    return (
                      <div key={member.memberId} className='rounded-lg border'>
                        <img className='rounded-t-lg' src={member.image} alt="" />

                            <div className='text-left p-3'>
                                <h4 className='text-[18px] font-medium'>{member.name}</h4>
                                <p className='text-[#545454]'>{member.designation}</p>
                            </div>
                      </div>
                    );
                })
            }
          </div>
        </div>
      </div>
    );
};

export default TeamSection;