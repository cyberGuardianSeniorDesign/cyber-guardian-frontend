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
                    src='images/img-20.jpg'
                    text='Can you spot all of the the fishy emails?'
                    label='GO PHISH'
                    path='/gophishpage'
                    />
                    
                    <CardItem 
                    src='images/img-12.png'
                    text='A crossword with cyber awarenss terms!'
                    label='CROSSWORD'
                    path='/crosswordpage'
                    />
                    <CardItem 
                    src='images/img-15.jpg'
                    text='Can you find all of the hidden words?'
                    label='WORD-SEARCH'
                    path='/wordsearch'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}


export default GameCards
