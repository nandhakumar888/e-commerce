import React from "react";

// link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394299/bg_nf4aoz.jpg')] bg-cover bg-center bg-no-repeat hero-bg">
        <section className="bg-black shadow-md h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 px-16 -mt-3">
          <div className="container mx-auto flex justify-center items-center h-full">
            {/* text */}
            <div className="flex flex-col">
              <div className="font-seminbold flex items-center uppercase text-green-600">
                <div className="w-10 h-[3px] "></div>EDUCATION TECHNOLOGY
              </div>
              <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-white">
                GOOD <span className="text-orange-600"> BOOKS</span> TAKES <br />{" "}
                YOU TO <br />
                <span className="font-semibold text-blue-900">
                  GOOD <span className="text-pink-600"> KNOWLEDGE</span>{" "}
                </span>
              </h1>
              <Link
                to={"/home"}
                className="self-start uppercase font-semibold border-b-2 border-green-400 text-green-400"
              >
                Books More
              </Link>
            </div>
            {/* image */}
            <div className="hidden lg:block">
              <img
                src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/09/23165047/Importance-of-Books.jpg"
                alt="main-bg"
                className="w-[900px] h-[580px] mt-16"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
