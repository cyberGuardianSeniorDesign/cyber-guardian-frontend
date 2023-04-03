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
            await axios.get("http://localhost:5007/" + 'articles')
            .then(res => setArticles(res.data))
            .then(setLoading(false))
        }

       getArticles() 
    }, [])

    return( 
        <>
            {!loading ? 
            
                <div>
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