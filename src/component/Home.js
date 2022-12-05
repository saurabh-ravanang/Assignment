import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { emptyCart } from '../redux/action';

export default function Home() {
    let data = useSelector((state) => state.cartData)
    console.log(data)
    let dispatch = useDispatch()
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <Link className="navbar-brand brandName" to="/">Saurabh-Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <Link to="/"><i className="fa-solid fa-house-chimney my-2 mx-2"></i></Link>
                    </ul>
                    
                    <button className="btn btn-success mx-2 my-sm-0" type='submit' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
                    <form className="form-inline my-2 my-lg-0">
                        <Link className="navbar-brand" to="/cart">
                            <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-flat-design-260nw-570153007.jpg" width="40" height="40" alt="" />
                            <span className="badge badge-light num">{data.length}</span>
                        </Link>
                    </form>
                </div>
            </nav>
        </>
    )
}
