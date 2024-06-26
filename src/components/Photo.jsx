import React from 'react';
// Photo function with photo pased for the src
const Photo = ({photo}) => {
    return (
        <li>
            <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} /> 
        </li>
    );
}


export default Photo;