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
      frontHTML: <>Hi, I need an urgent refund made to a new client or we are going to lose the deal. Please transfer $20k to their business account: Account Number: 5432456543421 Routing: 490683750. I'm stuck out of office in meetings so only have my cell on me - make sure you email me directly once it it's done. Thanks, John COO </>,
      backHTML: <>PHISHY: It contains all the classic signs of CEO fraud: urgency, leveraging seniority, breaking protocol, confidentiality, and a ‘mystery’ client.</>,
    },
    {
      id: 4,
      frontHTML: <>This is an important message. The Internal</>,
      backHTML: <></>,
    },
    {
      id: 5,
      frontCardStyle: <img src="img-15.jpg" alt="error" />,
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
    height: '60vh',
  }

  const cardstyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#57A0D3',
    fontSize: 26,
    textAlign: 'center',
    fontFamily: "monospace"
  }


  return (
    
    <div style={{backgroundColor: 'white'}}>
      <p style={{fontSize: "1.5rem" ,
      textAlign: "center",
      padding: "10px",
      margin: "10px",
      backgroundColor: "#ffde00",
      display: "inline-block",
      fontFamily: "monospace"
      }}>Instructions: Read each card carefully and determine whether it is phishy or not. Click the card to flip it over and view the answer.</p>
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

//https://www.egress.com/blog/phishing/spot-the-phish