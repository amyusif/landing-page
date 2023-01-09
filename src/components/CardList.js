import React from 'react'
import Card from "./Card";

const CardList = ({robots}) => {
    const allCards = robots.map((items, index) => {
        return  <Card 
            claName="Card"
            key={index}
            name={robots[index].name}
            email={robots[index].email}
            id={robots[index].id}
          />
      });

      return allCards;
      

}

export default CardList;
