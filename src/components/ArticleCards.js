import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function ArticleCards() {
  return (
    <div className='cards'>
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
    </div>
  )
}

export default ArticleCards
