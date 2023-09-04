import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlantCard from '../components/PlantCard';
import { Container, Row, Col } from 'react-bootstrap';
// import {Grid}

function Plants() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/data/")
      .then((res) => setPlants(res.data['plantList']))
      .catch(err => {
        setError(err.message);
        console.log(err)
      });
  }, []);
  return (
    <div>

      <Container>

        <Row xs={6} md={3} lg={3}>
          {
            plants.map((item) => {
              // <Col>
              //   fkj
              //   <PlantCard id={item['id']} name={item['name']}></PlantCard>
              // </Col>
              // console.log(item)
              return (
                <PlantCard id={item['id']} name={item['name']}></PlantCard>
              )
            })
          }
        </Row>

      </Container>
    </div>
  )
}

export default Plants