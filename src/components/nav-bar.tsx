import { Box, Image, Heading, Text, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box px={12} py={2} bg="black" w={"100vw"}>
      <HStack align="center" spacing={4}>
        <Image src="/cheese-icon.svg" w={10} />
        <Heading color="white" fontSize="2xl">
          Grand Cheese Race
        </Heading>
        <Spacer />
        <HStack color="white" fontSize="2xs" fontWeight="semibold">
          <Link href="/">HOME</Link>
          <Text>/</Text>
          <Link href="/voting">VOTING</Link>
          <Text>/</Text>
          <Link href="/victors">PAST VICTORS</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
