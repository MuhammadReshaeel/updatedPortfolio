import {
    Box,
    Flex,
    Heading,
    Image,
    chakra,
    useColorModeValue,
    Skeleton,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useState, useRef, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import AboutTerminal from '@/components/AboutTerminal';
// const AboutTerminal = dynamic(
//     () => import('../src/components/AboutTerminal'),
//     { loading: () => <p>...</p> }
// );

// AboutTerminal.displayName = 'AboutTerminal';
export default function Home() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        if (!imageLoaded && imageRef.current?.complete) {
            setImageLoaded(true);
        }
    }, []);

    return (
        <>
            <NextSeo title='Home' />
            <Box
                minH='100vh'
                height='full'
                width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
                maxW='7xl'
                mx='auto'
                pt={{ base: '28', sm: '14', md: '16', xl: '20' }}
                mb='1rem'
            >
                <Flex
                    direction='column'
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    height='full'
                    width='full'
                    p={{ base: 0, sm: 16 }}
                >
                    <Flex
                        direction={{ base: `column`, lg: `row` }}
                        alignItems='center'
                        mx='auto'
                        my={{ xl: '16' }}
                    >
                        <Skeleton isLoaded={imageLoaded} boxSize='250px' borderRadius='2xl' m='auto'>
                            <Image
                                ref={imageRef}
                                flexGrow={3}
                                borderRadius='2xl'
                                boxSize='250px'
                                htmlWidth={250}
                                htmlHeight={250}
                                src='/static/images/profile.jpg'
                                objectFit='cover'
                                alt='Profile Picture'
                                onLoad={() => setImageLoaded(true)}
                            />
                        </Skeleton>
                        <Flex
                            alignSelf='center'
                            direction='column'
                            pl={{ base: 0, lg: 10 }}
                            my={{ base: 10, lg: 0 }}
                            flexGrow={1}
                        >
                            <Heading
                                bgGradient={`linear(to-r, ${useColorModeValue(
                                    `brand.600`,
                                    `brand.400`
                                )}, ${useColorModeValue(`teal.600`, `teal.400`)}, ${useColorModeValue(
                                    `blue.600`,
                                    `blue.300`
                                )})`}
                                className='moving-grad'
                                bgClip='text'
                                fontSize={{ base: `5xl`, lg: `7xl` }}
                                textAlign={{ base: `center`, lg: `left` }}
                            >
                                Hi, I&apos;m Reshaeel!
                            </Heading>
                            <chakra.p maxW='650px' textAlign={{ base: `center`, lg: `left` }} fontSize='xl' mt={2}>
                                I am a {' '}
                                <Box as='span' bgGradient={`linear(to-r, ${useColorModeValue(`brand.600`, `brand.400`)}, ${useColorModeValue(`teal.600`, `teal.400`)}, ${useColorModeValue(`blue.600`, `blue.300`)})`} className='moving-grad' bgClip='text'>Frontend Engineer</Box>
                                {' '} having 2+ years of experience in developing state-of-the-art applications,
                                building great user experiences. As a passionate web developer - I can develop stable & scalable projects using top frameworks like Next js and Angular.
                            </chakra.p>
                            <chakra.p maxW='650px' textAlign={{ base: `center`, lg: `left` }} fontSize='xl' mt={2}>
                                Skilled in technologies like {' '}
                                <Link href='https://nextjs.org/' passHref isExternal>
                                    <ChakraLink>NextJS</ChakraLink>
                                </Link>{', '}
                                <Link href='https://reactjs.org/' passHref isExternal>
                                    <ChakraLink>ReactJS</ChakraLink>
                                </Link>{', '}
                                <Link href='https://angular.io/' passHref isExternal>
                                    <ChakraLink>Angular</ChakraLink>
                                </Link>{', '}
                                <Link href='https://www.javascript.com/' passHref isExternal>
                                    <ChakraLink>Javascript</ChakraLink>
                                </Link>{', '}
                                Launched multiple projects from the empty repository to fully-functional production deployments. I am a team player and always looking for new challenges and ways to improve myself.
                            </chakra.p>
                        </Flex>
                    </Flex>
                    <AboutTerminal />
                </Flex>
            </Box>
        </>
    );
}
