import Intro from '../components/homeComps/intro'
import CatIntro from '../components/homeComps/catintro'
import Exemplars from '../components/homeComps/exemplars'
import AboutPart from '../components/general_universal/aboutPart';
import Discount from '../components/general_universal/discount';
import WeInsta from '../components/general_universal/weInsta';
import { useEffect, useState } from 'react';

const Home = (props) => {
    const [headerHeight, setHeaderHeight] = useState(0)
    useEffect(() => {
        setHeaderHeight(document.getElementsByClassName('headerik')[0].clientHeight)
        window.scrollTo(0,0);

    })
    
    return (
        <div className={"w-full h-max flex flex-col items-center mt-[" + headerHeight + "px]"}>
            <Intro />
            <CatIntro />
            <Exemplars />
            <AboutPart />
            <text className="text-sm font-medium text-evergreenie my-4">Made for Webflow</text>
            <text className="text-center max-w-lg text-4xl my-4">Simple & Colorful Ecommerce Template for Your Business</text>
            <div className="w-9/12 lg:w-11/12 h-max rounded-lg flex flex-col lg:flex-row-reverse my-8">
                <img className="w-full lg:w-1/2 rounded-2xl " src='https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg' alt="" />
                <div className="p-5 flex flex-col justify-center items-center lg:items-start lg:w-1/2">
                    <text className="mb-2 text-2xl max-w-md font-medium text-black">Beautifully Designed</text>
                    <hr className="w-1/4 border-evergreenie my-4" />
                    <text className="text-center lg:text-left text-[#C4A69C] my-4">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</text>
                    <a href="https://instagram.com/" className="w-40 h-14 px-4 flex items-center justify-center bg-evergreenie rounded-3xl text-white font-medium hover:shadow-lg ">
                        See More Photos
                    </a>
                </div>
            </div>
            <Discount />
            <WeInsta />
        </div>
    );
}

export default Home;
/*  
style={{backgroundImage:"https://d1x7mfwjl7srzk.cloudfront.net/wp-content/uploads/2020/05/29135722/Blocks_Body-2.jpg{"}}
*/