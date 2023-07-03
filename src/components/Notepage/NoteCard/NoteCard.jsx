import {
  Button, Card, CardBody, Flex, Heading, Input, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, VStack, useDisclosure
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import note2 from "../../../images/note2.png";
import { _id, deleteNotes, updateNotes } from './../../../Redux/notes/note.action';
import "./style.css";

export default function NoteCard({title,content,_id}){

    const dispatch =useDispatch()
    const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [tempTitle,setTitle]=useState(title)
  const [tempContent,setContent]=useState(content)

  const updateNotes=()=>{
    dispatch(updateNotes(_id,{title:tempTitle,content:tempContent}))
    onClose()  
}
    return(

    <Card backgroundImage={`url(${note2})`}>
        <CardBody>
            <VStack>
                <Heading>{title}</Heading>
                <Text>{content}</Text>

                <Flex gap={2}>
                <>
        <Button onClick={onOpen}>Update</Button>
  

        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            
            <Input value={tempTitle}m placeholder="Please enter title" onChange={(e)=>setTitle(e.target.value)}></Input>
            <Textarea mt={8} value={tempContent} placeholder={"Please enter descriptions"} onChange={(e)=>setContent(e.target.value)}></Textarea>


            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={updateNotes} >
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
                    <Button onClick={()=>{
                      dispatch(deleteNotes(_id))
                    }}>Delete</Button>
                </Flex>
            </VStack>
        </CardBody>
    </Card>
    )
}