import {
  Flex,
  Text,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";

const Section2 = () => {
  const columnCount = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 4,
    lg: 8,
  });

  return (
    <Flex
      direction="column"
      gap={6}
      bg="#f5f5f5"
      p={10}
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize={{
          lg: "2xl",
          sm: "lg",
          md: "xl",
        }}
        textAlign="center"
      >
        Discover courses designed to help you learn, grow, and succeed.
      </Text>

      <Grid
        templateColumns={`repeat(${columnCount}, 1fr)`}
        gap={6}
        width="100%"
        maxW="1000px"
      >
        <Flex justify="center" align="center" p={4}>
          <Text fontWeight="bold" textAlign="center">
            Web Development
          </Text>
        </Flex>

        <Flex justify="center" align="center" p={4}>
          <Text fontWeight="bold" textAlign="center">
            Data Science
          </Text>
        </Flex>

        <Flex justify="center" align="center" p={4}>
          <Text fontWeight="bold" textAlign="center">
            Artificial Intelligence
          </Text>
        </Flex>

        <Flex justify="center" align="center" p={4}>
          <Text fontWeight="bold" textAlign="center">
            Computer Science
          </Text>
        </Flex>

        <Flex justify="center" align="center" p={4}>
          <Text fontWeight="bold" textAlign="center">
            Programming
          </Text>
        </Flex>

        <Flex justify="center" align="center" p={4}>
          <Text fontWeight="bold" textAlign="center">
            Cloud Computing
          </Text>
        </Flex>

        <Flex justify="center" align="center" p={4}>
          <Text fontWeight="bold" textAlign="center">
            Cybersecurity
          </Text>
        </Flex>

        <Flex justify="center" align="center" p={4}>
          <Text fontWeight="bold" textAlign="center">
            Machine Learning
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Section2;
