// this component is to render all the details of plants in details to DetailsPage of plant
import React from 'react'
import { Link, json, useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, Table, Image } from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import imageAlt from "../images/planthub-logo-zip-file/png/logo-color.png"

function PlantDetail(props) {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  // const image=props.image.small_url
  // let history = useHistory();

  return (
    <div>
      <div className='my-2' key={props.id}>
        {/* <button onClick={()=>history.goBack()}><KeyboardBackspaceIcon/>back</button> */}
        <button onClick={goBack}><KeyboardBackspaceIcon />back</button>
        <h2 className='mx-auto w-fit text-darkGreen p-2 mb-3 border-2'> {props.name}</h2>
        <Row className=''>
          <Col sm={12} md={6} className=''>
            {/* <img src="" alt="" /> */}
            {/* <div className='p-2 border border-blue-500 h-1/2'> */}
            {
              props.image ? <Image src={props.image} className='h-1/2 w-full object-cover mb-2' /> : <Image src={imageAlt} className='h-1/2 w-full object-cover mb-2' />
            }
            {/* </div> */}
            <b>{props.description}  </b>
          </Col>
          <Col sm={12} md={6} className=''>
            <Table striped bordered variant="light">
              {/* {console.log('into plant detail file: ',props.image)} */}
              <thead>
                <tr><td>id </td><td>{props.id}</td></tr>
              </thead>
              <tbody>
                <tr><td>name </td><td>{props.name}</td></tr>
                <tr><td>cycle </td><td>{props.cycle}</td></tr>
                <tr><td>watering </td><td>{props.watering}</td></tr>
                <tr><td>type </td><td>{props.type}</td></tr>
                <tr><td>flowers </td><td>{props.flowers ? 'yes' : 'no'}</td></tr>
                <tr><td>flowering_season </td><td>{props.flowering_season}</td></tr>
                <tr><td>fruit </td><td>{props.fruit ? 'yes' : 'no'}</td></tr>
                <tr><td>edible_fruit </td><td>{props.edible_fruit ? 'yes' : 'no'}</td></tr>
                <tr><td>growth_rate </td><td>{props.growth_rate}</td></tr>
                <tr><td>maintenance </td><td>{props.maintenance}</td></tr>
                <tr><td>medicinal </td><td>{props.medicinal ? 'yes' : 'no'}</td></tr>
                <tr><td>poisonous_to_humans </td><td>{props.poisonous_to_humans ? 'yes' : 'no'}</td></tr>
                <tr><td>poisonous_to_pets </td><td>{props.poisonous_to_pets ? 'yes' : 'no'}</td></tr>
                <tr><td>thorny </td><td>{props.thorny ? 'yes' : 'no'}</td></tr>
                <tr><td>indoor </td><td>{props.indoor ? 'yes' : 'no'}</td></tr>
                <tr><td>care_level </td><td>{props.care_level}</td></tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PlantDetail