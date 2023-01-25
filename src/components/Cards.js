import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>LEARNING PATHS</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-1.jpg'
                    text='For those who are unfamiliar with technology'
                    label='NOVICE'
                    path='/learning-paths'
                    />
                    <CardItem 
                    src='images/img-1.jpg'
                    text='For those who are familiar with technology'
                    label='APPRENTICE'
                    path='/learning-paths'
                    />
                    <CardItem 
                    src='images/img-1.jpg'
                    text='For those who are well-versed in technology'
                    label='EXPERT'
                    path='/learning-paths'
                    />
                </ul>
            </div>
        </div>
        <h1>ARTICLES</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-1.jpg'
                    text='Learn more about [insert topic]'
                    label='[Topic]'
                    path='/articles'
                    />
                    <CardItem 
                    src='images/img-1.jpg'
                    text='Learn more about [insert topic]'
                    label='[Topic]'
                    path='/articles'
                    />
                    <CardItem 
                    src='images/img-1.jpg'
                    text='Learn more about [insert topic]'
                    label='[TOPIC]'
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
                    src='images/img-1.jpg'
                    text='Can you spot all of the the fishy emails?'
                    label='GO PHISH'
                    path='/games'
                    />
                    <CardItem 
                    src='images/img-1.jpg'
                    text='A crossword with cyber awarenss terms!'
                    label='CROSSWORD'
                    path='/games'
                    />
                    <CardItem 
                    src='images/img-1.jpg'
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

export default Cards
