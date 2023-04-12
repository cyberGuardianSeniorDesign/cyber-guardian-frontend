import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Crossword from '@jaredreisinger/react-crossword';
import styled, { ThemeProvider } from 'styled-components';
import { columnBreakpoint } from '@jaredreisinger/react-crossword'


const data = {
    across: {
      1: {
        clue: 'one plus one',
        answer: 'TWO',
        row: 0,
        col: 0,
      },
    },
    down: {
      2: {
        clue: 'three minus two',
        answer: 'ONE',
        row: 0,
        col: 2,
      },
    },
  }


  const StyledContainer = styled.section.attrs((props) => ({
    width: props.width || "80%",
    hasPadding: props.hasPadding || false,
    height: props.height || "50%",
    
  }))`
    --container-padding: 20px;
    width: ${(props) => props.width}; // Falls back to 100%
    height: ${(props) => props.height};
    
    padding: ${(props) =>
      (props.hasPadding && "var(--container-padding)") || "none"};
  `;


  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }

function CrosswordPage() {
  
    return (
      <div>
        <StyledContainer style={styles}>
        <Crossword data={data} columnBreakpoint={columnBreakpoint = '100px'}/>
        </StyledContainer>
        <Footer />
      </div>
    );
}


export default CrosswordPage;