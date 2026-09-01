import { useState } from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../Component/Card/ServiceCard";
import { GiPawPrint } from "react-icons/gi";

const Service = () => {
  const serviceData = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(serviceData.map((s) => s.category))];

  const filteredData =
    activeCategory === "All"
      ? serviceData
      : serviceData.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-base-100 text-base-300">
      {/* Hero band — consistent with About/Contact */}
      <section className="bg-base-300 text-base-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-16 pb-14">
          <span className="heading-font inline-flex items-center gap-2 text-sm tracking-wide text-primary border border-primary/40 rounded-full px-3 py-1">
            <GiPawPrint /> {serviceData.length} services, one trusted team
          </span>
          <h1 className="title-font mt-5 text-4xl lg:text-5xl leading-[1.15] max-w-2xl">
            Everything your pet needs, browse it all here.
          </h1>
        </div>
      </section>

      <div className="lg:w-7xl mx-auto px-6 lg:px-0 py-14 lg:py-20">
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-base-300"
                  : "bg-base-200 text-base-300/70 hover:bg-base-200/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredData.length === 0 ? (
          <p className="text-center text-base-300/60 py-16">
            No services found in this category yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredData.map((data) => (
              <ServiceCard key={data.serviceId} data={data}></ServiceCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
