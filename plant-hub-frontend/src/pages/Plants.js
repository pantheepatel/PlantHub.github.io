// this page will give the list of all the plants in the database, with overview card - plantCard Component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlantCard from '../components/PlantCard';
import { Container, Row, Col } from 'react-bootstrap';
import { plantList } from '../services/PlantDetail';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function Plants() {
  var startPage = 0, endPage = 6
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(startPage)

  const prev = () => {
    if (page > startPage) {
      setPage(page - 1);
    }
  };
  const next = () => {
    if (page < endPage) {
      setPage(page + 1);
    }
  };

  // whenever we get the data from api call it will be stored in plants array with the help of use state
  useEffect(() => {
    plantList(page).then(response => {
      // console.log(response)
      setPage(page)
      console.log('response is : ', response.data['plantList'])
      setPlants(response.data['plantList'])
    })
      // whenever we catch any error it will be set to error string
      .catch(err => {
        setError(err.message);
        console.log(err)
      });
  }, [page]);

  return (
    <div>
      <div className=' flex justify-content-around fixed-bottom strip-color p-2.5 pt-3'>
        <button className={page == startPage ? 'btn bg-secondary text-white' : 'btn bg-primary text-white'} onClick={prev}><ArrowCircleLeftIcon className='mr-2' /> Previous</button>
        <span>On the page {page} and total results on this page are {plants.length}</span>
        <button className={page == endPage ? 'btn bg-secondary text-white' : 'btn bg-primary text-white'} onClick={next}>Next<ArrowCircleRightIcon className='ml-2' /> </button>
      </div>
      {/* {console.log(plants)} */}
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