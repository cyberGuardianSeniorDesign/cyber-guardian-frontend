import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
// import CardCarousel from './CardCarousel';
import '../cards/Cards.css';
import CircularProgress from '@mui/material/CircularProgress';

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
        <h1 className='content-h1'>Checklists</h1>
        <p className='content-description'>Knowing what to do to keep you and your devices safe can be hard to keep track of. These checklists are made to outline the steps recommended to prevent yourself from being vulnerable to cyber attacks.</p>
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
            </div>:<div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>   
            }
            <Footer />
        </>
    );    
}

export default Checklists;