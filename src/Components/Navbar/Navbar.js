import { Search } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import {  ShoppingCartOutlined} from "@material-ui/icons";
import './Navbar.css'
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const quantity=useSelector(state=>state.cart.quantity);
    
    return (
        <>
            <div className="container">

                <div className="wrapper">


                    <div className="left">
                        <div className="language">
                            EN
                        </div>

                        <div className="searchContainer">
                            {/* <Input className='input' /> */}
                            {/* Search Icon from materialui not component */}
                            <Search style={{ color: "gray", fontSize: "16px" }} />

                        </div>

                    </div>



                    <div className="center">
                        <img src="./Assets/Logo.png" alt="" className="logo" />
                    </div>



                    <div className="right">

                        <Link to='/register' style={{ color: "black", textDecoration: "none" }}>
                            <div className="menuItem" >
                                REGISTER
                            </div>
                        </Link>

                        <Link to='/login' style={{ color: "black", textDecoration: "none" }}>
                            <div className="menuItem" style={{ width: "50px" }}>
                                SIGN IN
                            </div>
                        </Link>


                        <Link to='/cart' style={{ color: "black", textDecoration: "none" }}>

                            <div className="menuItem">
                                <Badge badgeContent={quantity} color="primary">

                                <ShoppingCartOutlined />
                                </Badge>


                            </div>
                        </Link>


                    </div>


                </div>

            </div>


        </>
    );
}

export default Navbar;
