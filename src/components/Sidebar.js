import React, { useContext } from "react";

// import Link
import { Link } from "react-router-dom";

// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

// import components
import CartItem from "../components/CartItem";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-black fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold text-white">
          Shopping Collections ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center text-white"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[330px] lg:h-[400px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold text-white">
            <span className="mr-2 bg-white text-black px-2 py-1 rounded-sm">
              Total :
            </span>{" "}
            $ {parseFloat(total).toFixed(2)}
          </div>
          <div
            className="cursor-pointer py-2 px-2 rounded-md bg-red-500 text-white flex justify-center items-centerm text-sm"
            onClick={clearCart}
          >
            <p className="flex gap-2 items-center ">
              Clear All <FaTrash />
            </p>
          </div>
        </div>
        <Link
          to={"/home"}
          className="bg-gray-200 flex  p-4  z-30 justify-center items-center w-full font-medium hover:bg-slate-300"
        >
          Buy Now
        </Link>
        <Link
          to={"/home"}
          className="bg-red-800 z-30 text-black flex p-4 justify-center items-center w-full font-medium "
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
