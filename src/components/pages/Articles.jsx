import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
// import CardCarousel from './CardCarousel';
import '../cards/Cards.css';

function Articles(){
    const [articles, setArticles] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const getArticles = async() => {
            await axios.get("http://localhost:5007/" + 'articles')
            .then(res => setArticles(res.data))
            .then(setLoading(false))
        }

       getArticles() 
    }, [])

    return( 
        <>
            {!loading ? 
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {articles.map(article => {
                            return <CardItem 
                            src='images/img-1.jpg'
                            text={article.description}
                            label={article.level}
                            path={'/articles/' + article._id}
                            />
                        })}
                    </ul>
                </div>
            </div>:<h3>Loading...</h3>   
            }
            <Footer />
        </>
    );    
}

export default Articles;