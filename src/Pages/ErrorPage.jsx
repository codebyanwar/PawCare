import { Link, useRouteError, isRouteErrorResponse } from "react-router";
import { GiPawPrint } from "react-icons/gi";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  const heading = is404
    ? "This page wandered off."
    : "Something went sideways.";

  const message = is404
    ? "We looked under the couch and behind the food bowl — the page you're after just isn't here."
    : "An unexpected error interrupted this page. Try heading back home and starting again.";

  return (
    <div>
    <Header></Header>
      <div className="min-h-[80vh] bg-base-300 text-base-100 flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          {[...Array(6)].map((_, i) => (
            <GiPawPrint
              key={i}
              className="absolute text-6xl"
              style={{
                top: `${15 + i * 12}%`,
                left: `${8 + i * 15}%`,
                transform: `rotate(${i * 22 - 20}deg)`,
              }}
            />
          ))}
        </div>

        <div className="relative text-center max-w-lg">
          <span className="heading-font inline-flex items-center gap-2 text-sm tracking-wide text-primary border border-primary/40 rounded-full px-3 py-1">
            {isRouteErrorResponse(error)
              ? `Error ${error.status}`
              : "Unexpected error"}
          </span>

          <h1 className="title-font mt-6 text-4xl lg:text-5xl leading-[1.15]">
            {heading}
          </h1>

          <p className="mt-5 text-base-100/75 leading-relaxed">{message}</p>

          <Link
            to="/"
            className="inline-block mt-9 bg-primary text-base-300 px-7 py-3 rounded-full hover:bg-primary/80 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
