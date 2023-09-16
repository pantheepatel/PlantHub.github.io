import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'react-bootstrap';


function PlantCare() {
  // const details={
  //   category:[],
  //   description:[],
  //   tips:{
  //     tip1:[],
  //     tip2:[],
  //     tip3:[]
  //   }
  // }
  // const details = {
  //   category: ['Watering Wisdom', 'Light and Sunshine', 'Soil and Potting Perfection', 'Fertilizing Fundamentals', 'Pruning and Maintenance Mastery', 'Pest and Disease Defense', 'Seasonal Care Strategies'],
  //   description: [
  //     '"Watering Wisdom" is your ultimate guide to mastering the art of watering your plants effectively. In this category, we will delve into the nuances of providing the right amount of moisture to keep your plants thriving. Discover tips on determining the ideal watering frequency for different plant types, using the finger test to check soil moisture, and selecting the right water for your plants. Avoid common watering mistakes, such as overwatering or underwatering, and ensure that your plants receive the hydration they need for vibrant growth.',
  //     '"Light and Sunshine" sheds light on the vital role that light plays in the lives of your plants. In this category, we explore the different light requirements of various plant species and provide solutions for optimizing their exposure to light. Learn how to match light levels to your plants preferences, where to place plants for the best light, and how to care for low-light-loving plants. With the right light, you will nurture lush and healthy indoor greenery.',
  //     '"Soil and Potting Perfection" delves into the foundation of plant care—the soil. In this category, we will guide you in selecting the right soil for your plants, understanding when to repot, and choosing the perfect pot or container. Explore the importance of well-draining soil, repotting to prevent root-bound growth, and the significance of pots with proper drainage. With the right soil and potting practices, you will provide a nurturing environment for your green companions.',
  //     '"Fertilizing Fundamentals" unlocks the secrets of plant nourishment. In this category, we will demystify fertilizers, explaining their role in plant growth, the different types available, and when and how to apply them. Discover a recommended fertilization schedule for various plant types, and learn to recognize signs of nutrient deficiencies. With proper fertilization, you will provide your plants with the essential nutrients they crave for robust health.',
  //     '"Pruning and Maintenance Mastery" is your guide to shaping and nurturing your plants. In this category, we explore the benefits of regular pruning, explain when and how to trim effectively, and share insights into maintaining a clean and healthy plant environment. Discover the transformative power of pruning, the art of deadheading for continuous blooms, and the importance of keeping your plants free from dust and debris. With expert maintenance, you will promote vigorous and vibrant growth.',
  //     '"Pest and Disease Defense" equips you with the tools and knowledge to protect your plants from common threats. In this category, we will help you identify notorious plant pests, understand their signs of infestation, and explore natural methods for effective pest control. Learn to recognize signs of diseases and implement preventive strategies. With the right defenses, you will maintain your plants health and vitality.',
  //     '"Seasonal Care Strategies" is your compass for adapting plant care to the changing seasons. In this category, we will guide you through caring for your plants during winter, including indoor heating considerations. We will also help you prepare for spring growth spurt with tips on pruning and inspection. Whether it is navigating winter chill or embracing spring warmth, our seasonal strategies will empower you to provide optimal care for your plants year-round.',
  //   ],
  //   tips: {
  //     tip1: [
  //       'Water your plants thoroughly but ensure proper drainage to prevent root rot.',
  //       'Understand the different light levels, from low to bright indirect light.',
  //       'Choose well-draining soil tailored to your plant needs (e.g., cactus mix, potting mix).',
  //       'Understand the purpose of fertilizers and their impact on plant growth.',
  //       'Prune to remove dead or damaged growth and encourage new shoots.',
  //       'Inspect your plants regularly for signs of pests like aphids and spider mites.',
  //       'Adjust watering and humidity levels to accommodate indoor heating during winter.',
  //     ],
  //     tip2: [
  //       'Adjust your watering schedule based on the season and plant type.',
  //       'Rotate your plants regularly to ensure even light exposure.',
  //       'Repot when the plant becomes root-bound or outgrows its current container.',
  //       'Follow package instructions for fertilizer dosage and application.',
  //       'Deadhead spent flowers to stimulate additional blooms.',
  //       'Use natural remedies like neem oil or insecticidal soap to control common pests.',
  //       'Prune and inspect your plants in spring to encourage healthy growth.',
  //     ],
  //     tip3: [
  //       'Use a saucer or tray to catch excess water and prevent damage to surfaces.',
  //       'Use sheer curtains or blinds to filter direct sunlight and prevent leaf burn.',
  //       'Ensure your pots have drainage holes to prevent waterlogged soil.',
  //       'Observe your plants for signs of nutrient deficiencies (e.g., yellowing leaves) and address them promptly.',
  //       'Use a damp cloth to gently clean plant leaves and improve photosynthesis.',
  //       'Prevent disease by avoiding overwatering and providing proper air circulation.',
  //       'Consider repotting in early spring if necessary, before the growing season begins.',
  //     ],
  //   }
  // }

  const details = [
    {
      category: 'Watering Wisdom',
      description: '"Watering Wisdom" is your ultimate guide to mastering the art of watering your plants effectively. In this category, we will delve into the nuances of providing the right amount of moisture to keep your plants thriving. Discover tips on determining the ideal watering frequency for different plant types, using the finger test to check soil moisture, and selecting the right water for your plants. Avoid common watering mistakes, such as overwatering or underwatering, and ensure that your plants receive the hydration they need for vibrant growth.',
      url: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      tips: [
        'Water your plants thoroughly but ensure proper drainage to prevent root rot.',
        'Adjust your watering schedule based on the season and plant type.',
        'Use a saucer or tray to catch excess water and prevent damage to surfaces.'],
    },
    {
      category: 'Light and Sunshine',
      description: '"Light and Sunshine" sheds light on the vital role that light plays in the lives of your plants. In this category, we explore the different light requirements of various plant species and provide solutions for optimizing their exposure to light. Learn how to match light levels to your plants preferences, where to place plants for the best light, and how to care for low-light-loving plants. With the right light, you will nurture lush and healthy indoor greenery.',
      url: 'https://img.freepik.com/premium-photo/ficus-lyrata-plant-terracotta-pot-sale-flower-shop-home-apartment-sun-light_165285-3893.jpg',
      tips: [
        'Understand the different light levels, from low to bright indirect light.',
        'Rotate your plants regularly to ensure even light exposure.',
        'Use sheer curtains or blinds to filter direct sunlight and prevent leaf burn.'],
    },
    {
      category: 'Soil and Potting Perfection',
      description: '"Soil and Potting Perfection" delves into the foundation of plant care—the soil. In this category, we will guide you in selecting the right soil for your plants, understanding when to repot, and choosing the perfect pot or container. Explore the importance of well-draining soil, repotting to prevent root-bound growth, and the significance of pots with proper drainage. With the right soil and potting practices, you will provide a nurturing environment for your green companions.',
      url: 'https://media.istockphoto.com/id/1140967918/photo/close-up-shot-of-hands-working-with-soil.jpg?s=612x612&w=0&k=20&c=ijvbZCYkOphdAzDMVgF2YKWkb9pBagLAnHVRSFcCYEM=',
      tips: [
        'Choose well-draining soil tailored to your plant needs (e.g., cactus mix, potting mix).',
        'Repot when the plant becomes root-bound or outgrows its current container.',
        'Ensure your pots have drainage holes to prevent waterlogged soil.'],
    },
    {
      category: 'Fertilizing Fundamentals',
      description: '"Fertilizing Fundamentals" unlocks the secrets of plant nourishment. In this category, we will demystify fertilizers, explaining their role in plant growth, the different types available, and when and how to apply them. Discover a recommended fertilization schedule for various plant types, and learn to recognize signs of nutrient deficiencies. With proper fertilization, you will provide your plants with the essential nutrients they crave for robust health.',
      url: 'https://www.optimistdaily.com/wp-content/uploads/shutterstock_1433776325-e1622483273430.jpg',
      tips: [
        'Understand the purpose of fertilizers and their impact on plant growth.',
        'Follow package instructions for fertilizer dosage and application.',
        'Observe your plants for signs of nutrient deficiencies (e.g., yellowing leaves) and address them promptly.'],
    },
    {
      category: 'Pruning and Maintenance Mastery',
      description: '"Pruning and Maintenance Mastery" is your guide to shaping and nurturing your plants. In this category, we explore the benefits of regular pruning, explain when and how to trim effectively, and share insights into maintaining a clean and healthy plant environment. Discover the transformative power of pruning, the art of deadheading for continuous blooms, and the importance of keeping your plants free from dust and debris. With expert maintenance, you will promote vigorous and vibrant growth.',
      url: 'https://imgcdn.floweraura.com/types-of-indoor-plant-types-cover-image.jpg',
      tips: [
        'Prune to remove dead or damaged growth and encourage new shoots.',
        'Deadhead spent flowers to stimulate additional blooms.',
        'Use a damp cloth to gently clean plant leaves and improve photosynthesis.'],
    },
    {
      category: 'Pest and Disease Defense',
      description: '"Pest and Disease Defense" equips you with the tools and knowledge to protect your plants from common threats. In this category, we will help you identify notorious plant pests, understand their signs of infestation, and explore natural methods for effective pest control. Learn to recognize signs of diseases and implement preventive strategies. With the right defenses, you will maintain your plants health and vitality.',
      url: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/8/13/1/Original_ShainRievley_CommonGardenMistakes-sparying-squash-plant_step2h.jpg.rend.hgtvcom.616.462.suffix/1597343721000.jpeg',
      tips: [
        'Inspect your plants regularly for signs of pests like aphids and spider mites.',
        'Use natural remedies like neem oil or insecticidal soap to control common pests.',
        'Prevent disease by avoiding overwatering and providing proper air circulation.'],
    },
    {
      category: 'Seasonal Care Strategies',
      description: '"Seasonal Care Strategies" is your compass for adapting plant care to the changing seasons. In this category, we will guide you through caring for your plants during winter, including indoor heating considerations. We will also help you prepare for spring growth spurt with tips on pruning and inspection. Whether it is navigating winter chill or embracing spring warmth, our seasonal strategies will empower you to provide optimal care for your plants year-round.',
      url: 'https://media.istockphoto.com/id/1305447687/photo/taking-care-of-my-plants.jpg?s=612x612&w=0&k=20&c=lQOkTw-88-RLB2nn5VhnsMPipuAemxw4KWaIPhJaA34=',
      tips: [
        'Adjust watering and humidity levels to accommodate indoor heating during winter.',
        'Prune and inspect your plants in spring to encourage healthy growth.',
        'Consider repotting in early spring if necessary, before the growing season begins.'],
    },
  ]

  const [key, setKey] = useState(details[0]['category']);
  // var keyCount = 0
  return (
    <div>
      <Container className='justify-content-evenly'>
        {/* {console.log(details[0]['category'])} */}

        <Tab.Container activeKey={key} id="left-tabs-example" defaultActiveKey={details[0]['category']}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" onSelect={(k) => setKey(k)} className="flex-column">
                {
                  details.map((detailObj) => {
                    return (
                      <Nav.Item>
                        <Nav.Link eventKey={detailObj.category} >{detailObj.category}</Nav.Link>
                      </Nav.Item>
                    )
                  })
                }
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {
                  <Tab.Pane eventKey={key}>
                    {
                      details.map((detailObj, i) => {
                        if (detailObj.category == key) {
                          return (
                            <Row>
                              <Col sm={6}>
                                <p>
                                  {detailObj.description}
                                </p>
                                <p>Tips:</p>
                                {
                                  detailObj.tips.map((tip) => {
                                    return (
                                      <li>{tip}</li>
                                    )
                                  })
                                }
                              </Col>
                              <Col sm={6}>
                                {console.log(detailObj.url)}
                                <img src={detailObj.url} alt={key} className='h-100 w-100 object-cover' style={{maxHeight:'40rem'}} />
                              </Col>
                            </Row>
                          )
                        }
                      })
                    }
                  </Tab.Pane>
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* {
          details.map((detailObj,i) => {
            // console.log(details[i].category)
            return (
              <Tab.Container id="left-tabs-example" defaultActiveKey='m'>
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" activeKey={key} onSelect={(k) => setKey(k)} className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey={key}>{details[i].category}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey={key}>
                        {details[i].description}
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            )
          })
        } */}
        {/* <Tab.Container activeKey={key} onSelect={(k) => setKey(k)} defaultActiveKey="first">
        
          <Row>
            <Col sm={4}>
              <Nav variant="pills" className="flex-column">
                {
                  details.category.map((key) => {
                    // console.log('key is : ',key)
                    return (<div>
                      <Nav.Item>
                        <Nav.Link eventKey={key}>{key}</Nav.Link>
                      </Nav.Item>
                    </div>)
                  })
                }
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
          
                            // <div>
                            //   <p>
                            //     {detailObj.description}
                            //   </p>
                            //   <p>Tips:</p>
                            //   {
                            //     detailObj.tips.map((tip) => {
                            //       return (
                            //         <li>{tip}</li>
                            //       )
                            //     })
                            //   }
                            // </div>
        </Tab.Container> */}
        
      </Container>
    </div>
  )
}

export default PlantCare