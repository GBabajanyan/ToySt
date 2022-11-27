import { useEffect, useState } from "react";
import Discount from "../components/general_universal/discount";
import WeInsta from "../components/general_universal/weInsta";
import AboutPart from "../components/general_universal/aboutPart";
import { BiRightArrowAlt } from "react-icons/bi";
import NavInfo from "../components/general_universal/navInfo";


const About = () => {
    const [headerHeight, setHeaderHeight] = useState(0)
    useEffect(() => {
        setHeaderHeight(document.getElementsByClassName('mainHead')[0].clientHeight)
        window.scrollTo(0,0);

    })
    return (
        <div className="w-full min-h-screen h-max flex flex-col items-center " style={{ marginTop: headerHeight + 'px' }}>
            <NavInfo />
            <text className="text-sm font-medium text-evergreenie my-4">All you need is fun!</text>
            <text className="text-4xl my-4">Introducing ToyStore</text>
            <text className="text-center max-w-md text-[#C4A69C] my-4">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</text>
            <div className='flex w-max h-max p-2 bg-white text-xs items-center border-b-[#DDDDDD] border-b-4 hover:cursor-pointer hover:shadow-evergreenie my-4'>
                More About Us
            </div>
            <img className="w-11/12 rounded-xl my-12" src='https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-1600.jpeg' />
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

            <div className="w-9/12 lg:w-11/12 h-max rounded-lg flex flex-col lg:flex-row my-8">
                <img className="w-full lg:w-1/2 rounded-2xl " src='https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02-p-1080.jpeg' alt="" />
                <div className="p-5 flex flex-col justify-center items-center lg:items-start lg:w-1/2">
                    <text className="mb-2 text-2xl max-w-md font-medium text-black">Beautifully Designed</text>
                    <hr className="w-1/4 border-evergreenie my-4" />
                    <text className="text-center lg:text-left text-[#C4A69C] my-4">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</text>
                    <a href='#' className='flex w-max h-max p-2 bg-white text-xs items-center border-b-[#DDDDDD] border-b-4 hover:cursor-pointer hover:border-b-evergreenie my-4'>
                        Explore Our Toys
                        <BiRightArrowAlt />

                    </a>
                </div>
            </div>
            <AboutPart />
            <Discount />
            <WeInsta />
        </div>
    );
}

export default About;