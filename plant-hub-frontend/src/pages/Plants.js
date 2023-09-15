// this page will give the list of all the plants in the database, with overview card - plantCard Component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlantCard from '../components/PlantCard';
import { Container, Row, Col } from 'react-bootstrap';
import { plantList } from '../services/PlantDetail';

function Plants() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');

  // whenever we get the data from api call it will be stored in plants array with the help of use state
  useEffect(() => {
    plantList().then(response => {
        // console.log(response)
        setPlants(response.data['plantList'])
      })
      // whenever we catch any error it will be set to error string
      .catch(err => {
        setError(err.message);
        console.log(err)
      });
  },[]);
  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3}>
          {
            plants.map((item) => {
              return (
                // props are passed to show all the details to plantCard component for overview
                <PlantCard id={item['id']} name={item['name']} cycle={item['cycle']} watering={item['watering']} image={item['image']}></PlantCard>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default Plants