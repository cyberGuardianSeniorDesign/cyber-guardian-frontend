import React from 'react';
import {Link} from 'react-router-dom'
import ReactCardCarousel from 'react-card-carousel';


function CardCarousel(props){
    return (
        <>
            <li className='cards_item'>
                <ReactCardCarousel>
                <Link className='cards__item__link' to={props.path}>
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
                </ReactCardCarousel>
            </li>
        </>
      )
  }

export default CardCarousel;