import React from 'react';

const Cart = ({selectedCountry}) => {
    const population = selectedCountry.reduce((sum , country)=> sum + country.population , 0);
    return (
        <div>
            
            <h5>Population : {population}</h5>

        </div>
    );
};

export default Cart;