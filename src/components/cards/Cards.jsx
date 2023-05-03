import React from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import CircularProgress from '@mui/material/CircularProgress';
import './Cards.css';
import { Link } from 'react-router-dom';


function Cards() {
  const [loading, setLoading] = React.useState(true)
    const [learningPaths, setLearningPaths] = React.useState([])
    const [articles, setArticles] = React.useState([])
    const [checklistss, setChecklists] = React.useState([])
    const [games, setGames] = React.useState([])
    const [show, setShow] = React.useState(3)
    const getShow = () => {
      
    }
    React.useEffect(() => {
        const getContent = async() => {
            await axios.get(process.env.REACT_APP_BACKEND + 'content')
            .then(res => {
                console.log(res.data)
                setLearningPaths(res.data.learningPath)
                setArticles(res.data.articles)
                setChecklists(res.data.checklists)
                setGames(res.data.games)
            })
            .then(setLoading(false))
        }

       getContent() 
    }, [])

    React.useEffect(() => {
      const adjustShow = () => {
        if(window.matchMedia("(min-width: 1000px)").matches){
          setShow(3)
        }
        else if(window.matchMedia("(min-width: 600px)").matches){
          setShow(2)
        } 
        else{
          setShow(1)
        }
      }

      adjustShow()
    })
  return (
  <>
    {!loading ?
    <div className='cards' data-cy='cards'>
       
        <h1 className='home-content-h1'>Learning Paths</h1>
        
        <div className="carousel-div" > 
          <div className='cards-div'>
            {learningPaths.map(path => {
              return <CardItem 
              src={path.thumbnail ? "https://storage.googleapis.com/cyber-guardian-images/" + path.thumbnail : 'images/img-3.jpg'}
              key={path._id}
              content={path}
              text={path.title}
              label={path.level}
              path={'/learning-paths/' + path._id}
              />
            })} 
          </div>
        </div>
           
        <h1 className='home-content-h1'>Recent Articles</h1>
        <div className="carousel-div">
          <div className='cards-div'>
          {articles.slice(0,3).map(article => {
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
        
          <Link className="view-all-link" to="/articles">View All</Link>
        </div>
        <h1 className='home-content-h1'>Games</h1>
    
        <div className="carousel-div" >
          <div className='cards-div'>
            {games.map(game => {

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
            </div>
          <Link className="view-all-link" to="/games">View All</Link>
        </div>
    </div>
    : <div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>}
   </> 
  )
}

export default Cards