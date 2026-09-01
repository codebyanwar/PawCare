import { GiPawPrint } from "react-icons/gi";
import { MdOutlineVerified } from "react-icons/md";

const values = [
  {
    name: "Gentle by default",
    text: "Every handling technique we use is chosen for a nervous animal first, a calm one second — never the other way around.",
  },
  {
    name: "No waiting rooms that feel like waiting rooms",
    text: "Appointments are staggered so your pet isn't sitting next to a stranger's anxiety for twenty minutes.",
  },
  {
    name: "One record, every visit",
    text: "Grooming notes, vet history, and behaviour quirks travel with your pet between every service we offer.",
  },
  {
    name: "Owners stay in the room",
    text: "Unless it's a procedure that requires otherwise, you're welcome beside your pet the whole time.",
  },
];

const About = () => {
  return (
    <div className="bg-base-100 text-base-300">
      {/* Hero */}
      <section className="bg-base-300 text-base-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <span className="heading-font inline-flex items-center gap-2 text-sm tracking-wide text-primary border border-primary/40 rounded-full px-3 py-1">
              <GiPawPrint /> Est. by people who couldn't find a vet they trusted
            </span>
            <h1 className="title-font mt-6 text-5xl lg:text-6xl leading-[1.15]">
              We started PawCare because our own dogs deserved better
              appointments.
            </h1>
            <p className="mt-6 text-lg text-base-100/80 max-w-md leading-relaxed">
              What began as one frustrated Sunday searching for a groomer who
              wouldn't rush a scared rescue dog is now a full team — vets,
              groomers, and sitters who all work the same way.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden aspect-4/5 shadow-2xl">
              <img
                src="https://loremflickr.com/700/900/veterinarian,dog,gentle?lock=21"
                alt="A vet gently examining a happy dog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-base-300 rounded-2xl px-5 py-4 shadow-xl max-w-45">
              <p className="title-font text-2xl leading-none">7 yrs</p>
              <p className="text-sm mt-1">caring for the same neighborhood</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <p className="heading-font text-sm uppercase tracking-[0.12em] text-secondary mb-4">
          Our story
        </p>
        <p className="title-font text-2xl lg:text-3xl leading-snug text-base-300">
          <span className="float-left text-6xl leading-[0.8] pr-3 pt-1">O</span>
          ur founder, Alena, spent three years driving forty minutes across town
          because it was the only clinic that would let her sit with her anxious
          rescue during a nail trim. Everywhere closer treated the visit like a
          queue to clear, not an animal to understand.
        </p>
        <p className="mt-6 text-[17px] leading-relaxed text-base-300/70">
          So she hired the two groomers and one vet who'd always made time for
          that kind of patience, and PawCare opened six months later with a rule
          that still holds: no appointment is booked so tightly that someone has
          to rush your pet to stay on schedule.
        </p>
      </section>

      <section className="bg-base-200 border-y border-base-300/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
          <p className="title-font text-3xl text-base-300 mb-10">
            How we actually work
          </p>
          <div className="divide-y divide-base-300/15">
            {values.map((v) => (
              <div
                key={v.name}
                className="py-6 grid sm:grid-cols-[1fr_1.6fr] gap-2 sm:gap-8"
              >
                <h3 className="heading-font text-base-300">{v.name}</h3>
                <p className="text-base-300/70 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing stat / CTA */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20 text-center">
        <MdOutlineVerified className="text-4xl text-secondary mx-auto mb-6" />
        <p className="title-font text-2xl lg:text-3xl text-base-300 leading-snug max-w-2xl mx-auto">
          Today that same rule covers over 900 pets, 4 vets, and a waitlist
          we're genuinely trying to shorten — not grow.
        </p>
        <a
          href="/service"
          className="inline-block mt-8 bg-primary text-base-300 px-7 py-3 rounded-full hover:bg-primary/80 transition-colors"
        >
          See our services
        </a>
      </section>
    </div>
  );
};

export default About;
