import { Box, Heading, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import homeImg from '../assets/home-top-img-2x.webp'

function Home() {

    return (
        <Box w="100%" bg='hsl(21, 100%, 97%)'>
            <Flex w='90%' margin='auto' alignItems='center' flexDirection="column">
                <Flex h='50vh' flexDirection="column" justifyContent='center' w='60%' textAlign='center'>
                    <Heading as='h1' size='4xl' noOfLines={1}>
                        Free your notes
                    </Heading>
                    <Text marginTop='2%' fontSize='150%' wordSpacing='2px' >Joplin is an open source note-taking app. Capture your thoughts and securely access them from any device.</Text>
                </Flex>

                <Box w='80%' >
                    <Image src={homeImg} alt='desktop image' />
                </Box>
            </Flex>
        </Box>
    )
}

export default Home