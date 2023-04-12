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
            <p style={{fontSize: "1.5rem" , textAlign: "center"}}>Instructions: Search for the hidden cyber awareness terms. Click the first letter of a word and then the last letter to cross them out.</p>
            <Menu />
            <Grid />
            <WordList />
            <Footer />
        </div>
    );
}
export default WordSearch;

// function mapStateToProps({ settings: { showWordList } }) {
//     return { showWordList };
//   }
  
//   export default connect(mapStateToProps, {})(WordSearch)