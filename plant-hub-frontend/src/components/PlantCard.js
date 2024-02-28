// this component is to render overview in plantList page
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, json } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import imageAlt from "../images/planthub-logo-zip-file/png/logo-color.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { plantLike } from '../services/PlantDetail';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import CachedIcon from '@mui/icons-material/Cached';
import ShowerIcon from '@mui/icons-material/Shower';
import "react-toastify/dist/ReactToastify.css";

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
  var isLoggedIn = false
  const email = localStorage.getItem('email')
  if (email) { isLoggedIn = true }

  // const [liked, setLiked] = useState(true);
  const [liked, setLiked] = useState(false);


  const handleLike = async () => {
    console.log('id is : ', props.id)
    await plantLike(props.id, localStorage.getItem('id'))
      .then(response => {
        // console.log('this is it : ',response['data'])
        if (response.data.msg === 'liked') {
          setLiked(true);
          // console.log(liked)
        } else if (response.data.msg === 'unliked') {
          setLiked(false);
          window.location.reload()
          // console.log(liked)
        }
        // console.log('response is fpor ',response.data.msg==)
      })
      .catch(error => {
        console.error(error);
      });
    // setLiked(!liked)
  };

  const showAlert = () => {
    toast.error('Please login first!')
  }

  return (
    <div className='my-2' key={props.id}>
      <Card style={{ 'height': '28rem' }} className='border border-success'>
        <Card.Img style={{ 'height': '18rem', 'objectFit': 'cover', 'padding': '1rem' }} variant="top" src={props.image['original_url'] ? props.image['original_url'] : imageAlt} className='object-fit rounded-lg' />
        <Card.Body className=''>
          <Card.Title className='lineClamp'>{props.name}</Card.Title>
          <Card.Text className='d-flex gap-4'>
            <span className='d-flex gap-1 align-items-center '> <CachedIcon fontSize='small' /><span>{props.cycle}</span></span>
            <span className='d-flex gap-1 align-items-center '> <ShowerIcon fontSize='small' /><span> {props.watering}</span></span>
          </Card.Text>
          {/* to change the link according to clicked plant card */}
          {
            isLoggedIn
              ?
              <div className='flex justify-between'>
                <Link to={`/plants/${props.id}`}>
                  <Button variant="btn btn-outline-success outline-3" >
                    Know More
                  </Button>
                </Link>
                <button onClick={handleLike}>{(liked || props.liked) ? <div><FavoriteIcon color='success' /></div> : <div><FavoriteBorderIcon /></div>}</button>
              </div>
              :
              <div className='flex justify-between'>
                <Link onClick={showAlert}>
                  <Button variant="btn btn-secondary outline-3" >
                    Know More
                  </Button>
                </Link>
                <button onClick={showAlert}><div><FavoriteBorderIcon color='success' /></div></button>
              </div>
          }
          <ToastContainer/>
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