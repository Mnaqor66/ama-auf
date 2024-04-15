import '../../style/storyContent.css'
import { Telegram, QuoteTelegram } from "../../libs/story/Telegram"
import Footer from '../../components/Footer'

const Stry1 = () => {
    return (
        <div className='storyBody'>
            <div className='introBG'>
                <div className="introText">
                    <div>
                        <h1>Telegram</h1>
                    </div>
                </div>
            </div>
            <div className='quoteBox'>
                <QuoteTelegram />
            </div>
            <div className='storyBox'>
                <Telegram />
            </div>
            <div className='Footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Stry1