import React, { useEffect } from "react"
import axios from 'axios'
import { Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../Footer"


export default function ViewArticle({dbArticle})
{
    const navigate = useNavigate()
    const { state } = useLocation()
    const [loading, setLoading] = React.useState(true)
    const [article, setArticle] = React.useState(dbArticle)
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [level, setLevel] = React.useState('Apprentice')
    const [content, setContent] = React.useState([])
    React.useEffect(() => {
      const loadArticle = () => {
          if(state != undefined || null){
              setArticle(state.content)
              setContent(state.content.content)
              setTitle(state.content.title)
              setAuthor(state.content.author)
              setLevel(state.content.level)
              window.localStorage.setItem('state', JSON.stringify(state.article))
          } else {
              const data = window.localStorage.getItem('state')
              if(data != undefined || null)
              {
                  //verifyToken(data._id)
                  setArticle(JSON.parse(data))

              } 
          }
      }

        loadArticle()
        setLoading(false)
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem('state', JSON.stringify(article))
    }, [article])

    return<div>
      {!loading ? <div className='view-page'> 
        <h1 className='view-page-title'>{article.title}</h1>
        {article.content.map(content => {
          if(content.contentType == 'text'){
            return <div key={content.index}>
              <h2 className='view-page-h2'>{content.header}</h2> 
              <p className="view-page-text">{content.text}</p>
            </div>
          } else {
            return  <div key={content.index} className="view-page-img-div">
            <h4 className="view-page-img-h4">{content.caption}</h4>
            <img className="view-page-img" src={"https://storage.googleapis.com/cyber-guardian-images/" + content.text} alt={content.caption}/>
            </div>
          }
        })}

      </div>: <h1>Loading...</h1>}
        <Footer/>
    </div>
}