import React, { useEffect } from "react"
import axios from 'axios'
import { Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../Footer"

import CircularProgress from '@mui/material/CircularProgress';

export default function ViewArticle({dbPath})
{
    const navigate = useNavigate()
    const { state } = useLocation()
    const [loading, setLoading] = React.useState(true)
    const [path, setPath] = React.useState(dbPath)
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [level, setLevel] = React.useState('Apprentice')
    const [content, setContent] = React.useState([])
    React.useEffect(() => {
      const loadLearningPath = () => {
          if(state != undefined || null){
              setPath(state.content)
              setContent(state.content.content)
              setTitle(state.content.title)
              setAuthor(state.content.author)
              setLevel(state.content.level)
              window.localStorage.setItem('state', JSON.stringify(state.learningPath))
          } else {
              const data = window.localStorage.getItem('state')
              if(data != undefined || null)
              {
                  //verifyToken(data._id)
                  setPath(JSON.parse(data))

              } 
          }
      }

        loadLearningPath()
        setLoading(false)
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem('state', JSON.stringify(path))
    }, [path])

    return<div>
      {!loading ? <div className='view-page'> 
        <h1 className='view-page-title'>{path.title}</h1>
        
      </div>: <div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>}
        <Footer/>
    </div>
}