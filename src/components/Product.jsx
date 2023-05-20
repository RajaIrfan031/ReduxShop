import React, {useEffect} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/cartSlice';
import { getProducts } from '../redux/productsSlice';
import StatusCode from '../utils/StatusCode';

const Product = ()=>{

    const dispatch = useDispatch(); 
    const {data: products, status} = useSelector(state => state.products);

    useEffect(()=>{
        dispatch(getProducts());
    }, []);
 
    const addToCart=(product)=>{
        dispatch(add(product))
    }

    if(status === StatusCode.LOADING){
        return <p>Loading...</p>
    }

    if(status === StatusCode.ERROR){
        return <p>Some error occured. Could not load.</p>
    }
    return(
        <>
        <div className='flex w-full h-full p-20'>
        <div className='flex flex-row flex-wrap'>
        {
            products.map((product, index)=>{
                return(
                <div className='flex flex-col mx-4 border p-4 my-2 w-full items-center max-w-[240px]' key={index}>
                    <img src={product.image} alt="logo" className='w-[200px] h-[240px]'/>
                    <h1 className='font-bold my-4'>{product.title}</h1>
                    <p className='text-sm my-2'>{product.price}</p>
                    <button
                    className='p-2 border bg-indigo-700 rounded-lg hover:cursor-pointer text-slate-300 font-semibold hover:bg-indigo-500'
                    onClick={()=>{addToCart(product)}}
                    >
                        Add to Cart
                    </button>
                </div>
                )
        })
        }
        </div>
        </div>
        </>
    )
}

export default Product;