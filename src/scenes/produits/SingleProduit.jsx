import React, { useState } from 'react'
import img2 from "../../assets/images/single-product-02.jpg"
import img1 from "../../assets/images/single-product-01.jpg"
import { useLocation } from 'react-router-dom';
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


function SingleProduit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const location = useLocation();
    const data = location.state.item;
    console.log(data.item)

    return (
        <div>
            <div class="page-heading" id="top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner-content">
                                <h2>Single Product Page</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="section" id="product">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-images">
                                <img src={data.image} alt="" />
                                    {/* <img src={data.image} alt="" /> */}
                                    </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="right-content">
                                    <h4>{data.nom}</h4>
                                    <span class="price">{data.prix} fcfa</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                                    <div class="quote">
                                        <i class="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                                    </div>
                                    <div class="quantity-content">
                                        <div class="left-content">
                                            <h6>No. of Orders</h6>
                                        </div>
                                        <div class="right-content">
                                            <div class="quantity buttons_added">
                                                <input onClick={() => setCount(Math.max(count - 1, 1))} type="button" value="-" class="minus" />
                                                <input type="number" step="1" min="1" max="" name="quantity" value={count} title="Qty" class="input-text qty text" size="4" pattern="" inputMode="" />
                                                <input onClick={() => setCount(Math.max(count + 1,))} type="button" value="+" class="plus" />
                                            </div>
                                            </div>
                                            </div>
                                            <div class="total">
                                                <h4>Total: {data.prix*count} fcfa</h4>
                                                <div style={{cursor:"pointer"}} class="main-border-button"><a style={{cursor:"pointer"}} onClick={() => {dispatch( addToCart({ item: { ...data, count } }))}}>Add To Cart</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    )
}

export default SingleProduit