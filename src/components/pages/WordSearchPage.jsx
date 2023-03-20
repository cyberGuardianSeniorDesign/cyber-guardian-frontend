import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import 'react-wordsearch/dist/index';
import { Wordsearch } from 'react-wordsearch';



function WordSearchPage(){

    return( 
        <div>
            
            <Footer />
            <Wordsearch />
        </div>
    );
}

export default WordSearchPage;