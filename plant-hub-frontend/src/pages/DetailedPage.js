// this page is for detailed view of some plant with id, PlantDetail - component
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { plantDataService } from '../services/PlantDetail';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import PlantDetail from '../components/PlantDetail';
function DetailedPage() {
    const [plantData, setPlantData] = useState('')
    // useParams to get the parameteres of url
    const params = useParams();
    console.log('use params id is : ', params.id)
    // when we get the data of specific id plant it will be set to plantData string
    useEffect(() => {
        // let loading=true;
        // api call with id in url
        plantDataService(params.id)
            .then(response => {
                // if(loading){
                // console.log(response.data['plantDetails'][0])
                setPlantData(response.data['plantDetails'][0]);
                // }
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
        // return()=> loading=false;
    }, []);
    // console.log('image in this : ',plantData['image'])
    // const image = plantData['image']
    // const dimg = image['original_url']
    // console.log(dimg)
    // const dimage=
    return (
        <div>
            {/* pass props here to PlantDetail component */}
            <div>
                {/* <Card>
        <Card.Img variant="top" src={plantData['image']['original_url']} />
        </Card> */}
                {/* 
                <p>id :- {plantData['id']}</p>
                <p>name :- {plantData['name']}</p>
                <p>cycle :- {plantData['cycle']}</p>
                <p>watering :- {plantData['watering']}</p>
                <p>description :- {plantData['description']}</p>
                <p>image :- {plantData['image']['original_url']}</p>
                <p>type :- {plantData['type']}</p>
                <p>flowers :- {plantData['flowers']}</p>
                <p>flowering_season :- {plantData['flowering_season']}</p>
                <p>fruit :- {plantData['fruit']}</p>
                <p>edible_fruit :- {plantData['edible_fruit']}</p>
                <p>growth_rate :- {plantData['growth_rate']}</p>
                <p>maintenance :- {plantData['maintenance']}</p>
                <p>medicinal :- {plantData['medicinal']}</p>
                <p>poisonous_to_humans :- {plantData['poisonous_to_humans']}</p>
                <p>poisonous_to_pets :- {plantData['poisonous_to_pets']}</p>
                <p>thorny :- {plantData['thorny']}</p>
                <p>indoor :- {plantData['indoor']}</p>
                <p>care_level :- {plantData['care_level']}</p>
                <p></p> 
                */}
                <Container>
                    <PlantDetail id={plantData['id']}
                        name={plantData['name']}
                        cycle={plantData['cycle']}
                        watering={plantData['watering']}
                        description={plantData['description']}
                        image={plantData['image']}
                        type={plantData['type']}
                        flowers={plantData['flowers']}
                        flowering_season={plantData['flowering_season']}
                        fruit={plantData['fruit']}
                        edible_fruit={plantData['edible_fruit']}
                        growth_rate={plantData['growth_rate']}
                        maintenance={plantData['maintenance']}
                        medicinal={plantData['medicinal']}
                        poisonous_to_humans={plantData['poisonous_to_humans']}
                        poisonous_to_pets={plantData['poisonous_to_pets']}
                        thorny={plantData['thorny']}
                        indoor={plantData['indoor']}
                        care_level={plantData['care_level']}></PlantDetail>
                </Container>
            </div>

        </div>
    )
}

export default DetailedPage