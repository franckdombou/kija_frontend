import React from 'react'
import "../../assets/css/templatemo-hexashop.css"
import "../../assets/css/bootstrap.min.css"
//import "../../assets/css/font-awesome.css"
//import "../../assets/css/owl-carousel.css"
//import "../../assets/css/flex-slider.css"

import img3 from "../../assets/im/aff1.jpg"
import img2 from "../../assets/im/aff1.jpg"
import img1 from "../../assets/im/aff1.jpg"
import img4 from "../../assets/im/aff1.jpg"
import img5 from "../../assets/im/aff1.jpg"
import img6 from "../../assets/images/baner-right-image-03.jpg"
import Features from './Features'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Categorie() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    // <!-- ***** Main Banner Area Start ***** -->
    <React.Fragment>
    <div class="main-banner" id="top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        <div class="thumb">
                            <div class="inner-content">
                                <h4>We Are Hexashop</h4>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                                <div class="main-border-button">
                                    <a href="#">Purchase Now!</a>
                                </div>
                            </div>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>PC</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>PC</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <a onClick={() => navigate(`/produits/`,{state:"Personal Computer"})} >Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={img2} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Apple Watch</h4>
                                            <span>Best Clothes For Men</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Apple Watch</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <a onClick={() => navigate(`/produits/`,{state:"Apple Watch"})}>Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={img3} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Phones</h4>
                                            <span>Best Clothes For Kids</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Phones</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <a onClick={() => navigate(`/produits/`,{state:"Phones"})}>Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={img4} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Accessories</h4>
                                            <span>Best Trend Accessories</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Accessories</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <a href="#">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={img5} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <Features /> */}
    </React.Fragment>
  )
}

export default Categorie