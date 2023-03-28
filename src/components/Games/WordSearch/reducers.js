import { combineReducers } from 'redux';
import _ from 'lodash';

const TEST_STATE = {
  grid: [['M', 'L', 'K', 'D', 'D', 'O', 'S'],
         ['G', 'A', 'C', 'E', 'B', 'C', 'R'],
         ['P', 'F', 'L', 'C', 'B', 'Y', 'F'],
         ['H', 'L', 'K', 'W', 'M', 'B', 'O'],
         ['I', 'V', 'U', 'P', 'A', 'E', 'N'],
         ['S', 'A', 'R', 'O', 'C', 'R', 'M'],
         ['H', 'T', 'T', 'P', 'S', 'F', 'E']],
  settings: {
    expandMenu: false,
    showWordList: true,
    showWordHints: false
  },
  words: {
    MALWARE: {
      word: 'MALWARE',
      start: {x: 0, y: 0},
      end: {x: 6, y: 6}
    },
    CYBER: {
      word: 'CYBER',
      start: {x: 5, y: 1},
      end: {x: 5, y: 5}
    },
    PHISH: {
      word: 'PHISH',
      start: {x: 0, y: 2},
      end: {x: 0, y: 6}
    },
    HTTP: {
      word: 'HTTP',
      start: {x: 0, y: 6},
      end: {x: 3, y: 6}
    },
    SCAM: {
      word: 'SCAM',
      start: {x: 4, y: 6},
      end: {x: 4, y: 3}
    },
    DDOS: {
      word: 'DDOS',
      start: {x: 3, y: 0},
      end: {x: 6, y: 0}
    }
  }
};

export function grid(state = TEST_STATE.grid, action) {
  return state;
}

export function settings(state = TEST_STATE.settings, action) {
  switch (action.type) {
    case 'MERGE_SETTINGS':
      return {...state, ...action.updatedSettings };
    default:
      return state;
  }
}

export function words(state = TEST_STATE.words, action) {
  switch (action.type) {
    case 'SET_WORD_HINTED':
      if (state[action.word]) {
        return { ...state,
          [action.word]: { ...state[action.word], hinted: action.hinted }
        };
      } else {
        return state;
      }
    case 'ATTEMPT_SOLUTION':
      const word = Object.values(state).find(word =>
        (_.isEqual(word.start, action.start) && _.isEqual(word.end, action.end)) ||
        (_.isEqual(word.start, action.end) && _.isEqual(word.end, action.start)));
      if (word) {
        return { ...state,
          [word.word]: { ...word, solved: true }
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default combineReducers({
  grid,
  settings,
  words
});