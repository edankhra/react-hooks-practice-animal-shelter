import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { id, name, type, age, weight, gender, isAdopted } = pet;

  const handleAdoptClick = () => {
    if (!isAdopted) {
      onAdoptPet(id);
    }
  };

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          PET NAME: {name}
        </span>
        <div className="meta">
          <span className="date">PET TYPE: {type}</span>
        </div>
        <div className="description">
          <p> PET AGE: {age}</p>
          <p> PET WEIGHT : {weight}</p>
          <p>Gender: {gender === 'male' ? '♂' : '♀'}</p>
        </div>
        
      </div>
      <div className="extra content">
        {isAdopted ? (
        <button className="ui disabled button">Already adopted</button> ) : (
        <button className="ui primary button" onClick={handleAdoptClick}>Adopt pet</button>)}
      </div>
    </div>
  );
}

export default Pet;