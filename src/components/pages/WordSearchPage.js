import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import WSGenerator from '../WordSearch'

function WordSearchPage(){
    return( 
        <>
            <WSGenerator />
            <Footer />
        </>
    );    
}

export default WordSearchPage;