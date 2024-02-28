// this page will give the list of all the plants in the database, with overview card - plantCard Component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlantCard from '../components/PlantCard';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { plantList, plantSearch, userLikes } from '../services/PlantDetail';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Search from '@mui/icons-material/Search';
import Dropdown from 'react-bootstrap/Dropdown';
import { Height } from '@mui/icons-material';
import { height } from '@mui/system';

function Plants() {
  var startPage = 0
  const [endPage, setEndPage] = useState(0)
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(startPage)
  const [searchTerm, setSearchTerm] = useState('')
  const [cycleType, setCycleType] = useState()
  const [watering, setWatering] = useState()
  const [indoor, setIndoor] = useState()
  const [loading, setLoading] = useState(true)
  const [likes, setLikes] = useState([])
  // const [liked, setLiked] = useState(false)
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
    console.log('value is ', e.target.value)
    if (e.target.value === "indoor") { setIndoor(1) }//indoor outdoor
    else if (e.target.value === "outdoor") { setIndoor(0) }//indoor outdoor
    else { setIndoor() }
    // else { setIndoor() }
    setPage(0)
  }

  useEffect(() => {
    fetchLikes()
  }, [])

  const fetchLikes = async () => {
    await userLikes(localStorage.getItem('id'))
      .then(response => {
        // console.log('re for ',response.data['likes'])
        setLikes(response.data['likes'])
        console.log('likes', likes)
      })
      .catch()
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
            <Row className='justify-content-center z-10 w-100 position-fixed' style={{marginTop:'1rem'}}>
              <Col xs={6}>
                <Form inline className=''>
                  <InputGroup>
                    <Form.Control type="text" placeholder="Search" name='searchTerm' id='searchTerm' onChange={search} className=" mr-xs-2" />
                    {/* <Button type="submit" onClick={search}>Submit</Button> */}
                  </InputGroup>
                </Form>
              </Col>
              <Col xs={1} className='flex flex-col justify-content-around h-fit fixed-left'>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='px-2'>
                    <Dropdown onChange={wateringType}>
                      <h5>water</h5>
                      <Dropdown.Item>
                        <input type="radio" name="watering" id="frequent" value="frequent" checked={watering == 'frequent'} />
                        <label for="frequent">frequent</label>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <input type="radio" name="watering" id="average" value="average" checked={watering == 'average'} />
                        <label for="average">average</label>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <input type="radio" name="watering" id="minimum" value="minimum" checked={watering == 'minimum'} />
                        <label for="minimum">minimum</label>
                      </Dropdown.Item>
                    </Dropdown>
                    <Dropdown onChange={Indoor}>
                      <h5>Indoor/Outdoor</h5>
                      <Dropdown.Item>
                        <input type="radio" name="indoorOutdoor" id="indoor" value="indoor" checked={indoor == 1} />
                        <label for="indoor">indoor</label>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <input type="radio" name="indoorOutdoor" id="outdoor" value="outdoor" checked={indoor == 0} />
                        <label for="outdoor">outdoor</label>
                      </Dropdown.Item>
                    </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={5}>
                <div className='d-flex h-100 align-items-center '>
                  <span>Applied Filters : &nbsp; </span>
                  {watering || 'None'} , {indoor === 1 ? 'indoor' : (indoor === 0 ? 'outdoor' : 'none')}
                </div>
              </Col>
            </Row>
            <Row className='mb-20 bottom-0' style={{paddingTop:'4rem'}}>

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
                              <div>
                                {/* {setLiked(likes.find(item['id']) ? true : false)} */}
                                {/* {console.log(liked)} */}
                                {/* {console.log('liked or not ',likes.includes(item['id']))} */}
                                {/* {setLiked(likes.includes(item['id']))} */}
                                <PlantCard id={item['id']} name={item['name']} cycle={item['cycle']} watering={item['watering']} image={item['image']} liked={likes.includes(item['id'])}></PlantCard>
                              </div>
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
    </div >
  )
}

export default Plants

