// this page will give the list of all the plants in the database, with overview card - plantCard Component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlantCard from '../components/PlantCard';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { plantList, plantSearch } from '../services/PlantDetail';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Search from '@mui/icons-material/Search';
import Dropdown from 'react-bootstrap/Dropdown';

function Plants() {
  var startPage = 0, indoor_ = 0
  const [endPage, setEndPage] = useState(0)
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(startPage)
  const [searchTerm, setSearchTerm] = useState('')
  const [cycleType, setCycleType] = useState()
  const [watering, setWatering] = useState()
  const [indoor, setIndoor] = useState(indoor_)
  const [loading, setLoading] = useState(true)

  const prev = () => {
    if (page > startPage) {
      setPage(page - 1);
    }
  };
  const next = () => {
    if (page < endPage - 1) {
      setPage(page + 1);
    }
  };

  const search = (e) => {
    setSearchTerm(e.target.value)
    setPage(0)
  }

  const cycletype = (e) => {
    setCycleType(e.target.value)
    setPage(0)
  }

  const wateringType = (e) => {
    setWatering(e.target.value)
    setPage(0)
  }

  const Indoor = (e) => {
    // console.log(e.target.value=='indoor')
    if (e.target.value === "indoor") { setIndoor(1) }//indoor outdoor
    else { setIndoor(0) }
    // else { setIndoor() }
    setPage(0)
  }

  useEffect(() => {
    fetchData()
  }, [page, searchTerm, watering, indoor]);

  const fetchData = async () => {
    plantList(page, searchTerm, watering, indoor)
      .then(response => {
        setPage(page)
        console.log('response is : ', response.data['plantList'])
        console.log('response length : ', parseInt((response.data['plantDataLength'] / 30)))
        // var endPage = parseInt((response.data['plantDataLength'] / 30) + 1)
        setEndPage(parseInt((response.data['plantDataLength'] / 30) + 1))
        setPlants(response.data['plantList'])
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message);
        console.log(err)
      });
  }

  return (
    <div>
      {
        loading ? <div>loading</div> :
          <Container className='gap-5'>
            <Row className='justify-content-center fixed mb-10 bg-white p-1 w-full z-10'>
              <Col xs={6}>
                <Form inline className=''>
                  <InputGroup>
                    <Form.Control type="text" placeholder="Search" name='searchTerm' id='searchTerm' onChange={search} className=" mr-xs-2" />
                    {/* <Button type="submit" onClick={search}>Submit</Button> */}
                  </InputGroup>
                </Form>
              </Col>
              <Col xs={6} className='flex flex-col justify-content-around h-fit fixed-left'>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='px-2'>
                    {/* <Dropdown.Item> */}
                    <Dropdown onChange={wateringType}>
                      <h5>water</h5>
                      <Dropdown.Item>
                        <input type="radio" name="watering" id="frequent" value="frequent" />
                        <label htmlFor="frequent">frequent</label>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <input type="radio" name="watering" id="average" value="average" />
                        <label htmlFor="average">average</label>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <input type="radio" name="watering" id="minimum" value="minimum" />
                        <label htmlFor="minimum">minimum</label>
                      </Dropdown.Item>
                    </Dropdown>
                    {/* </Dropdown.Item>
              <Dropdown.Item> */}
                    <Dropdown onChange={Indoor}>
                      <h5>Indoor/Outdoor</h5>
                      <Dropdown.Item>
                        <input type="radio" name="indoorOutdoor" id="indoor" value="indoor" />
                        <label htmlFor="indoor">indoor</label>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <input type="radio" name="indoorOutdoor" id="outdoor" value="outdoor" />
                        <label htmlFor="outdoor">outdoor</label>
                      </Dropdown.Item>
                    </Dropdown>
                    {/* </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
                {/* <h3>Filter</h3>
          <p onChange={wateringType}>
            <h5>Watering</h5>
            <div>
              <input type="radio" name="watering" id="frequent" value="frequent" />
              <label htmlFor="frequent">frequent</label>
            </div>
            <div>
              <input type="radio" name="watering" id="average" value="average" />
              <label htmlFor="average">average</label>
            </div>
            <div>
              <input type="radio" name="watering" id="minimum" value="minimum" />
              <label htmlFor="minimum">minimum</label>
            </div>
          </p>
          <p onChange={Indoor}>
            <h5>Indoor/Outdoor</h5>
            <div>
              <input type="radio" name="indoorOutdoor" id="indoor" value="indoor" />
              <label htmlFor="indoor">indoor</label>
            </div>
            <div>
              <input type="radio" name="indoorOutdoor" id="outdoor" value="outdoor" />
              <label htmlFor="outdoor">outdoor</label>
            </div>
          </p> */}
                {/* <h6>Sort</h6> */}
              </Col>
            </Row>
            <Row className='pt-12 mb-20'>

              <Col sm={12}>
                <div className=' flex justify-content-around fixed-bottom strip-color p-2.5 pt-3 z-1'>
                  <button className={page == startPage ? 'btn bg-secondary text-white' : 'btn bg-primary text-white'} onClick={prev}><ArrowCircleLeftIcon className='mr-2' /> Previous</button>
                  <span>Total results on this page are {plants.length} and Page is {page + 1}, total page {endPage}</span>
                  <button className={page == (endPage - 1) ? 'btn bg-secondary text-white' : 'btn bg-primary text-white'} onClick={next}>Next<ArrowCircleRightIcon className='ml-2' /> </button>
                </div>
                {console.log('plants', plants)}
                {
                  plants.length > 0 ?
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
                    :
                    <div className='text-danger p-5 display-2 align-center justify-center ml-32'>
                      no data available
                    </div>
                }
              </Col>
            </Row>
          </Container>
      }
    </div>
  )
}

export default Plants

