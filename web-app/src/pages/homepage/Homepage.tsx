import { Link } from "react-router-dom";
import MenuIcon from "../../imgs/MenuIcon.svg";
import DiskAndBasket from "../../imgs/DiskAndBasket.svg";
import { useState } from "react";

const Homepage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setMenuIsOpen(false);
  };

  return (
    <div
      className="h-screen w-screen bg-light-blue flex flex-col"
      id="Homepage"
    >
      <div className="h-16 bg-white flex items-center">
        <div className="flex-grow ml-4 text-2xl font-bold">Discr</div>
        <div className="mr-6">
          <img
            className="md:hidden"
            src={MenuIcon}
            onClick={() => setMenuIsOpen(true)}
          />
        </div>
      </div>
      <div className="text-2xl w-64 text-center self-center mt-20">
        Buy, Sell, and Trade Disc Golf Equipment
      </div>
      <div className="mt-24 flex flex-col items-center">
        <Link
          to="/signup"
          className="text-xl font-semibold bg-darkest-blue text-white drop-shadow-lg rounded-xl h-16 w-56 flex items-center justify-center"
        >
          Get Started
        </Link>
        <Link
          to="/signin"
          className="text-xl font-semibold bg-medium-blue text-white drop-shadow-lg rounded-xl h-16 w-56 flex items-center justify-center mt-10"
        >
          Sign In
        </Link>
      </div>
      <div className="flex justify-center mt-20">
        <img className="w-4/6 md:w-3/6 lg:w-2/6 xl:w-80" src={DiskAndBasket} />
      </div>
    </div>
  );
};

export default Homepage;
