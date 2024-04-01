import React,{useState} from 'react'
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const dispatch = useDispatch()
  const addContact = (event) => {
    event.preventDefault()
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}})
  }
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="Enter Phone number" onChange={(event)=>setPhoneNumber(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" className="search-button">
          Add
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
