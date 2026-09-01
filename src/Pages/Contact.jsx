import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdOutlineMailOutline,
} from "react-icons/md";
import { GiPawPrint } from "react-icons/gi";

const hours = [
  { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const Contact = () => {
  return (
    <div className="bg-base-100 text-base-300">
      {/* Intro band */}
      <section className="bg-base-300 text-base-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-16 pb-14">
          <span className="heading-font inline-flex items-center gap-2 text-sm tracking-wide text-primary border border-primary/40 rounded-full px-3 py-1">
            <GiPawPrint /> We usually reply within a few hours
          </span>
          <h1 className="title-font mt-5 text-4xl lg:text-5xl leading-[1.15] max-w-2xl">
            Questions before you book? Just ask.
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div className="flex flex-col justify-center">
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MdOutlineLocationOn className="text-2xl text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="heading-font text-sm text-base-300/60">
                  Visit us
                </p>
                <p>42 Maple Street, Dhaka 1207</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdOutlinePhone className="text-2xl text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="heading-font text-sm text-base-300/60">Call us</p>
                <p>+880 1000-0000</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdOutlineMailOutline className="text-2xl text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="heading-font text-sm text-base-300/60">
                  Email us
                </p>
                <p>hello@pawcare.com</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-base-300/15">
            <p className="heading-font text-sm text-base-300/60 mb-3">Hours</p>
            <div className="space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span>{h.day}</span>
                  <span className="text-base-300/70">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-base-200 rounded-4xl p-8 lg:p-10">
          <h2 className="title-font text-2xl mb-6">Send a message</h2>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="heading-font text-sm text-base-300/60 block mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full bg-base-100 border border-base-300/20 rounded-xl px-4 py-2.5 outline-none focus:border-secondary transition-colors"
                />
              </div>
              <div>
                <label className="heading-font text-sm text-base-300/60 block mb-1.5">
                  Pet's name
                </label>
                <input
                  type="text"
                  placeholder="Bella"
                  className="w-full bg-base-100 border border-base-300/20 rounded-xl px-4 py-2.5 outline-none focus:border-secondary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="heading-font text-sm text-base-300/60 block mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-base-100 border border-base-300/20 rounded-xl px-4 py-2.5 outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label className="heading-font text-sm text-base-300/60 block mb-1.5">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us what your pet needs..."
                className="w-full bg-base-100 border border-base-300/20 rounded-xl px-4 py-2.5 outline-none focus:border-secondary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-base-300 px-7 py-3 rounded-full hover:bg-primary/80 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
