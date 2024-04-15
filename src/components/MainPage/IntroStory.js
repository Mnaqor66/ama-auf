import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const IntroStory = () => {
    const navigate = useNavigate()

    return (
        <div className='IntroStory-welcome'>
            <h1>WELCOME</h1>
            <div>
                Kadangkala hidup penuh dengan hal yang tak diduga, seperti halnya pertemuan kami, tanpa disangka dan tanpa diduga <br/> dan hingga akhirnya
            </div>
            <span>"Panjang jalan membawa kami ke peraduan ternyaman"</span>
            <Button onClick={()=> navigate('/list')}>OUR STORY</Button>
        </div>
    )
}

export default IntroStory