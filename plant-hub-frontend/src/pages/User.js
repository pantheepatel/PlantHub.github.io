import React from 'react'
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import LogIn from './LogIn';
import {auth, provider} from '../Config'; // fire base initailaization
// Import Firebase Authentication
// const auth = firebase.auth();
function User_() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id
    console.log('use params id is : ', params.id)
    return (
        <div>
            <div>
                {
                    (id == localStorage.getItem('id'))
                        ?
                        <Navigate to='/auth' />
                        :
                        <div>
                            other user
                            {
                                
                            }
                            {/* {console.log('name ',getUID)} */}
                            {/* {console.log(auth)} */}
                            {

                                // Retrieve a list of all users
                                // auth.listUsers().then((result) => {
                                //     result.users.forEach((userRecord) => {
                                //         console.log('User ID:', userRecord.uid);
                                //     });
                                // }).catch((error) => {
                                //     console.error('Error listing users:', error);
                                // })
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default User_