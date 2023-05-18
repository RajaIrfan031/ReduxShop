import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/cartSlice';

const Cart = ()=>{

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const removeItem =(id)=>{
        dispatch(remove(id))
    }
    
    return(
        <>
        <div className='flex flex-row w-full flex-wrap'>
        {
            cartItems.map((cartItems, index)=>{
                return(
                <div className='flex flex-col mx-4 border p-4 my-2 w-full items-center max-w-[240px]' key={index}>
                    <img src={cartItems.image} alt="logo" className='w-[200px] h-[240px]'/>
                    <h1 className='font-bold my-4'>{cartItems.title}</h1>
                    <p className='text-sm my-2'>{cartItems.price}</p>
                    <button
                    className='p-2 border bg-red-700 rounded-lg hover:cursor-pointer text-slate-300 font-semibold hover:bg-red-500'
                    onClick={()=>removeItem(cartItems.id)}
                    >
                        Remove
                    </button>
                </div>
                )
        })
        }
        </div>
        </>
    )
}

export default Cart;