import React from 'react';

const Country = ({country , handleAddCountry}) => {
    const {name , population , flag , region} = country;
    const flagStyle = {height : "40px"}
    return (
        <div style={{border:'1px solid green' , margin:'10px' , padding:'10px'}}>
            <h4>This is {name}</h4>
            <img src={flag} style={flagStyle} alt=""/>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <button onClick={()=> handleAddCountry(country)}>Add Population</button>
        </div>
    );
};

export default Country;