import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    let data = useSelector((state)=>state.cartData)
    console.log("cart data", data)
    return (
        <>
            <h1 className='text-center productHeadline'>Added Products</h1>
            <div className="container my-5">
                <div className="row">
                    {data.map((item, i) => {
                        return <div className='col-md-4' key={i}>
                            <div className="card my-4 mx-3" >
                                <img src={item.image} className="card-img-top cardImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description ? item.description.slice(0, 150) : null}...</p>
                                    <div className='price'>
                                        <span className="badge badge-light band">PRICE: {item.price} &#36;</span>
                                        <span className="badge badge-light band">RATING: {item.rating.rate} &#9733;</span></div>
                                    <span className="badge badge-light sum">{item.category}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Cart
