import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
// import CardCarousel from './CardCarousel';
import '../cards/Cards.css';

function LearningPaths(){
    const [learningPaths, setLearningPaths] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const getLearningPaths = async() => {
            await axios.get("http://localhost:5007/" + 'learning-paths')
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
           :<h3>Loading...</h3>   
            }
            <Footer />
        </>
    );    
}

export default LearningPaths;