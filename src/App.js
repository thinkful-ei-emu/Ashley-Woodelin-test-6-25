import React from 'react';
import './App.css';
import List from './list';


function App(props) {
  const allCards = props.allCards;
  console.log(allCards);
  //accepts store
  //store has lists: an array of objects, where each object has a list of card IDs to put in that list

  //allCards is an object, each key is an ID with a value being the card object

  //loop through the allCards object, and if the id matches our list, save that card to a new array

  
  
  const listElements = props.lists.map(list => {
    const cardsArr = [];
    const allCardsKeys = Object.keys(allCards);
    console.log(allCardsKeys);
    allCardsKeys.forEach(key =>{
      if (list.cardIds.includes(key)) {
        cardsArr.push(allCards[key]);
      }
    });

    return (
      <List key={list.id} header={list.header} cards={cardsArr} />
    );
  });

  //call List and give it a header and an array of cards


  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listElements}
      </div>
    </main>
  );
}

export default App;

