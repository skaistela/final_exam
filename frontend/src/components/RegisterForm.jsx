import React from 'react'
import { useState } from 'react'
import eventServices from '../services/eventServices';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterForm = (getData) => {
  const [event, setEvent] = useState('')
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  // const [date,setDate] = useState('');
  const history = useNavigate('');

  const onSubmit = e => {
    e.preventDefault();

    history('/events')
    const setEvent = {
      name: event,
      email: text,
      age: date,
      user: '630bbd0c85e498c717e1768b'
    }
    eventServices.postEvent(setEvent)

    //setEvent('');
    setText('');
    setDate('');
   // getData()
  }
  return (
    <div className='container'>
      <Button variant="outline-primary" className="mb-5" type="submit"><a href="/events" >Events</a></Button>
      <h1>Register</h1>
      <Form className='w-80 m-5' onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEvent">
          <Form.Label>Name, Last name</Form.Label>
          <Form.Control className='bg-light' type="text" placeholder="Name, Last name"
            name='text'
            value={event}
            onChange={(e) => setEvent(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3 " controlId="formBasicText">
          <Form.Label>Email</Form.Label>
          <Form.Control className='bg-light' type="email" placeholder="Email" name='text'
            value={text}
            onChange={(e) => setText(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label >Age </Form.Label>
          <Form.Control className='bg-light' type="number" placeholder="Age" name='number'
            value={date}
            onChange={(e) => setDate(e.target.value)} />
            
        </Form.Group>
        <Button variant="dark" className="mb-5" type="submit">
          Save
        </Button>

      </Form>

      <Button variant="outline-primary" className="mt-5" type="submit"><a href="/" >Logout</a></Button>

    </div>
  )
}

export default RegisterForm