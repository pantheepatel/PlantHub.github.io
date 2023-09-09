// this component is to render all the details of plants in details to DetailsPage of plant
import React from 'react'
import { Link, json } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
function PlantDetail(props) {
  return (
    <div>
      <div className='my-2' key={props.id}>
        <Card>
          {/* <Card.Img variant="top" src={props.image['original_url']} /> */}
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <p>id :- {props.id}  </p>
              <p>name :- {props.name}  </p>
              <p>cycle :- {props.cycle}  </p>
              <p>watering :- {props.watering}  </p>
              <p>description :- {props.description}  </p>
              {/* <p>image :- {props.image['original_url']}  </p> */}
              <p>type :- {props.type}  </p>
              <p>flowers :- {props.flowers?'yes':'no'}  </p>
              <p>flowering_season :- {props.flowering_season}  </p>
              <p>fruit :- {props.fruit?'yes':'no'}  </p>
              <p>edible_fruit :- {props.edible_fruit?'yes':'no'}  </p>
              <p>growth_rate :- {props.growth_rate}  </p>
              <p>maintenance :- {props.maintenance}  </p>
              <p>medicinal :- {props.medicinal?'yes':'no'}  </p>
              <p>poisonous_to_humans :- {props.poisonous_to_humans?'yes':'no'}  </p>
              <p>poisonous_to_pets :- {props.poisonous_to_pets?'yes':'no'}  </p>
              <p>thorny :- {props.thorny?'yes':'no'}  </p>
              <p>indoor :- {props.indoor?'yes':'no'}  </p>
              <p>care_level :- {props.care_level}  </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default PlantDetail