import React from 'react'
import "../../assets/css/templatemo-hexashop.css"
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/images/logo.png'
import AppBar from '@mui/material/AppBar';
import { Badge, Box, IconButton } from "@mui/material";
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

    return (
        <AppBar sx={{ position: "sticky", background: "#eee", height: "55px" }} className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start *****  */}
                            <a href="/" className="logo">
                                <img src={logo} />
                            </a>
                            {/* <!-- ***** Logo End ***** --> */}
                            {/* <!-- ***** Menu Start ***** --> */}
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                {/* <li className="scroll-to-section"><a href="#men">Men's</a></li>
                                <li className="scroll-to-section"><a href="#women">Women's</a></li>
                                <li className="scroll-to-section"><a href="#kids">Kid's</a></li> */}
                                
                                <li className="submenu">
                                    <a href="javascript:;">Pages</a>
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="products.html">Products</a></li>
                                        <li><a href="single-product.html">Single Product</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:;">Features</a>
                                    <ul>
                                        <li><a href="#">Features Page 1</a></li>
                                        <li><a href="#">Features Page 2</a></li>
                                        <li><a href="#">Features Page 3</a></li>
                                        <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                    </ul>
                                </li>
                                <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                                <li>
                                    <Badge
                                        badgeContent={cart.length}
                                        color="secondary"
                                        invisible={cart.length === 0}
                                        sx={{
                                            "& .MuiBadge-badge": {
                                                right: 5,
                                                top: 5,
                                                padding: "0 4px",
                                                height: "14px",
                                                minWidth: "13px",
                                            },
                                        }}
                                    >
                                        <IconButton
                                            onClick={() => dispatch(setIsCartOpen({}))}
                                            sx={{ color: "black" }}
                                        >
                                            <ShoppingBagOutlined />
                                        </IconButton>
                                    </Badge>
                                </li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End **** */}
                        </nav>
                    </div>
                </div>
            </div>
        </AppBar>
    )
}

export default Navbar