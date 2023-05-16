import React from "react"; 
import { Link } from 'react-router-dom';

const NavBarPanel = ()=>{
    return(
    <div className="flex flex-row w-full h-16 bg-slate-300">
      <div className="flex w-full justify-start">
        <div className="ml-4 mt-2 flex flex-row">
          <h1 className="text-4xl font-semibold">Shopity</h1>
          <Link to="/" className="mt-3 ml-4 font-semibold bg-slate-500 rounded-md max-h-[32px] p-1"><h1>Products</h1></Link>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="mr-4 p-4 flex flex-row">
        <Link to="/cart" className="font-semibold p-1 bg-slate-500 h-8 rounded-md max-h-[32px] w-full">
          <h1>My Cart</h1>
        </Link>
        </div>
      </div>
    </div>
    );
}

export default NavBarPanel;