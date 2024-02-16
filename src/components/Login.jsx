import {
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from "react-router";

function Login() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLoginBtn = () => {
        fetch('https://expensive-battledress-elk.cyclic.app/users/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.token) {
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 1000);
                }
                localStorage.setItem("token", data.token);
            })
            .catch(err => console.log(err));
    }


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (

        <Flex w='100%' h='75vh'>
            <Flex margin='auto' w='90%'>
                <FormControl w='50%' margin='auto' justifyContent='center' boxShadow='xl' padding='10%' alignItems='center'>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' id='login_email' placeholder='Enter Your Email' onChange={handleEmailChange} />
                    <FormLabel marginTop='10%'>Password</FormLabel>
                    <Input type='password' id='login_password' placeholder='Enter Password' onChange={handlePasswordChange} />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <Button bg='tomato' color='white' w='100%' marginTop='10%' onClick={handleLoginBtn}>LOGIN</Button>
                </FormControl>
            </Flex>
        </Flex >

    )
}

export default Login