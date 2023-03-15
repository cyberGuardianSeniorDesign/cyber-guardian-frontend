import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import { Wordsearch } from 'react-wordsearch'
import 'react-wordsearch/dist/index.css'

function WordSearchPage(){
    return( 
        <>
            <Wordsearch />
            <Footer />
        </>
    );    
}

export default WordSearchPage;