import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../cards/Cards';
import Footer from '../Footer';


function Home() {
    return (
        <>
            <HeroSection />
            <Cards style={{backgroundColor:'blue'}}/>
            <Footer />
        </>
    );
}

export default Home;