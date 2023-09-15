// this component is to render overview in plantList page
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, json } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import imageAlt from "../images/planthub-logo-zip-file/png/logo-color.png"

function PlantCard(props) {
  // JSON.parse(typeof(props.image))
  // console.log(JSON.stringify(props.image))
  // console.log(JSON.parse(props.image))
  // console.log(json(props.image))
  // const data=props.image
  // const data1=JSON.stringify(data)
  // const data2=JSON.parse(data1)
  // // console.log(JSON.stringify(data))
  // console.log(typeof(data2))
  // console.log(props.image['original_url'])
  return (
    <div className='my-2' key={props.id}>
      <Card>
        <Card.Img variant="top" src={props.image['original_url'] ? props.image['original_url'] : imageAlt} className='object-fit' />
        <Card.Body>
          <Card.Title className='lineClamp'>{props.name}</Card.Title>
          <Card.Text>
            <span>cycle: {props.cycle}</span>
            <br />
            <span>watering: {props.watering}</span>
          </Card.Text>
          {/* to change the link according to clicked plant card */}
          <Link to={`/plants/${props.id}`}>
            <Button variant="success">
              Know More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );


  // const [plantName, setPlantName] = useState(null)
  // const [plantId, setPlantId] = useState(null)
  // plants=Plant


  // const renderList = plants.map((item, index) => {
  //   console.log(item["id"])
  //   return (
  //     <div>{item}</div>
  //   )
  // }
  // )
  // function passID(id){
  //   console.log('id is : ',id)
  // }


  // <>
  //   {
  //     // plants.map((item, index) => {
  //     //   return (
  //     //     <Card key={item['id']}>
  //     //       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  //     //       <Card.Body>
  //     //         <Card.Title>{item['name']}</Card.Title>
  //     //         <Card.Text>
  //     //           Some quick example text to build on the card title and make up the
  //     //           bulk of the card's content.
  //     //         </Card.Text>
  //     //         <Button variant="primary">Go somewhere</Button>
  //     //       </Card.Body>
  //     //     </Card>
  //     //   );
  //     //   }
  //     // )
  // }
  // </>
  // <div className="app">
  //   <div>The List contains:</div>
  //   {renderList}
  // </div>


  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/data/')
  //     .then(response => {
  //       setPlant(response)
  //       // console.log(response.data['plantList'][arr.slice]['name'])
  //       // setPlantName(response.data['plantList'][0])
  //       // setPlantId(response.data['plantList'])
  //       // datap = response['data']
  //       // console.log(response['data'])
  //     })
  //     .catch(error => console.log(error))
  // }, []);
  // console.log(data_res)
  // const plants=plantName.map((name)=>{})
  // return (
  //   <div>
  //     {

  //       // plantName.map((name)=>{
  //       //   return(<div>
  //       //     {name}
  //       //   </div>)
  //       // })
  //       // datap.map((plant) => {
  //       //   console.log(plant)
  //       // })
  //     }
  //     {/* {plantName} */}
  //     {
  //       // {plants}
  //       // setPlantName.map((plantName)=>{
  //       //   console.log(plantName)
  //       // })
  //       // const plants=plantName.map((name)=>{
  //       //   console.log(name)
  //       // })
  //       // console.log(plantName)
  //     }
  //   </div>
  // )
}

export default PlantCard