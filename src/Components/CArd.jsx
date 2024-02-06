import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './Card.css'

function CArd({user}) {
  const [open, setOpen] = useState(false);

  return (
    <>
     <Card className='caard text-center' style={{ width: '16.5rem' }}>
      <Card.Header className='list'>{user.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className='list'>E-mail: {user.email}</ListGroup.Item>
        <ListGroup.Item className='list'>Phn: {user.phone}</ListGroup.Item>
        <ListGroup.Item className='cmpny' onClick={() => setOpen(!open)}>Company: {user.company.name} <i class="fa-solid fa-angle-down"></i></ListGroup.Item>

        <Collapse in={open}>
        <div id="example-collapse-text">
        <ListGroup.Item className='list'>Catch Phrase: {user.company.catchPhrase}</ListGroup.Item>
        <ListGroup.Item className='list'>BS: {user.company.bs}</ListGroup.Item>
        </div>
      </Collapse>

        <ListGroup.Item><a href={user.website}>Visit Website</a> </ListGroup.Item>
      </ListGroup>
    </Card>
    </>
  )
}

export default CArd