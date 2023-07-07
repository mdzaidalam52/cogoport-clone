import { Container } from 'react-bootstrap';
import './App.css';
import Banner from './components/Banner/Banner';
import Numbers from './components/Numbers/Numbers';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Products from './components/Products/Products';
import Trusts from './components/Trusts/Trusts';
import Industries from './components/Industries/Industries';
import GetStarted from './components/GetStarted/GetStarted';
import IntroVideo from './components/IntroVideo/IntroVideo';
import Blogs from './components/Blogs/Blogs';
import Subscribe from './components/Subscribe/Subscribe';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <div className='light-bg'>
        <Numbers/>
        <Container>
          <Intro/>
          <Products/>
        </Container>
      </div>
      <Trusts/>
      <div className='light-bg'>
        <Container>
          <Industries/>
        </Container>
      </div>
      <GetStarted/>
      <IntroVideo/>
      <Container>
        <Blogs/>
      </Container>
      <div className='dark-bg'>
        <div className='curve'></div>
        <Subscribe/>
        <Links/>
      </div>
      <div className='darker-bg'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
