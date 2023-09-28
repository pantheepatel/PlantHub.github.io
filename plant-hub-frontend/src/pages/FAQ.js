import React from 'react'
import { Container, Accordion } from 'react-bootstrap';

function FAQ() {
  return (
    <div>
      <Container>
        <h4>heading</h4>
        <Accordion defaultActiveKey="0" flush className='border-2 border-black'>
          <Accordion.Item classname="" eventKey="0">
            <Accordion.Header></Accordion.Header>
            <Accordion.Body>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  )
}

export default FAQ