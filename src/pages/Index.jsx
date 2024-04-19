import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaHeartbeat, FaMobileAlt, FaUserNurse } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="white">
        <VStack spacing={10}>
          <Heading as="h1" size="2xl" color="#507DBC" fontFamily="Montserrat">
            Revolutionizing Health Tech
          </Heading>
          <Text fontSize="xl" color="#424242" fontFamily="Lato">
            Empowering healthcare with innovative and efficient technology solutions.
          </Text>
          <Image src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0ZWNofGVufDB8fHx8MTcxMzU1MjE4MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Health Tech" boxSize="300px" objectFit="cover" />
          <Flex gap={5}>
            <Button leftIcon={<FaHeartbeat />} bgGradient="linear(to-r, #507DBC, #7ED957)" color="white" _hover={{ bgGradient: "linear(to-r, #7ED957, #507DBC)" }} boxShadow="0 4px 6px rgba(0,0,0,0.1)" _hover={{ boxShadow: "0 6px 8px rgba(0,0,0,0.15)" }} borderRadius="full" px={8}>
              Learn More
            </Button>
            <Button leftIcon={<FaMobileAlt />} bgGradient="linear(to-r, #507DBC, #7ED957)" color="white" _hover={{ bgGradient: "linear(to-r, #7ED957, #507DBC)" }} boxShadow="0 4px 6px rgba(0,0,0,0.1)" _hover={{ boxShadow: "0 6px 8px rgba(0,0,0,0.15)" }} borderRadius="full" px={8}>
              Download App
            </Button>
          </Flex>
        </VStack>
      </Flex>
      <Box as="footer" py={10} textAlign="center" bg="#424242" color="white" mt={10}>
        <Text fontFamily="Lato">© 2023 Health Tech Startup. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
