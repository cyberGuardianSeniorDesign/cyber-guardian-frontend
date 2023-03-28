import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
  return (
    <>
        <div className='cards_item'>
            <Link className='cards__item__link' to={props.path} state={{content: props.content}}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img 
                    alt='Expected Img'
                    className='cards__item__img'
                    src={props.src} />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>
        </div>
    </>
  )
}

export default CardItem