import { combineReducers } from 'redux';
import _ from 'lodash';

const TEST_STATE = {
  grid: [['C', 'J', 'A', 'V', 'A', 'I', 'L','A', 'B', 'I', 'L', 'I', 'T', 'Y', 'F'],
         ['C', 'O', 'D', 'P', 'H', 'G', 'I','T', 'V', 'R', 'M', 'W', 'S', 'I', 'S'],
         ['S', 'Y', 'N', 'R', 'S', 'E', 'M','G', 'M', 'V', 'F', 'E', 'L', 'N', 'Z'],
         ['P', 'M', 'B', 'F', 'A', 'D', 'N','S', 'I', 'Z', 'U', 'I', 'K', 'T', 'P'],
         ['F', 'A', 'U', 'E', 'I', 'N', 'A','C', 'G', 'N', 'N', 'Q', 'Y', 'E', 'R'],
         ['Q', 'P', 'S', 'L', 'R', 'D', 'S','N', 'R', 'V', 'E', 'Z', 'R', 'G', 'I'],
         ['K', 'H', 'I', 'S', 'T', 'S', 'E','O', 'T', 'Y', 'U', 'S', 'L', 'R', 'V'],
         ['U', 'I', 'J', 'S', 'P', 'I', 'E','N', 'M', 'I', 'P', 'S', 'C', 'I', 'A'],
         ['U', 'S', 'U', 'G', 'A', 'H', 'F','C', 'T', 'W', 'V', 'T', 'I', 'T', 'C'],
         ['T', 'H', 'P', 'A', 'E', 'E', 'R','A', 'U', 'I', 'A', 'I', 'I', 'Y', 'Y'],
         ['H', 'I', 'D', 'Y', 'X', 'R', 'O','A', 'C', 'R', 'A', 'R', 'R', 'O', 'W'],
         ['R', 'N', 'A', 'S', 'J', 'I', 'X','P', 'S', 'T', 'I', 'L', 'E', 'U', 'N'],
         ['E', 'G', 'T', 'I', 'Q', 'S', 'P','C', 'V', 'E', 'O', 'T', 'I', 'R', 'S'],
         ['A', 'L', 'E', 'C', 'K', 'K', 'Z','W', 'L', 'L', 'W', 'R', 'Y', 'T', 'M'],
         ['T', 'V', 'U', 'L', 'N', 'E', 'R','A', 'B', 'I', 'L', 'I', 'T', 'Y', 'Y']], 
  settings: {
    expandMenu: false,
    showWordList: true,
    showWordHints: false
  },
  words: {
    CYBERSECURITY: {
      word: 'CYBERSECURITY',
      start: {x: 0, y: 1},
      end: {x: 12, y: 13}
    },
    PHISHING: {
      word: 'PHISHING',
      start: {x: 1, y: 5},
      end: {x: 1, y: 12}
    },
    AVAILABILITY: {
      word: 'AVAILABILITY',
      start: {x: 2, y: 0},
      end: {x: 13, y: 0}
    },
    CONFIDENTIALITY: {
      word: 'CONFIDENTIALITY',
      start: {x: 0, y: 0},
      end: {x: 14, y: 14}
    },
    INTEGRITY: {
      word: 'INTEGRITY',
      start: {x: 13, y: 1},
      end: {x: 13, y: 9}
    },
    PASSPHRASE: {
      word: 'PASSPHRASE',
      start: {x: 0, y: 3},
      end: {x: 9, y: 12}
    },
    ANTIVIRUS: {
      word: 'ANTIVIRUS',
      start: {x: 6, y: 4},
      end: {x: 14, y: 12}
    },
    UPDATE: {
      word: 'UPDATE',
      start: {x: 2, y: 8},
      end: {x: 2, y: 13}
    },
    ENCRYPTION: {
      word: 'ENCRYPTION',
      start: {x: 5, y: 2},
      end: {x: 14, y: 11}
    },
    MULTIFACTOR: {
      word: 'MULTIFACTOR',
      start: {x: 1, y: 3},
      end: {x: 11, y: 13}
    },
    RANSOMWARE: {
      word: 'RANSOMWARE',
      start: {x: 3, y: 2},
      end: {x: 12, y: 11}
    },
    PRIVACY: {
      word: 'PRIVACY',
      start: {x: 14, y: 3},
      end: {x: 14, y: 9}
    },
    THREAT: {
      word: 'THREAT',
      start: {x: 0, y: 9},
      end: {x: 0, y: 14}
    },
    VULNERABILITY: {
      word: 'VULNERABILITY',
      start: {x: 1, y: 14},
      end: {x: 13, y: 14}
    },
    RISK: {
      word: 'RISK',
      start: {x: 5, y: 10},
      end: {x: 5, y: 13}
    },
    ANTIVIRUS: {
      word: 'ANTIVIRUS',
      start: {x: 6, y: 4},
      end: {x: 14, y: 12}
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