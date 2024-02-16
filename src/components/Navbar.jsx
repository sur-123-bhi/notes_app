import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/download.jpeg';
const Navbar = () => {

    return (
        <Flex w='100%' h='15vh' boxShadow='xl' justifyContent='center'>
            <Flex w='90%' h='100%' >
                <Flex w='20%' h='100%' alignItems='center'>
                    <img src={logo} alt="logo" width="60px" />
                </Flex>
                <Flex w='80%' h='100%' justifyContent='flex-end' gap='7%' alignItems='center'>
                    <div><Link to="/" color='tomato' fontWeight='600'>Home</Link></div>
                    <div><Link to="/dashboard" color='tomato' fontWeight='600'>Dashboard</Link></div>
                    <div><Link to="/login" color='tomato' fontWeight='600'>Login</Link></div>
                    <div><Link to="/signup" color='tomato' fontWeight='600'>Sign Up</Link></div>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
