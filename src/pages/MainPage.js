import '../App.css';
import IntroStory from '../components/MainPage/IntroStory';
import IntroGallery from '../components/MainPage/IntroGallery';
import About from '../components/MainPage/About';
import Footer from '../components/Footer';
import "../style/landingPage.css"

function MainPage() {
  return (
    <div>
      <div className='introBG'>
        <div className="introText">
          <div>
            <span>OUR</span> <h1>STORY & GALLERY</h1>
          </div>
        </div>
      </div>
      <div className='IntroStory'>
        <IntroStory />
      </div>
      <div className='IntroGallery'>
        <IntroGallery />
      </div>
      <div className='About'>
        <About />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
