import React from "react";
// import { ReactNode } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FcLikePlaceholder,FcBusiness } from "react-icons/fc";

import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  SimpleGrid,
  Image,
  Text,
  Input
} from "@chakra-ui/react";

// import { BsList, BsXLg } from "@chakra-ui/icons";

import { BsList,BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";


const Navbar = () => { 
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      style={{
        color: "black",
        position: "fixed",
        width: "100%",
        top: "0",
        fontFamily: "monospace",
        fontSize: "16px",
        zIndex: 3,
      }}
    >
      
      <Box bg={"white"} px={4} boxShadow={"2xl"} zIndex={2} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box h={16} marginLeft={"40px"}>
            <Link to="home" smooth="true" offset={-50}>
              <Image
                src={
                  "data:image/png;base64,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"
                }
                height="90%"
              />
            </Link>
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <BsXLg /> : <BsList />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{ bg: "rgb(11,25,46)" }}
            bg={"white"}
            border={"solid white"}
          />

          <SimpleGrid
            columns={7}
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
            spacing={7}
            marginRight={{base:"200px",md:"200px",lg:"330px",xl:'10px'}}
            
          >
     
            <Link to="home" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}> Home</Text>
            </Link>
            <Link to="about" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>About</Text>
            </Link>
            <Link to="skills" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>Skills</Text>
            </Link>
            <Link to="projects" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>Projects</Text>
            </Link>
            <Link to="stats" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>Stats</Text>
            </Link>
            <Link to="contact" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"}>Contact</Text>
            </Link>
 
            
            <Input marginLeft={{base:"10px",md:"20px",lg:"50px",xl:'90px'}} bg={"gray.50"} w={"300px"} placeholder={`🔎 Search for Products,Brands`}/>
          </SimpleGrid>
          <SimpleGrid  columns={3}
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
            spacing={5}
            marginRight={{base:"2px",md:"2px",lg:"3px",xl:'20px'}}
            >
              
          <Link to="projects" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"} fontSize={"26px"}><BiUserCircle /></Text>
            </Link>
            <Link to="stats" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"} fontSize={"26px"}><FcLikePlaceholder/></Text>
            </Link>
            <Link to="contact" smooth={"true"} offset={-50}>
              <Text className={"Navbar_text"} fontSize={"26px"}><FcBusiness/></Text>
            </Link>
          </SimpleGrid>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                to="home"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Projects
              </Link>
              <Link
                to="stats"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Stats
              </Link>
              <Link
                to="contact"
                smooth={"true"}
                offset={-50}
                onClick={isOpen ? onClose : onOpen}
              >
                Contact
              </Link>
             
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Navbar;