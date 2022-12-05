import React, { useEffect } from 'react'
import { addCart, removeCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction';
function Main() {
    let data = useSelector((state) => state.productData)
    console.log(data)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(productList())
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="container mainCon">
                <div className="row">
                    {data.map((item) => {
                        return <div className='col-lg-4 col-md-6' key={item.id}>
                            <div className="card my-4 mx-3" >
                                <img src={item.image} className="card-img-top cardImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description ? item.description.slice(0, 150) : null}...</p>
                                    <div className='price'>
                                        <span className="badge badge-light band">PRICE: {item.price} &#36;</span>
                                        <span className="badge badge-light band">RATING: {item.rating.rate} &#9733;</span></div>
                                    <span className="badge badge-light sum">{item.category}</span>
                                    <div className='mainBtn'>
                                        <button className="btn btn-primary btn-sm mx-2 my-sm-0" onClick={() => dispatch(addCart(item))}>Add TO Cart</button>
                                        <button className="btn btn-primary btn-sm mx-2 my-sm-0" onClick={() => dispatch(removeCart(item.id))}>Remove TO Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Main
