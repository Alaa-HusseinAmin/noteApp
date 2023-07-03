import {
  Box,
  Button, Checkbox, Flex, FormControl,
  FormLabel, Heading, Image, Input, Link, Stack, Text, VStack,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import logo from "../../src/images/image.avif";
import { getUser } from "../Redux/users/user.action.js";

export default function LoginPage() {
const nav = useNavigate()
const {auth,token,loading,error}=useSelector((state)=>state.userReducer)
console.log(auth,token);
if(auth){
  nav("/notes")
}

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch =useDispatch()
const handeleLogin =()=>{
     dispatch(getUser({email,password}))
}


  return <Flex padding={4} w="100%">

    <Image w={"45%"} src={logo}></Image>

    <VStack w={"50%"}>


    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50','gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handeleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </VStack>

    </Flex>
}
