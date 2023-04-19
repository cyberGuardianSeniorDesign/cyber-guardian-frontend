import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Crossword from '@jaredreisinger/react-crossword';
import styled, { ThemeProvider } from 'styled-components';
import { columnBreakpoint } from '@jaredreisinger/react-crossword'


const data = {
    across: {
      3: {
        clue: 'A memorized secret consisting of a sequence of words or other text that a claimant uses to authenticate their identity.',
        answer: 'PASSPHRASE',
        row: 3,
        col: 4,
      },
      4: {
        clue: 'The loss of confidentiality, integrity, or availability of information, data, or information (or control) systems.',
        answer: 'RISK',
        row: 4,
        col: 13,
      },
      6: {
        clue: 'A way of translating data from plaintext (unencrypted) to ciphertext (encrypted).',
        answer: 'ENCRYPTION',
        row: 6,
        col: 0,
      },
      8: {
        clue: 'The fraudulent practice of sending emails or other messages purporting to be from reputable companies in order to induce individuals to reveal personal information, such as passwords and credit card numbers.',
        answer: 'PHISHING',
        row: 8,
        col: 0,
      },
      9: {
        clue: 'A patch, upgrade, or other modification to code that corrects security and/or functionality problems in software.',
        answer: 'UPDATE',
        row: 9,
        col: 15,
      },
      11: {
        clue: 'Preserving authorized restrictions on information access and disclosure, including means for protecting personal privacy and proprietary information.',
        answer: 'CONFIDENTIALITY',
        row: 11,
        col: 5,
      },
      13: {
        clue: 'A security feature offered by many websites, applications and devices that dramatically improves account security.',
        answer: 'MULTIFACTOR',
        row: 15,
        col: 8,
      },
      15: {
        clue: 'Ensuring timely and reliable access to and use of information.',
        answer: 'AVAILABILITY',
        row: 19,
        col: 9,
      },
    },
    down: {
      1: {
        clue: 'The state of being protected against the criminal or unauthorized use of electronic data, or the measures taken to achieve this.',
        answer: 'CYBERSECURITY',
        row: 0,
        col: 13,
      },
      2: {
        clue: 'An ever-evolving form of malware designed to encrypt files on a device, rendering any files and the systems that rely on them unusable.',
        answer: 'RANSOMWARE',
        row: 2,
        col: 11,
      },
      5: {
        clue: 'Any circumstance or event with the potential to adversely impact organizational operations, organizational assets, or individuals through an information system via unauthorized access, destruction, disclosure, modification of information, and/or denial of service.',
        answer: 'THREAT',
        row: 4,
        col: 19,
      },
      7: {
        clue: 'Assurance that the confidentiality of, and access to, certain information about an entity is protected.',
        answer: 'PRIVACY',
        row: 6,
        col: 5,
      },
      10: {
        clue: 'Types of software products which attempt to detect, quarantine and/or block malware from running on devices.',
        answer: 'ANTIVIRUS',
        row: 9,
        col: 18,
      },
      12: {
        clue: 'Guarding against improper information modification or destruction and includes ensuring information non-repudiation and authenticity.',
        answer: 'INTEGRITY',
        row: 13,
        col: 16,
      },
    },
  }


  const StyledContainer = styled.section.attrs((props) => ({
    width: props.width || "100%",
    hasPadding: props.hasPadding || false,
    
  }))`
    --container-padding: 20px;
    width: ${(props) => props.width}; // Falls back to 100%
    
    padding: ${(props) =>
      (props.hasPadding && "var(--container-padding)") || "none"};
  `;


  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '125vh',
  }

function CrosswordPage() {
  
    return (
      <div>
        <p style={{
            fontSize: "1.5rem" ,
            textAlign: "center",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#ffde00",
            display: "inline-block",
            fontFamily: "monospace"
            }}> Instructions: Click a clue on the right side of the page. Type in the correct answer that corresponds to the clue. You may also click on the crossword boxes and type directly into them.</p>
        <StyledContainer style={styles}>
        <Crossword data={data} />
        </StyledContainer>
        <Footer />
      </div>
    );
}


export default CrosswordPage;