// this page is for detailed view of some plant with id, PlantDetail - component
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { plantDataService } from '../services/PlantDetail';
function DetailedPage() {
    const [plantData, setPlantData] = useState('')
    // useParams to get the parameteres of url
    const params = useParams();
    // when we get the data of specific id plant it will be set to plantData string
    useEffect(() => {
        // api call with id in url
        plantDataService(params.id)
            .then(response => {
                console.log(response.data['plantDetails'][0])
                setPlantData(response.data['plantDetails'][0]);
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
    }, []);

    return (
        <div>
            {/* pass props here to PlantDetail component */}
            <div>
                <p>id :- {plantData['id']}</p>
                <p>name :- {plantData['name']}</p>
                <p>cycle :- {plantData['cycle']}</p>
                <p>watering :- {plantData['watering']}</p>
                <p>description :- {plantData['description']}</p>
                <p>image :- {plantData['image']}</p>
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

            </div>

        </div>
    )
}

export default DetailedPage