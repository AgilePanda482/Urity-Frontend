import React from "react";
import NotFoundImage from "../assets/NotFoundImage.png";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-black">
      <div>
        <h1 className="text-white text-4xl font-bold text-center">
          Error 404 - NotFound
        </h1>
      </div>
        <img className="absolute bottom-0 right-0 w-1/3 sm:w-40 md:w-1/4 lg:w-1/4 xl:w-1/4" src={NotFoundImage} alt="Cat not found" />
    </div>
  );
}

export default NotFound;
