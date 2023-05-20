import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import {remove, clearCart} from '../redux/cartSlice';

const Cart = ()=>{
 
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeFromCart = (id) =>{
        dispatch(remove(id));
    }

    const clearCartItems = () =>{ 
        dispatch(clearCart(""));
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
                    onClick={()=> {removeFromCart(cartItems.id)}}
                    >
                        Remove
                    </button>
                </div>
                )
        })
        }
            <div className='flex w-full items-center justify-center'>
            <button
            className='p-2 border bg-red-700 rounded-lg hover:cursor-pointer text-slate-100 font-semibold hover:bg-red-500'
            onClick={()=> {clearCartItems()}}
            >
                Clear Cart
            </button>
            </div>
        </div>
        </>
    )
}

export default Cart;