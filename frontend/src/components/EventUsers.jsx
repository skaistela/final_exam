import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import eventServices from '../services/eventServices';
import {Button, Table } from 'react-bootstrap';


const EventUsers = () => {
    
    
    const [users, setUsers] = useState([]);

    const getData = () => {
        eventServices.getEvents().then(res => {
            setUsers([...res.data]);
        })
    }
    useEffect(() => {
        getData();
    }, []);

    console.log(users);
    

    return (
        <div>
            <h1 className='text-center my-5 py-5'>Register users to Event</h1>
            {users.length > 0 ? (
                <Table striped bordered hover variant="dark" className='my-5 '  >
                    <thead>
                        <tr>
                            <th>Name, Last name</th>
                            <th>E-mail</th>
                            <th>Age</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index) => (
                            <tr key={index}>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.age}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>) : (<h3 className='text-center my-3'>You don't have any Event attenders!</h3>)}
                
        <Button variant="outline-primary"className="mt-5" type="submit"><a href="/form"  >Form</a></Button>{' '}
      <Button variant="outline-primary"className="mt-5" type="submit"><a href="/" >Logout</a></Button>{' '}
      </div>
        

    )
}

export default EventUsers