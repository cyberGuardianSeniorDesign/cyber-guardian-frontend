import React, { useEffect } from "react"
import axios from 'axios'
import { Typography } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Footer from "../Footer"
import CircularProgress from '@mui/material/CircularProgress';


export default function ViewChecklist({dbChecklist})
{
    const navigate = useNavigate()
    const { state } = useLocation()
    const [loading, setLoading] = React.useState(true)
    const [checklist, setChecklist] = React.useState(dbChecklist)
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [level, setLevel] = React.useState('Apprentice')
    const [desc, setDesc] = React.useState('')
    const [listItems, setListItems] = React.useState([{index: 0, contentType: 'text', text: ''}])
    const [checked, setChecked] = React.useState([0]);

    function printPageArea(areaID){
      var printContent = document.getElementById(areaID).innerHTML;
      var originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
  }
    React.useEffect(() => {
      const verifyToken = async() => {
              fetch(process.env.BACKEND + "isAdminAuth", {
              headers: {
                  "x-access-token": localStorage.getItem("token")
              }
              })
              .then(res => res.json())
              .then(data => data.isLoggedIn ? navigate('/checklists/edit/' + checklist._id):navigate('/login'))
      }

      const loadChecklist = () => {
          if(state != undefined || null){
            setChecklist(state.content)
            setListItems(state.content.content)
            setTitle(state.content.title)
            setAuthor(state.content.author)
            setLevel(state.content.level)
            setDesc(state.content.description)
            window.localStorage.setItem('state', JSON.stringify(state.checklist))
          } else {
              const data = window.localStorage.getItem('state')
              if(data != undefined || null)
              {
                  setChecklist(JSON.parse(data))

                  verifyToken()
              } 
          }
      }

      setLoading(false)
      loadChecklist()
  }, [])

  React.useEffect(() => {
      window.localStorage.setItem('state', JSON.stringify(checklist))
  }, [checklist])


    return <div className='view-page' >
        {!loading ? <div id="printable">
          <h1 className='view-page-title'>{title}</h1>
          <p className="view-page-description">{desc}</p>
          <div className="checklist-view-div">
          <FormGroup>
      
    
          {listItems.map((listItem) => {
            const labelId = `checkbox-list-label-${listItem.index}`;

            if(listItem.contentType == 'text'){
              return (
                <FormControlLabel control={<Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}/>} label={<h3 className='view-page-text'>{listItem.text}</h3>} sx={{fontSize: 24,fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: '900', padding: '.5em', textAlign: 'left'}}/>
              );
            } else {
              return <img className='view-page-img' src={"https://storage.googleapis.com/cyber-guardian-images/" + listItem.text} alt={listItem.caption}/>
            }
          })}
          </FormGroup>
        </div>
        
      </div> : <div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>}
      <button className="dark-btn" onClick={() => printPageArea("printable")}>Print Checklist</button>
        <Footer />
    </div>
}