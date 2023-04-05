import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import Crossword from '@jaredreisinger/react-crossword';

const data = {
    across: {
        1: {
          clue: 'This is an example clue that I am making long',
          answer: 'STOKER',
          row: 0,
          col: 0,
        },
        6: {
          clue: 'This is an example clue that I am making long',
          answer: 'LEO',
          row: 1,
          col: 7,
        },
        7: {
            clue: 'This is an example clue that I am making long',
            answer: 'TEXT',
            row: 2,
            col: 3,
          },
          8: {
            clue: 'This is an example clue that I am making long',
            answer: 'MORE',
            row: 3,
            col: 0,
          },
          9: {
            clue: 'This is an example clue that I am making long',
            answer: 'HYDE',
            row: 5,
            col: 0,
          },
          11: {
            clue: 'This is an example clue that I am making long',
            answer: 'ABBEY',
            row: 5,
            col: 5,
          },
          15: {
            clue: 'This is an example clue that I am making long',
            answer: 'OVID',
            row: 6,
            col: 7,
          },
          16: {
            clue: 'This is an example clue that I am making long',
            answer: 'IAN',
            row: 8,
            col: 2,
          },
          17: {
            clue: 'This is an example clue that I am making long',
            answer: 'OLD',
            row: 9,
            col: 0,
          },
          18: {
            clue: 'This is an example clue that I am making long',
            answer: 'GOTHIC',
            row: 9,
            col: 4,
          },
          19: {
            clue: 'This is an example clue that I am making long',
            answer: 'DOYLE',
            row: 11,
            col: 0,
          },
          
      },
      down: {
        2: {
          clue: 'This is an example clue that I am making long',
          answer: 'THEORY',
          row: 0,
          col: 1,
        },
        3: {
            clue: 'This is an example clue that I am making long',
            answer: 'KATE',
            row: 0,
            col: 3,
          },
          4: {
            clue: 'This is an example clue that I am making long',
            answer: 'ROXANA',
            row: 0,
            col: 5,
          },
          5: {
              clue: 'This is an example clue that I am making long',
              answer: 'POETRY',
              row: 0,
              col: 9,
            },
            9: {
              clue: 'This is an example clue that I am making long',
              answer: 'HAYWOOD',
              row: 5,
              col: 0,
            },
            10: {
              clue: 'This is an example clue that I am making long',
              answer: 'DAVID',
              row: 5,
              col: 2,
            },
            12: {
              clue: 'This is an example clue that I am making long',
              answer: 'BRONTE',
              row: 5,
              col: 6,
            },
            13: {
              clue: 'This is an example clue that I am making long',
              answer: 'EDITION',
              row: 5,
              col: 8,
            },
            14: {
              clue: 'This is an example clue that I am making long',
              answer: 'KING',
              row: 6,
              col: 4,
            },
      },
  };
  
  export default function CrosswordPage() {
    return <Crossword data={data} />;
  }
