// this page will give the list of all the plants in the database, with overview card - plantCard Component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlantCard from '../components/PlantCard';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { plantList, plantSearch } from '../services/PlantDetail';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Search from '@mui/icons-material/Search';
function Plants() {
  var startPage = 0, endPage = 6
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(startPage)
  const [searchTerm, setSearchTerm] = useState('')

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

  const search = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    fetchData()
  }, [page,searchTerm]);

  const fetchData = async () => {
    plantList(page,searchTerm).then(response => {
      setPage(page)
      console.log('response is : ', response.data['plantList'])
      setPlants(response.data['plantList'])
    })
      .catch((err) => {
        setError(err.message);
        console.log(err)
      });
  }

  return (
    <Container>
      <Row className='justify-content-center mb-3'>
        <Col xs={4}>
          <Form inline className=''>
            <InputGroup>
              <Form.Control type="text" placeholder="Search" name='searchTerm' id='searchTerm' onChange={search} className=" mr-sm-2" />
              {/* <Button type="submit" onClick={search}>Submit</Button> */}
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm={1} className='flex flex-col justify-content-around h-fit fixed-left'>
          <h6>Filter</h6>
          <p>
            <input type="checkbox" name="Name" id="Name"/>
            <label htmlFor="tree">Tree</label>
          </p>
          <h6>Sort</h6>
        </Col>
        <Col sm={11}>
          <div className=' flex justify-content-around fixed-bottom strip-color p-2.5 pt-3 z-1'>
            <button className={page == startPage ? 'btn bg-secondary text-white' : 'btn bg-primary text-white'} onClick={prev}><ArrowCircleLeftIcon className='mr-2' /> Previous</button>
            <span>On the page {page} and total results on this page are {plants.length}</span>
            <button className={page == endPage ? 'btn bg-secondary text-white' : 'btn bg-primary text-white'} onClick={next}>Next<ArrowCircleRightIcon className='ml-2' /> </button>
          </div>
          {/* {console.log(plants)} */}
          <>
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
          </>
        </Col>
      </Row>
    </Container>
  )
}

export default Plants

