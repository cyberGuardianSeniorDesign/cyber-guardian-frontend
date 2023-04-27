import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Menu from '../Games/WordSearch/Menu/Menu.js';
import Grid from '../Games/WordSearch/Grid/Grid.js';
import WordList from '../Games/WordSearch/WordList/WordList.js';
import Footer from '../Footer.jsx';
import { textAlign } from '@mui/system';

function WordSearch(){
    return( 
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
        </div>
    );
}
export default WordSearch;

// function mapStateToProps({ settings: { showWordList } }) {
//     return { showWordList };
//   }
  
//   export default connect(mapStateToProps, {})(WordSearch)