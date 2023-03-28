import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Menu from '../Games/WordSearch/Menu/Menu.js';
import Grid from '../Games/WordSearch/Grid/Grid.js';
import WordList from '../Games/WordSearch/WordList/WordList.js';
import Footer from '../Footer.jsx';

export function WordSearch({showWordList}){
    return( 
        <div>
            <Menu />
            <Grid />
            {showWordList && <WordList />}s
            <Footer />
        </div>
    );
}

function mapStateToProps({ settings: { showWordList } }) {
    return { showWordList };
  }
  
  export default connect(mapStateToProps, {})(WordSearch);