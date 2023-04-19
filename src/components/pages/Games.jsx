import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import axios from 'axios';
import CardItem from '../cards/CardItem';
import CircularProgress from '@mui/material/CircularProgress';

function Games(){
    const [loading, setLoading] = React.useState(true)
    const [games, setGames] = React.useState([])

    React.useEffect(() => {
        const getGames = async() => {
            await axios.get("games")
            .then(res => setGames(res.data))
            .then(setTimeout(() => setLoading(false), 500))
        }

        getGames()
    }, [])

    return( 
        <>
            { !loading ?
            <div>{games.map(game => {

                let gameParam = game.title.toLowerCase().replace(/\s+/g,"-");
                console.log(gameParam)
                return <CardItem 
                src={game.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + game.thumbnail : 'images/img-3.jpg'}
                key={game._id}
                content={game}
                text={game.title}
                path={'/games/' + gameParam}
                />
                })}
            </div>: <CircularProgress/>
            }
            <Footer />
        </>
    );    
}

export default Games;