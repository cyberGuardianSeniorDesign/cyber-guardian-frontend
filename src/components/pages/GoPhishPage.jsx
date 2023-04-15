import React from 'react';
import '../../App.css';
import { FlashcardArray } from "react-quizlet-flashcard";
import Footer from '../Footer';
import styled, { ThemeProvider } from 'styled-components';



function GoPhishPage() {
  const cards = [
    {
      id: 1,
      frontHTML: <>Hi there,  We recevied a request to change the password for you MotionMe account. If you did not make this request, just ignore this email. Otherwise, please click the button below to reset you password.</>,
      backHTML: <>NOT PHISHY: While it encourages urgency (a common sign of phishing) it is doing so with good reason if your account has been compromised and provides reassurance if you did not request a change.</>,
    },
    {
      id: 2,
      frontHTML: <>Hi Sasha, This is Rich - sorry we haven't had a chance to meet yet. Emailing from my cell as I'm stuck on the train with no internet on my laptop - can you email me the spreadsheet on West Energy Inc? It's not downloading properly for me. Remember to encrypt the file. Cheers, Rich</>,
      backHTML: <>NOT PHISHY: The CEO might be breaking protocol by asking for client documentation to be sent to his personal device, but a scammer would never request for a file to be encrypted. To be sure of authenticity, the employee could also call the CEO to validate his request.</>,
    },
    {
      id: 3,
      frontHTML: <></>,
      backHTML: <></>,
    },
    {
      id: 4,
      frontHTML: <></>,
      backHTML: <></>,
    },
    {
      id: 5,
      frontHTML: <></>,
      backHTML: <></>,
    },
    {
      id: 6,
      frontHTML: <></>,
      backHTML: <></>,
    },
    {
      id: 7,
      frontHTML: <></>,
      backHTML: <></>,
    },
  ];

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
    height: '75vh',
  }

  const cardstyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    fontSize: 28,
    textAlign: 'center'
  }


  return (
    
    <div style={{backgroundColor: 'gray'}}>
      <p style={{fontSize: "1.5rem" , textAlign: "center"}}>Instructions: Read each card carefully and determine whether it is phishy or not. Click the card to flip over to view the answer.</p>
      <StyledContainer style={styles}>
      <FlashcardArray 
      frontContentStyle={cardstyles}
      backContentStyle={cardstyles}
      cards={cards} />
      </StyledContainer>
      <Footer />
    </div>
  );
}


export default GoPhishPage;