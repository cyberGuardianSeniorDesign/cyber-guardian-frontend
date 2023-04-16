import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
// import CardCarousel from './CardCarousel';
import '../cards/Cards.css';
import CircularProgress from '@mui/material/CircularProgress';

function LearningPaths(){
    const [learningPaths, setLearningPaths] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const getLearningPaths = async() => {
            await axios.get(process.env.REACT_APP_BACKEND + 'learning-paths')
            .then(res => setLearningPaths(res.data))
            .then(setLoading(false))
        }

       getLearningPaths() 
    }, [])

    return( 
        <>
            {!loading ? 
                    <div className='cards__items'>
                        {learningPaths.map(learningPath => {
                            return <CardItem 
                            src='images/img-3.jpg'
                            text={learningPath.title}
                            label={learningPath.level}
                            path={'/learning-paths/' + learningPath._id}
                            />
                        })}
                    </div>
           :<div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>   
            }
            <Footer />
        </>
    );    
}

export default LearningPaths;