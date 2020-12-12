import React from 'react'
import kolkata from "../../assets/kolkata.png";
import bangalore from "../../assets/bangalore.jpg";

const LocationContent = ({setLocationVisibility}) => {
    return (
        <div className="location-content">
            <h3>Select your City</h3>
            <div className="location-button">
                <div>
                    <img src={kolkata} alt="img" onClick={()=>setLocationVisibility(false)} />
                    <h6>Kolkata</h6>
                </div>
                <div>
                    <img src={bangalore} alt="img" onClick={()=>setLocationVisibility(false)}/>
                    <h6>Bangalore</h6>
                </div>
            </div>
        </div>
    )
}

export default LocationContent
