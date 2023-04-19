import React, { useEffect } from "react"
import axios from 'axios'
import { Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../Footer"
import draftToHtml from 'draftjs-to-html';
//import { EditorState, convertToRaw, convertFromRaw, ContentState  } from "draft-js";
// import ReactHtmlParser from 'react-html-parser'; 
import parse from 'html-react-parser';
import CircularProgress from '@mui/material/CircularProgress';

export default function ViewArticle({dbArticle})
{
    const navigate = useNavigate()
    const { state } = useLocation()
    const [loading, setLoading] = React.useState(true)
    const [article, setArticle] = React.useState(dbArticle)
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [date, setDate] = React.useState(null)
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
              setDate(new Date(state.content.updatedAt))
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
        <div className="content-info">
          <p className="view-page-info">Written By {author}</p>
          <p className="view-page-info">Level: {level}</p>
          <p className="view-page-info">{date.getMonth()}/{date.getDate()}/{date.getFullYear()}</p>
        </div>
        {article.content.map(content => {
        if(content.contentType == 'text'){
          let html = draftToHtml(JSON.parse(content.raw))
          return <div className="article-text-content" key={content.index}>{parse(html)}</div>
        } else {
          return <div key={content.index} className="view-page-img-div">
            <h3 className="view-page-img-h3">{content.caption}</h3>
            <img className="view-page-img" src={"https://storage.googleapis.com/cyber-guardian-images/" + content.text} alt={content.caption}/>
            </div>
        }
      })}

      </div>: <div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>}
        <Footer/>
    </div>
}