import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Menu from '../Games/WordSearch/Menu/Menu.js';
import Grid from '../Games/WordSearch/Grid/Grid.js';
import WordList from '../Games/WordSearch/WordList/WordList.js';
import Footer from '../Footer.jsx';

function WordSearch(){
    return( 
        <div>
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
  
//   export default connect(mapStateToProps, {})(WordSearch);