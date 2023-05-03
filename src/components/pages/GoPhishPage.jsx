import React from 'react';
import '../../App.css';
import axios from 'axios';
import { FlashcardArray } from "react-quizlet-flashcard";
import Footer from '../Footer';
import styled, { ThemeProvider } from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

function GoPhishPage() {
  const [loading, setLoading] = React.useState(true)
    const [games, setGames] = React.useState([])

    

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
      frontHTML: <>This is an important message. The Internal Revenue Service wishes to inform you that the IRS have started accepting tax return and you have been advised to Attach you current W-2 form in repsonse to this email to update our record as we prepare for 2023 TAX update. Internal Revenue Service United States</>,
      backHTML: <>PHISHY: Impersonating the IRS is another common email phishing scam tactic. You may, for instance, receive a fake IRS email asking you to send money or personal information. Typically, there is a sense of urgency to the subject line. Scammers hope that you won't verify the email’s authenticity since it comes from a government agency.</>,
    },
    {
      id: 5,
      frontHTML: <>Hello

      This is to inform you that we have found suspicious activities with your account.Due to that, we have terminated your windows account.
      
      If you think this was a mistake and you wish to continue using this windows license key, Please contact con
      
      technical support at 1-800-341-8835.
      
      PS NOTE: Please be at your computer while you call consumer technical support
      
      Windows Help 1-800-341-8835.</>,
      backHTML: <>PHISHY: Big companies prioritize email security and will prevent you from signing in without your permission. When the company notices a login attempt from a new device or location, you'll receive an email to confirm it was you. Fraudsters send versions of these emails to trick you into giving them sensitive information. </>,
    },
    {
      id: 6,
      frontHTML: <>Credit Card Billing Fail

      We were unable to authorize your credit card payment for your website
      
      WEBSITE:
      
      Squarespace.com
      
      YOUR PLAN:
      
      $18.00-Business
      
      To keep your site online, please update your billing information in the Billing panel in the next three days. 
      
      UPDATE MY BILLING
      
      if you have any questions, our award-winning Customer Care Team is
      
      available 24/7 at support.squarespace.com</>,
      backHTML: <>PHISHY: Typically, these scams come from companies with large user bases. Squarespace powers a lot of websites; so if you get an email from them, you're more likely to take action. These emails state that your account will be suspended if you don't update your billing information. Phishers use urgency to persuade you to click on a phishing link. Because you trust the Squarespace domain name, you likely won't check if the email is legitimate. </>,
    },
    {
      id: 7,
      frontHTML: <>Sheila V [a person you do not know] has shared a document on Google Docs with you. Sheila V has invited you to view the following document: Open in Docs</>,
      backHTML: <>PHISHY: ‍In May 2017, a phishing scam known as "the Google Docs worm" spread across the internet, causing havoc for users [*]. Fraudsters stole emails and contact lists from Gmail accounts by impersonating Google Docs through special web apps. This method worked because people believed that the requests came from their friends. 

      When recipients granted access, the scam email would automatically be sent to their contacts.</>,
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
    fontSize: 20,
    textAlign: 'center',
    fontFamily: "monospace"
  }

  React.useEffect(() => {
    const getGames = async() => {
        await axios.get(process.env.REACT_APP_BACKEND + "games")
        .then(res => setGames(res.data))
        .then(setTimeout(() => setLoading(false), 500))
    }

    getGames()
  }, [])

  return (
    <>
    {!loading ?
    <>
    {games.filter(game => game.title == 'Go Phish')[0].running ?
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
        </div>:<h3 className='no-content-h3'>Paige Not Available</h3>}</>: <div className="loading-div"><CircularProgress color="inherit" sx={{position: 'relative', top: '40%', left: '47%'}}/></div>
      }
    </>
  );
}


export default GoPhishPage;

//https://www.egress.com/blog/phishing/spot-the-phish