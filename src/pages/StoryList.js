import "../style/landingPage.css"
import '../style/StoryList.css'
import List from '../components/StoryList/List'
import Footer from "../components/Footer"

function StoryList() {
    return (
        <div>
            <div className='introBG'>
                <div className="introText">
                    <div>
                        <h1>STORY</h1> <span>List</span> 
                    </div>
                </div>
            </div>
            <div className="StoryList">
                <List />
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </div>
    )
}

export default StoryList