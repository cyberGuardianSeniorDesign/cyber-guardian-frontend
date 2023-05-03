import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
import '../cards/Cards.css';
import CircularProgress from '@mui/material/CircularProgress';

function LearningPaths(){
    const [learningPaths, setLearningPaths] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const getLearningPaths = async() => {
            await axios.get(process.env.REACT_APP_BACKEND + 'learning-paths')
            .then(res => setLearningPaths(res.data))
            .then(setTimeout(() => setLoading(false), 500))
        }

       getLearningPaths() 
    }, [])

    return( 
        <>
            {!loading ? 
            <div>
                <h1 className='content-h1'>Learning Paths</h1>
                <p className='content-description'>Not sure where to start in your journey to learn more about cybersecurity? Follow a learning path that matches your level of knowledge.</p>
                    <div className='cards__items'>
                        {learningPaths.map(learningPath => {
                            return <CardItem 
                            src={learningPath.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + learningPath.thumbnail : 'images/img-3.jpg'}
                            content={learningPath}
                            text={learningPath.title}
                            label={learningPath.level}
                            path={'/learning-paths/' + learningPath._id}
                            />
                        })}
                    </div>
            </div>
           :<div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>   
            }
            <Footer />
        </>
    );    
}

export default LearningPaths;