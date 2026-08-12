import React from "react";
import {
  Box,
  Grid,
  Heading,
  Link,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="#f5f5f5"
      p={5}
      paddingBottom={{
        sm: "60px",
        md: "60px",
        lg: "20px",
      }}
      fontFamily="Source Sans 3"
      pt="60px"
      direction="column"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {/* Learn With SurajLearning */}
        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Learn With SurajLearning
          </Heading>

          <br />

          <Link fontSize="13.5px">Learn Web Development</Link>
          <br />
          <Link fontSize="13.5px">Learn JavaScript</Link>
          <br />
          <Link fontSize="13.5px">Learn React</Link>
          <br />
          <Link fontSize="13.5px">Learn Node.js</Link>
          <br />
          <Link fontSize="13.5px">Learn MongoDB</Link>
          <br />
          <Link fontSize="13.5px">Learn Data Structures</Link>
          <br />
          <Link fontSize="13.5px">Learn C++</Link>
          <br />
          <Link fontSize="13.5px">Learn Python</Link>
          <br />
          <Link fontSize="13.5px">Learn SQL</Link>
          <br />
          <Link fontSize="13.5px">Learn Machine Learning</Link>
        </Box>

        {/* Popular Topics */}
        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Popular Topics
          </Heading>

          <br />

          <Link fontSize="13.5px">Web Development</Link>
          <br />
          <Link fontSize="13.5px">Data Structures & Algorithms</Link>
          <br />
          <Link fontSize="13.5px">C++</Link>
          <br />
          <Link fontSize="13.5px">JavaScript</Link>
          <br />
          <Link fontSize="13.5px">React</Link>
          <br />
          <Link fontSize="13.5px">Node.js</Link>
          <br />
          <Link fontSize="13.5px">MongoDB</Link>
          <br />
          <Link fontSize="13.5px">SQL</Link>
          <br />
          <Link fontSize="13.5px">Machine Learning</Link>
        </Box>

        {/* Popular Courses */}
        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Popular Courses
          </Heading>

          <br />

          <Link fontSize="13.5px">Complete Web Development</Link>
          <br />
          <Link fontSize="13.5px">JavaScript Programming</Link>
          <br />
          <Link fontSize="13.5px">React Development</Link>
          <br />
          <Link fontSize="13.5px">MERN Stack Development</Link>
          <br />
          <Link fontSize="13.5px">Data Structures & Algorithms</Link>
          <br />
          <Link fontSize="13.5px">C++ Programming</Link>
          <br />
          <Link fontSize="13.5px">Database Management</Link>
          <br />
          <Link fontSize="13.5px">Machine Learning</Link>
        </Box>

        {/* SurajLearning */}
        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            SurajLearning
          </Heading>

          <br />

          <Link fontSize="13.5px">About</Link>
          <br />
          <Link fontSize="13.5px">Courses</Link>
          <br />
          <Link fontSize="13.5px">Learning Resources</Link>
          <br />
          <Link fontSize="13.5px">Contact</Link>
          <br />
          <Link fontSize="13.5px">Privacy</Link>
          <br />
          <Link fontSize="13.5px">Terms</Link>
        </Box>
      </Grid>

      {/* Bottom Footer */}
      <Flex
        mt={15}
        gap={7}
        borderTop="1px solid #c9c9c9"
        direction={{
          sm: "column",
          md: "row",
          lg: "row",
        }}
        justifyContent={{
          lg: "space-between",
        }}
        alignItems="center"
        padding={{
          sm: "10px",
          md: "35px",
          lg: "55px",
        }}
      >
        {/* Copyright */}
        <Box>
          <Text fontSize="13.5px">
            © 2026 SurajLearning. All rights reserved.
          </Text>
        </Box>

        {/* Social Links */}
        <Flex gap={4} alignItems="center" justifyContent="center">

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/suraj-kumar-42b5a1355/"
            isExternal
          >
            <Image
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
    alt="LinkedIn"
    boxSize="28px" />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/Surajiitp"
            isExternal
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub"
              boxSize="28px"
            />
          </Link>

        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;