// this component is to render all the details of plants in details to DetailsPage of plant
import React from 'react'
import { Link, json, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function PlantDetail(props) {
  
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  return (
    <div>
      <div className='my-2' key={props.id}>
        <button onClick={goBack}><KeyboardBackspaceIcon/>back</button>
        <Card>
          {/* {console.log('into plant detail file: ',props.image.original_url)} */}
          {/* <Card.Img variant="top" src={props.image.original_url} /> */}
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