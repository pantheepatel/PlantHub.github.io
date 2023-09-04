import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Card, Button } from 'react-bootstrap';
// import Plant from '../interfaces/Plant';
function PlantCard(props) {
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

  return (
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
    <div>
      <Card key={props.id}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );


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