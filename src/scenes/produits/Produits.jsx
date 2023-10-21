import React from 'react'
// import img1 from "../../assets/images/men-01.jpg"
// import img2 from "../../assets/images/men-02.jpg"
// import img3 from "../../assets/images/men-03.jpg"
// import img4 from "../../assets/images/women-01.jpg"
// import img5 from "../../assets/images/women-02.jpg"
// import img6 from "../../assets/images/women-03.jpg"
// import img7 from "../../assets/images/kid-01.jpg"
// import img8 from "../../assets/images/kid-02.jpg"
// import img9 from "../../assets/images/kid-03.jpg"

import img1 from "../../assets/im/pcAffiche1.jpg"
import img2 from "../../assets/im/pcAffich2.jpg"
import img3 from "../../assets/im/pcAffich5.jpg"
import img4 from "../../assets/im/pcAffich2.jpg"
import img5 from "../../assets/im/pcAffich5.jpg"
import img6 from "../../assets/images/men-02.jpg"

import imgp1 from "../../assets/im/i1.jpg"
import imgp2 from "../../assets/im/i2.jpg"
import imgp3 from "../../assets/im/i3.jpg"
import imgp4 from "../../assets/im/i4.jpg"
import imgp5 from "../../assets/im/i5.jpg"
import imgp6 from "../../assets//im/i6.jpg"
import imgp7 from "../../assets//im/i7.jpg"
import imgp8 from "../../assets//im/i8.jpg"

import imga1 from "../../assets/im/aa1.jpg"
import imga2 from "../../assets/im/a2.jpg"
import imga3 from "../../assets/im/a3.jpg"
import imga4 from "../../assets/im/a4.jpg"
import imga5 from "../../assets/im/a5.jpg"
import imga6 from "../../assets//im/a6.jpg"
import imga7 from "../../assets//im/i7.jpg"
import imga8 from "../../assets//im/i8.jpg"


import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const tab =['1','3','4','5']



//const tab = ["1", "2", "3", "7", "1", "2", "3", "7"]
const donneeItem =[
    {
        image:img1,
        nom:"Iphone1",
        prix:1256,
        id:1,
        count:1,
        categorie:"Personal Computer",
        attributes:{
            image:img1,
            nom:"Iphone1",
            prix:1256,
            id:1,
            count:1,
        }
        
    },
    {
        image:img2,
        nom:"Iphone2",
        prix:1256,
        id:2,
        count:1,
        categorie:"Personal Computer",
        attributes:{
            image:img2,
            nom:"Iphone2",
            prix:1256,
            count:1,
        id:2,

        }
    },
    {
        image:img3,
        nom:"Iphone3",
        prix:1256,
        count:1,
        id:3,
        categorie:"Personal Computer",
        attributes:{
            image:img3,
            nom:"Iphone3",
            prix:1256,
            id:3,
            count:1,

        }
    },
    {
        image:img4,
        nom:"Iphone4",
        prix:1256,
        count:1,
        id:4,
        categorie:"Personal Computer",
        attributes:{
            image:img4,
            nom:"Iphone4",
            prix:1256,
            id:4,
            count:1,
        }
    },
    {
        image:img5,
        nom:"Iphone5",
        prix:1256,
        id:5,
        categorie:"Personal Computer",
        count:1,
        attributes:{
            image:img5,
            nom:"Iphone5",
            prix:1256,
            id:5,
            count:1,
        }
    },
]

const PhonesItem=[
     // Iphone
     {
        image:imgp1,
        nom:"Iphone1",
        prix:1256,
        id:1,
        count:1,
        categorie:"Phones",
        attributes:{
            image:imgp1,
            nom:"Iphone1",
            prix:1256,
            id:1,
            count:1,
        }
        
    },
    {
        image:imgp2,
        nom:"Iphone2",
        prix:1256,
        id:2,
        count:1,
        categorie:"Phones",
        attributes:{
            image:imgp2,
            nom:"Iphone2",
            prix:1256,
            count:1,
        id:2,

        }
    },
    {
        image:imgp5,
        nom:"Iphone3",
        prix:1256,
        count:1,
        id:3,
        categorie:"Phones",
        attributes:{
            image:imgp5,
            nom:"Iphone3",
            prix:1256,
            id:3,
            count:1,

        }
    },
    {
        image:imgp4,
        nom:"Iphone4",
        prix:1256,
        count:1,
        id:4,
        categorie:"Phones",
        attributes:{
            image:imgp4,
            nom:"Iphone4",
            prix:1256,
            id:4,
            count:1,
        }
    },
    {
        image:imgp5,
        nom:"Iphone5",
        prix:1256,
        id:5,
        categorie:"Phones",
        count:1,
        attributes:{
            image:imgp5,
            nom:"Iphone5",
            prix:1256,
            id:5,
            count:1,
        }
    },
    {
        image:imgp4,
        nom:"Iphone6",
        prix:1256,
        count:1,
        id:3,
        categorie:"Phones",
        attributes:{
            image:imgp4,
            nom:"Iphone3",
            prix:1256,
            id:3,
            count:1,

        }
    },
    {
        image:imgp2,
        nom:"Iphone2",
        prix:1256,
        count:1,
        id:4,
        categorie:"Phones",
        attributes:{
            image:imgp2,
            nom:"Iphone4",
            prix:1256,
            id:4,
            count:1,
        }
    },
    {
        image:imgp1,
        nom:"Iphone8",
        prix:1256,
        id:5,
        categorie:"Phones",
        count:1,
        attributes:{
            image:imgp1,
            nom:"Iphone5",
            prix:1256,
            id:5,
            count:1,
        }
    }
]

