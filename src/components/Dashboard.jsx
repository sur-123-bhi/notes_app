import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Textarea, Image } from '@chakra-ui/react'

function Dashboard() {
    let [userNotesArr, setNote] = useState([]);
    useEffect(() => {
        fetch('https://expensive-battledress-elk.cyclic.app/notes', {
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    })
    return (
        <Flex w='100%'>
            <Flex w='90%' margin='auto'>
                <Flex w='40%'>

                </Flex>
                <Flex w='60%' >
                    <Textarea h='75vh' placeholder='Here is a sample placeholder' />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Dashboard