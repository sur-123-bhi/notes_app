import {
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input
} from '@chakra-ui/react';
import React, { useState } from 'react';

function Signup() {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleSignupBtn = () => {
        fetch('https://expensive-battledress-elk.cyclic.app/users/register', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    const handleNameSave = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <Flex w='100%' h='90vh'>
            <Flex margin='auto' w='90%'>
                <FormControl w='50%' margin='auto' justifyContent='center' boxShadow='xl' padding='10%' alignItems='center'>

                    <FormLabel>Full Name</FormLabel>
                    <Input type='name' placeholder='Enter Your Name' onChange={handleNameSave} />

                    <FormLabel marginTop='10%'>Email address</FormLabel>
                    <Input type='email' id='signup_mail' placeholder='Enter Your Email' onChange={handleEmailChange} />

                    <FormLabel marginTop='10%'>Password</FormLabel>
                    <Input type='password' id='signup_pass' onChange={handlePasswordChange} placeholder='Enter Password' />

                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <Button onClick={handleSignupBtn} bg='tomato' color='white' w='100%' marginTop='10%'>Sign Up</Button>

                </FormControl>
            </Flex>
        </Flex >
    )
}

export default Signup