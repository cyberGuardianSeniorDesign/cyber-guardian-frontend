import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import CardCarousel from './CardCarousel';
import '../cards/Cards.css';
import CircularProgress from '@mui/material/CircularProgress';

function Checklists(){
    const [checklists, setChecklists] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [levelFilter, setLevelFilter] = React.useState('Any')

    const handleFilterChange = (event) => {
        setLevelFilter(event.target.value)
    }
    React.useEffect(() => {
        const getChecklists = async() => {
            await axios.get(process.env.REACT_APP_BACKEND + 'checklists')
            .then(res => setChecklists(res.data))
            .then(setTimeout(() => setLoading(false), 500))
        }

       getChecklists() 
    }, [])

    return( 
        <>
        
        
            {!loading ? 
            <div >
                <h1 className='content-h1'>Checklists</h1>
                <p className='content-description'>Knowing what to do to keep you and your devices safe can be hard to keep track of. These checklists are made to outline the steps recommended to prevent yourself from being vulnerable to cyber attacks.</p>
                <FormControl sx={{ minWidth: 100, margin: '1em', marginLeft: '8em'}}>
                    <InputLabel id="demo-simple-select-label" >Level</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={levelFilter}
                    onChange={handleFilterChange}
                    autoWidth
                    label="Level"
                    >
                        <MenuItem value={'Any'}>Any</MenuItem>
                        <MenuItem value={'Novice'}>Novice</MenuItem>
                        <MenuItem value={'Apprentice'}>Apprentice</MenuItem>
                        <MenuItem value={'Expert'}>Expert</MenuItem>
                    </Select>
                </FormControl>
                    <div>
                    {levelFilter != 'Any' ? 
                        <div className='cards__items'> {checklists.filter(checklist => checklist.level == levelFilter).map(checklist => {
                            return <CardItem 
                            key={checklist._id}
                            src={checklist.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + checklist.thumbnail : 'images/img-3.jpg'}
                            text={checklist.title}
                            content={checklist}
                            label={checklist.level}
                            path={'/checklists/' + checklist._id}
                            />
                        })}

                        {checklists.filter(checklist => checklist.level == levelFilter).length == 0 ?
                        <h3 className='no-content-h3'>Sorry, no content of that level is currently available.</h3>: null}
                        </div>
                        :<div className='cards__items'>{checklists.map(checklist => {
                            return <CardItem 
                            key={checklist._id}
                            src={checklist.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + checklist.thumbnail : 'images/img-3.jpg'}
                            text={checklist.title}
                            content={checklist}
                            label={checklist.level}
                            path={'/checklists/' + checklist._id}
                            />
                        })}</div>}
                        
                    </div>
              
            </div>:<div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>   
            }
            <Footer />
        </>
    );    
}

export default Checklists;
