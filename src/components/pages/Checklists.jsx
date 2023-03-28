import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
// import CardCarousel from './CardCarousel';
import '../cards/Cards.css';

function Checklists(){
    const [checklists, setChecklists] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const getChecklists = async() => {
            await axios.get("http://localhost:5007/" + 'checklists')
            .then(res => setChecklists(res.data))
            .then(setLoading(false))
        }

       getChecklists() 
    }, [])

    return( 
        <>
            {!loading ? 
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        {checklists.map(checklist => {
                            return <CardItem 
                            key={checklist._id}
                            src={checklist.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + checklist.thumbnail : 'images/img-3.jpg'}
                            text={checklist.title}
                            content={checklist}
                            label={checklist.level}
                            path={'/checklists/' + checklist._id}
                            />
                        })}
                    </div>
                </div>
            </div>:<h3>Loading...</h3>   
            }
            <Footer />
        </>
    );    
}

export default Checklists;