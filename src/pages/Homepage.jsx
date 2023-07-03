import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from 'react';
import note from "../../src/images/note.png";
export default function Homepage() {
  return (
    <Box padding={8}>
  <Image position={"absolute"} right={0} padding={50} w={500} src={note}/>
      <Heading textAlign={"start"} mt={16} size={'4xl'}>Note App</Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
      NoteApp (formerly known as CorkboardMe) is a virtual corkboard that allows users to create sticky notes filled with 
      different types of information and to collaborate with others.Also it allow you to take a note inOrder to remember what's in your mind when you want to git it you can save it and find it at any time you need it .</Text>
    </Box>
  )
}
