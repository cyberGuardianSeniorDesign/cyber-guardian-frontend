import axios from 'axios';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../cards/CardItem';
// import CardCarousel from './CardCarousel';
import '../cards/Cards.css';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../../node_modules/flexboxgrid/css/flexboxgrid.css'

function Articles(){
    const [articles, setArticles] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [levelFilter, setLevelFilter] = React.useState('Any')

    const handleFilterChange = (event) => {
        setLevelFilter(event.target.value)
    }

    React.useEffect(() => {
        const getArticles = async() => {
            await axios.get(process.env.REACT_APP_BACKEND + 'articles')
            .then(res => setArticles(res.data))
            .then(setTimeout(() => setLoading(false), 500))
        }

       getArticles() 
    }, [])

    return( 
        <>
            {!loading ? 
            
                <div>
                    <h1 className='content-h1'>Articles</h1>
                    <p className='content-description'>Read articles to learn about different cyber security concepts. Learn about how cyber security effects you, about different cyber attacks, and how to protect yourself.</p>
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
                             <MenuItem value={'Apprentice'}>Apprentice</MenuItem>
                             <MenuItem value={'Novice'}>Novice</MenuItem>
                             <MenuItem value={'Expert'}>Expert</MenuItem>
                         </Select>
                    </FormControl>
                    <div className='cards_items_wrapper'>
                    
                        {levelFilter != 'Any' ? 
                        <div className='cards__items'> {articles.filter(article=> article.level == levelFilter).map(article => {
                            return <CardItem 
                            src={article.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + article.thumbnail : 'images/img-3.jpg'}
                            key={article._id}
                            content={article}
                            text={article.title}
                            label={article.level}
                            path={'/articles/' + article._id}
                            />
                        })}

                            {articles.filter(article => article.level == levelFilter).length == 0 ?
                            <h3 className='no-content-h3'>Sorry, no content of that level is currently available.</h3>: null}
                        </div>
                        :<div className='cards__items'>{articles.map(article => {
                            return <CardItem 
                            src={article.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + article.thumbnail : 'images/img-3.jpg'}
                            key={article._id}
                            content={article}
                            text={article.title}
                            label={article.level}
                            path={'/articles/' + article._id}
                            />
                        })}</div>}
                    </div>
                
            </div>:<div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>   
            }
            <Footer />
        </>
    );    
}

export default Articles;