import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  const getColorList = () => {
    axiosWithAuth()
      .get('api/colors')
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log(err));
  };

  
  useEffect(() => {
    getColorList();
  }, [props]);

  
  
  return (
    <>
      <ColorList props={props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
