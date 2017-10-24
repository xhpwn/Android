import React, { Component } from 'react';
import { Button } from 'react-native';

const Buttons = (props) => {
  return (
  <Button
    title = {props.title}
    color='#0be06e'
  />
  );
};

export default Buttons;
