import React from 'react';
import '../../App.css';
import axios from 'axios';
import Menu from '../Games/WordSearch/Menu/Menu.js';
import Grid from '../Games/WordSearch/Grid/Grid.js';
import WordList from '../Games/WordSearch/WordList/WordList.js';
import Footer from '../Footer.jsx';
import CircularProgress from '@mui/material/CircularProgress';

function WordSearch(){
    const [loading, setLoading] = React.useState(true)
    const [games, setGames] = React.useState([])

    React.useEffect(() => {
        const getGames = async() => {
            await axios.get(process.env.REACT_APP_BACKEND + "games")
            .then(res => setGames(res.data))
            .then(setTimeout(() => setLoading(false), 500))
        }

        getGames()
    }, [])

    return( 
        <>
        {!loading ? 
        <>
        {games.filter(game => game.title == 'Word Search')[0].running ?
                <div>
                    <p style={{
                    fontSize: "1.5rem" ,
                    textAlign: "center",
                    padding: "10px",
                    margin: "10px",
                    backgroundColor: "#ffde00",
                    display: "inline-block",
                    fontFamily: "monospace"
                    }}>Instructions: Search for the hidden cyber awareness terms. Click the first letter of a word and then the last letter to cross them out.</p>
                    <Menu />
                    <div className='grid-div'>
                    <Grid style={{
                    fontSize: "1.5rem" ,
                    padding: "10px",
                    margin: "10px",
                    backgroundColor: "#ffde00",
                    display: "inline-block",
                    fontFamily: "monospace"
                    }}/>
                    
                    <WordList />
                    </div>
                    <Footer />
                </div>:<h3 className='no-content-h3'>Paige Not Available</h3>} 
            </>: <div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>}
        </>
    );
}
export default WordSearch;
