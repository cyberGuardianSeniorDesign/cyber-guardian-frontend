import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function LearningPathCards() {
  return (
    <div className='cards'>
        <h1>LEARNING PATHS</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-novice.png'
                    text='For those who are unfamiliar with technology'
                    label='NOVICE'
                    path='/NovicePage'
                    />
                    <CardItem 
                    src='images/img-apprentice.png'
                    text='For those who are familiar with technology'
                    label='APPRENTICE'
                    path='/ApprenticePage'
                    />
                    <CardItem 
                    src='images/img-expert.png'
                    text='For those who are well-versed in technology'
                    label='EXPERT'
                    path='/ExpertPage'
                    
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default LearningPathCards