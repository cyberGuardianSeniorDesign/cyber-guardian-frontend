import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function GameCards() {
  return (
    <div className='cards'>
        <h1>GAMES</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItem 
                    src='images/img-2.png'
                    text='Can you spot all of the the fishy emails?'
                    label='GO PHISH'
                    path='/games'
                    />
                    <CardItem 
                    src='images/img-12.png'
                    text='A crossword with cyber awarenss terms!'
                    label='CROSSWORD'
                    path='/CrossWordPage'
                    />
                    <CardItem 
                    src='images/img-13.jpg'
                    text='Can you find all of the hidden words?'
                    label='WORD-SEARCH'
                    path='/games'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}


export default GameCards
