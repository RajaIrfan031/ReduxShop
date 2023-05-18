import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const NavBar = ()=>{

  const items = useSelector(state => state.cart);

    return(
      <>
      <div className="w-screen h-16 bg-slate-500">
        <div className="flex flex-row pl-4 p-2">
          <div className="flex w-full h-full">
          <div className="hover:cursor-pointer">
              <Link to='/' className="">
                <h1 className="text-3xl">Shopity</h1>
              </Link>
            </div>
            <div className="bg-indigo-500 p-2 rounded-lg ml-4 hover:cursor-pointer">
              <Link to='/cart' className="">Cart</Link>
            </div>
          </div>
          <div className="flex w-full h-full flex-end">
            My Cart: {items.length}
          </div>
        </div>
      </div>
      </>
    );
}

export default NavBar;