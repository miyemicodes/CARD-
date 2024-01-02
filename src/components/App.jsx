import React from "react";
import Card from "./Card";
import contacts from "../contact";
import Avatar from "./Avatar";

function createCard(){
  return <Card
  name = 
}

function App(){

  return(
    <div>
    <h1 className="heading">My Contacts</h1>

      <Avatar
        img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0E_rfKKnmx5XKLeXUQedv78iVCmpNGmwBiQ&usqp=CAU"
      />

       {contacts.map()}


{ /* 

      <Card 
       name = {contacts[0].name}
       img = {contacts[0].imgURL}
       tel = {contacts[0].phone}
       email = {contacts[0].email}
       />

      <Card
       name = {contacts[1].name}
       img = {contacts[1].imgURL}
       tel = {contacts[1].phone}
       email = {contacts[1].email}
      />

      <Card
       name = {contacts[2].name}
       img = {contacts[2].imgURL}
       tel = {contacts[2].phone}
       email = {contacts[2].email}
      /> 
*/ }


  </div>
  );
}


export default App;