import React from 'react'
//import "../../assets/css/templatemo-hexashop.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/font-awesome.css"
import "../../assets/css/features.css"
//import "../../assets/css/owl-carousel.css"
//import "../../assets/css/flex-slider.css"

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useNavigate } from "react-router-dom";
 

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

const tab = ["1", "2", "3", "7", "1", "2", "3", "7"]
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

function Features({categorie}) {
    const settings = {
        dots: true, // Désactive les indicateurs de pagination
        infinite: true, // Permet une lecture en boucle
        speed: 500, // Vitesse de défilement
        slidesToShow: 3, // Nombre d'éléments à afficher à la fois
        slidesToScroll: 1, // Nombre d'éléments à faire défiler à la fois
        autoplay: true,
        autoplaySpeed: 1000,
         prevArrow: <button  class="slick-arrow slick-prev">Précédent</button>, // Bouton de défilement précédent
          nextArrow: <button>Suivant</button>, // Bouton de défilement suivant
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        // <!-- ***** Men Area Starts ***** -->
        <section class="section" id="men">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div style={{cursor:"pointer"}} onClick={() => navigate(`/produits/`)} class="section-heading">
                            <h2>{categorie}</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="men-item-carousel">
                            {/* <Carousel showArrows={true} style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}> */}
                            <Slider  {...settings}>
                                { categorie=="Personal Computer" &&
                                    donneeItem.map((item, index) =><Item item={item} key={index} />)
                                }
                                 { categorie=="Phones" &&
                                    PhonesItem.map((item, index) =><Item item={item} key={index} />)
                                }
                                { categorie=="Apple Watch" &&
                                    AppleItem.map((item, index) =><Item item={item} key={index} />)
                                }
                            </Slider>

                            {/* </Carousel> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Item3 = () => {
    return (
        <div style={{ height: 100 }} >

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

const MySlider = () => {


    return (
        <div>

            <div>
                {/* Contenu de l'élément 1 */}
                <img src="image1.jpg" alt="Image 1" />
            </div>
            <div>
                {/* Contenu de l'élément 2 */}
                <img src="image2.jpg" alt="Image 2" />
            </div>
            {/* Ajoutez les autres éléments ici */}
        </div>
    );
}



export default Features