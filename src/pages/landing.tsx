import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box, Text, theme } from "@chakra-ui/react";
import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const Landing: NextPage = () => {
  return (
    <>
      <Box bgImage="url('/background.png')" bgSize='cover' h='100vh'>
        <NavBar />
        <div style={{marginLeft: "9vw", display: "flex", flexDirection: "column", alignItems: "stretch",}}>
          <Text color={'white'} marginTop={"34vH"} fontSize={"10vh"} fontWeight="bold" fontFamily={'sans-serif poppins'}>Grand Cheese Race</Text>
          <Text color={'white'} fontSize={"4vh"} fontWeight="bold" fontFamily={'sans-serif poppins'}>It's the race of the century! All victors return for</Text>
          <Text color={'white'} fontSize={"4vh"} fontWeight="bold" fontFamily={'sans-serif poppins'}>one final race... who do you think will win?</Text>
        </div>
      </Box>
    </>
  );
};

export default Landing;
