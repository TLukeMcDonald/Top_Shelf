import React, { Component } from 'react';
import './../css/App.css';
import './../css/reset.css';
import SingleNav from './../components/SingleNav';
import 'font-awesome/css/font-awesome.min.css';

const BeerDetails = (props) => {
  console.log({'Beer details component loaded': {props}});

  return (
    <div className="beerForm">
      <br />

      <p>Name: {props.beer[5].name}  </p><br />
      <p>Brewery: {props.beer[5].brewery} </p><br />
      <p>Type: {props.beer[5].type.join(',')}  </p><br />
      <p>Description: {props.beer[5].description} </p><br />
      <p>some text  </p><br />


        <SingleNav  />
      </div>

  );
}

export default BeerDetails;