const AppleItem=[
    // Iphone
    {
       image:imga1,
       nom:"Iphone1",
       prix:1256,
       id:1,
       count:1,
       categorie:"Phones",
       attributes:{
           image:imga1,
           nom:"Iphone1",
           prix:1256,
           id:1,
           count:1,
       }
       
   },
   {
       image:imga2,
       nom:"Iphone2",
       prix:1256,
       id:2,
       count:1,
       categorie:"Phones",
       attributes:{
           image:imga2,
           nom:"Iphone2",
           prix:1256,
           count:1,
       id:2,

       }
   },
   {
       image:imga5,
       nom:"Iphone3",
       prix:1256,
       count:1,
       id:3,
       categorie:"Phones",
       attributes:{
           image:imga5,
           nom:"Iphone3",
           prix:1256,
           id:3,
           count:1,

       }
   },
   {
       image:imga4,
       nom:"Iphone4",
       prix:1256,
       count:1,
       id:4,
       categorie:"Phones",
       attributes:{
           image:imga4,
           nom:"Iphone4",
           prix:1256,
           id:4,
           count:1,
       }
   },
   {
       image:imga5,
       nom:"Iphone5",
       prix:1256,
       id:5,
       categorie:"Phones",
       count:1,
       attributes:{
           image:imga5,
           nom:"Iphone5",
           prix:1256,
           id:5,
           count:1,
       }
   },
   {
       image:imga4,
       nom:"Iphone6",
       prix:1256,
       count:1,
       id:3,
       categorie:"Phones",
       attributes:{
           image:imga4,
           nom:"Iphone3",
           prix:1256,
           id:3,
           count:1,

       }
   },
   {
       image:imga2,
       nom:"Iphone2",
       prix:1256,
       count:1,
       id:4,
       categorie:"Phones",
       attributes:{
           image:imga2,
           nom:"Iphone4",
           prix:1256,
           id:4,
           count:1,
       }
   },
   {
       image:imga1,
       nom:"Iphone8",
       prix:1256,
       id:5,
       categorie:"Phones",
       count:1,
       attributes:{
           image:imga1,
           nom:"Iphone5",
           prix:1256,
           id:5,
           count:1,
       }
   }
]


function Produits() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const [count, setCount] = useState(1);
      const location = useLocation();
      const categorie = location.state;
      console.log(categorie)
    return (
        <div style={{top:"0px"}}>
            <div style={{top:"0px"}} class="page-heading" id="top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner-content">
                                <h2>Check Our Products</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="section" id="products">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Our Latest {categorie}</h2>
                                <span>Check out all of our products.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    { categorie=="Personal Computer" &&
                                    donneeItem.map((item, index) =><Item item={item} key={index} />)
                                }
                                 { categorie=="Phones" &&
                                    PhonesItem.map((item, index) =><Item item={item} key={index} />)
                                }
                                { categorie=="Apple Watch" &&
                                    AppleItem.map((item, index) =><Item item={item} key={index} />)
                                }
                        <div class="col-lg-12">
                            <div class="pagination">
                                <ul>
                                    <li>
                                        <a href="#">1</a>
                                    </li>
                                    <li class="active">
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#"> {">"} </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const Item = ({item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const {
        palette: { neutral },
    } = useTheme();

    return (
        <div class="col-lg-4">
            <div class="item">
                <div class="thumb">
                    <div class="hover-content">
                        <ul>
                            <li><a onClick={() => navigate(`/item/${item.id}`,{ state: {item} })} style={{cursor:"pointer"}}><i class="fa fa-eye"></i></a></li>
                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                            <li><a style={{cursor:"pointer"}} onClick={()=> dispatch(addToCart({ item: { ...item, count } }))}><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <img src={item.image} alt="" />
                </div>
                <div class="down-content">
                    <h4>{item.nom}</h4>
                    <span>{item.prix} fcfa</span>
                    <ul class="stars">
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Item2 = ({item}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const {
        palette: { neutral },
    } = useTheme();

    // const { prix, nom, image } = item.attributes;
    // const {
    //     data: {
    //         attributes: {
    //             formats: {
    //                 medium: { url },
    //             },
    //         },
    //     },
    // } = image;


    return (
        <div style={{ marginLeft: "15px", margin: "15px", background: "red" }} class="item">
            <div style={{ background: "red" }} class="thumb">
                <div class="hover-content">
                    <ul>
                        <li><a onClick={() => navigate(`/item/${item.id}`,{ state: {item} })} style={{cursor:"pointer"}}><i class="fa fa-eye"></i></a></li>
                        <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                        <li><a style={{cursor:"pointer"}} onClick={()=> dispatch(addToCart({ item: { ...item, count } }))}><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <img style={{ width: "100%" }} src={item.image} alt="" />
            </div>
            <div class="down-content">
                <h4>{item.nom}</h4>
                <span>{item.prix} fcfa</span>
                <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Produits