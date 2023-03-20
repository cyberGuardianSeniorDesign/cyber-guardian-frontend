import React from 'react';
import CardItem from './CardItem';
// import CardCarousel from './CardCarousel';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>LEARNING PATHS</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <div className='cards__items'>
                    <CardItem 
                    src='images/img-novice.png'
                    text='For those who are unfamiliar with technology'
                    label='NOVICE'
                    path='/novicepage'
                    />
                    <CardItem 
                    src='images/img-apprentice.png'
                    text='For those who are familiar with technology'
                    label='APPRENTICE'
                    path='/apprenticepage'
                    />
                    <CardItem 
                    src='images/img-expert.png'
                    text='For those who are well-versed in technology'
                    label='EXPERT'
                    path='/expertpage'
                    />
                </div>
            </div>
        </div>
        <h1>ARTICLES</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-3.jpg'
                    text='Learn more about [insert topic]'
                    label='[Topic]'
                    path='/articles'
                    />
                    <CardItem
                    src='images/img-4.jpg'
                    text='Learn more about [insert topic]'
                    label='[Topic]'
                    path='/articles'
                    />
                    <CardItem
                    src='images/img-5.png'
                    text='Learn more about [insert topic]'
                    label='[Topic]'
                    path='/articles'
                    />
                </ul>
            </div>
        </div>
        <h1>GAMES</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-11.png'
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
                    src='images/img-13.jpg'
                    text='Can you find all of the hidden cyber words?'
                    label='WORD-SEARCH'
                    path='/wordsearch'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards