import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="h-screen w-screen bg-home-img bg-cover flex flex-col">
      <div className="h-10 bg-dark-green text-white font-sora flex items-center">
        <span className="ml-6 lg:text-3xl">Discr</span>
      </div>
      <div className="h-1/6 text-center flex items-end justify-center">
        <div className="font-semibold w-72 lg:w-[28rem] lg:text-2xl">
          The best place to buy,sell and trade Disc Golf Equipment
        </div>
      </div>
      <div className="w-screen flex-grow flex flex-col lg:flex-row justify-end lg:justify-center items-center lg:items-end">
        <Link
          to="/signup"
          className="w-3/6 lg:w-1/6 h-12 text-center mb-10 lg:mb-24 lg:mr-10 bg-orangish flex items-center justify-center rounded-lg font-semibold"
        >
          Get Started
        </Link>
        <Link
          to="/signin"
          className="w-3/6 lg:w-1/6 h-12 text-center mb-24 lg:ml-10 bg-off-white flex items-center justify-center rounded-lg font-semibold"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
