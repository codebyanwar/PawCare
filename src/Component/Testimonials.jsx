import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Dog Mom",
    image: "https://i.pravatar.cc/150?img=47",
    pet: "Max",
    review:
      "PawCare has been amazing for Max! The staff is caring, professional, and genuinely love animals. I always feel confident leaving my dog in their hands.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Cat Parent",
    image: "https://i.pravatar.cc/150?img=12",
    pet: "Luna",
    review:
      "I had a wonderful experience with PawCare. Luna received excellent care and the whole process was smooth and stress-free. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Pet Parent",
    image: "https://i.pravatar.cc/150?img=32",
    pet: "Buddy",
    review:
      "From booking to treatment, everything was easy and professional. The team kept me updated and treated Buddy like their own pet.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            Happy Pet Parents
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            What Our Pet Parents Say
          </h2>

          <p className="text-base-content/60 mt-4">
            We care for every pet like they are part of our own family.
            Here's what some of our happy pet parents have to say.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="card-body">
                {/* Quote Icon */}
                <div className="text-primary text-3xl mb-3">
                  <FaQuoteLeft />
                </div>

                {/* Review */}
                <p className="text-base-content/70 leading-7">
                  "{testimonial.review}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 text-warning mt-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* User */}
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-base-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-base-content">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm text-base-content/60">
                      {testimonial.role} • {testimonial.pet}'s parent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;