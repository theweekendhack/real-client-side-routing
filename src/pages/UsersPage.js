import React from 'react'
import {useParams} from "react-router-dom"
const UsersPage = () => {

  const {username} = useParams(); // is always going to spit out an object!!!! {}

  console.log("Users Page Component has loaded");
  return (
    <div>
        <h1>{username}'s User Profile Page</h1>
        <p>
            blah blah balh 
        </p>
    </div>
  )
}

export default UsersPage