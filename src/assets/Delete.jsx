import React from 'react'
import  deletepng  from './delete.png';
function Delete(props) {
  return (
    <img src={deletepng} alt="deleteimage" style={
    {
      width: '25px',
    }
    }/>
  );
}

export default Delete;
