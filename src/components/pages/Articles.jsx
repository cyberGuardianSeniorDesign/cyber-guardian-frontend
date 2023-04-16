import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
// import CardCarousel from './CardCarousel';
import '../cards/Cards.css';
import CircularProgress from '@mui/material/CircularProgress';

function Articles(){
    const [articles, setArticles] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const getArticles = async() => {
            await axios.get(process.env.REACT_APP_BACKEND + 'articles')
            .then(res => setArticles(res.data))
            .then(setLoading(false))
        }

       getArticles() 
    }, [])

    return( 
        <>
            {!loading ? 
            
                <div>
                    <h1 className='content-h1'>Articles</h1>
                    <p className='content-description'>Read articles to learn about different cyber security concepts. Learn about how cyber security effects you, about different cyber attacks, and how to protect yourself.</p>
                    <div className='cards__items'>
                        {articles.map(article => {
                            return <CardItem 
                            src={article.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + article.thumbnail : 'images/img-3.jpg'}
                            key={article._id}
                            content={article}
                            text={article.title}
                            label={article.level}
                            path={'/articles/' + article._id}
                            />
                        })}
                    </div>
                
            </div>:<div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>   
            }
            <Footer />
        </>
    );    
}

export default Articles;