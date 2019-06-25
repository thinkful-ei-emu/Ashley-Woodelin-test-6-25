import React from 'react';
import Card from './card';

//map through array of cards 

export default class List extends React.Component {
  render() {
    const arr = this.props.cards;
    const elementsArray = arr.map(card => {
      return <Card key={card.id} title={card.title} content={card.content} />
    });
    
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {elementsArray}
        </div>
      </section>
    );
  }
}


