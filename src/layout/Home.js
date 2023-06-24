import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bg from "../assets/bg.png";
import logo from "../assets/logo.png";

const MotionBox = motion(Box);

function Home() {
  const createWallet = () => {
    // Implementation logic
    return null;
  };

  const connectWallet = () => {
    // Implementation logic
    return null;
  };

  return (
    <MotionBox
      w="100%"
      h="100vh"
      bgImage={bg}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Flex justify="center" alignItems="center" h="80%">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          minH={["20vh", "30vh", "40vh", "50vh"]}
          h="auto"
          w={["90vw", "80vw", "70vw", "60vw"]}
          bg="rgba(64, 60, 119, 0.58)"
          borderRadius={["40px", "50px", "60px", "70px"]}
          p={[4, 8, 12, 16]}
          gap={[1, 2, 3, 4]}
        >
          <Image src={logo} alt="logo" h={[20, 30, 40]} w={[20, 30, 40]} />
          <Text
            fontSize={["lg", "xl", "2xl", "3xl"]}
            color="#EBC5D2"
            fontFamily="Poppins"
            fontWeight={800}
            textAlign={"center"}
          >
            Mint, create or redeem your SOAPs
          </Text>
          <Flex
            gap={[2, 4]}
            mt={2}
            flexDirection={["column", "column", "row"]}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              bg="#C0C7F2"
              w={["90%", "80%", "56"]}
              color="#5C67A4"
              fontFamily="Poppins"
              fontWeight={600}
              fontSize={["sm", "md", "lg"]}
              onClick={connectWallet}
              px={6}
            >
              CONNECT WALLET
            </Button>
            <Button
              bg="#C0C7F2"
              w={["90%", "70%", "56"]}
              color="#5C67A4"
              fontFamily="Poppins"
              fontWeight={600}
              onClick={createWallet}
              fontSize={["sm", "md", "lg"]}
              px={6}
            >
              CREATE WALLET
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </MotionBox>
  );
}

export default Home;
