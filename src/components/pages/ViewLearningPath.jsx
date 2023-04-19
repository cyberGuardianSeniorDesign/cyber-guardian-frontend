import React, { useEffect } from "react"
import axios from 'axios'
import { Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../Footer"

import CircularProgress from '@mui/material/CircularProgress';

export default function ViewLearningPath({dbPath})
{
    const navigate = useNavigate()
    const { state } = useLocation()
    const [loading, setLoading] = React.useState(true)
    const [path, setPath] = React.useState(dbPath)
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [level, setLevel] = React.useState('Apprentice')
    const [content, setContent] = React.useState([])
    const [description, setDescription] = React.useState('')
    React.useEffect(() => {
      const loadLearningPath = () => {
          if(state != undefined || null){
            console.log(state)
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
        setTimeout(() => setLoading(false), 500)
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem('state', JSON.stringify(path))
    }, [path])

    return<div>
      {!loading ? <div className='view-page'> 
        <h1 className='view-page-title'>{path.title}</h1>
        <p className="view-page-description">{path.description}</p>
        {content.map(data => {
            return <div className="learning-path-content-div">
                <h4 className="leaning-path-h4">{data.title}</h4>
                <img src={"https://storage.googleapis.com/cyber-guardian-images/" + data.thumbnail} alt={`${data.title} thumbnail`}/>
                <p className="learning-path-content-desc">{data.description}</p>
            </div>
        })}
      </div>: <div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>}
        <Footer/>
    </div>
}