import { useEffect, useState } from "react";
import Discount from "../components/general_universal/discount";
import NavInfo from "../components/general_universal/navInfo";
import WeInsta from "../components/general_universal/weInsta";

const Delivery = () => {
    const [headerHeight, setHeaderHeight] = useState(0)
    useEffect(() => {
        setHeaderHeight(document.getElementsByClassName('mainHead')[0].clientHeight)
        window.scrollTo(0,0);

    })
    return (
        <div className="w-full min-h-screen h-max flex flex-col items-center " style={{ marginTop: headerHeight + 'px' }}>
            <NavInfo />

             <div className=" w-11/12 h-full flex flex-col lg:flex-row justify-center lg:justify-between items-start p-8 bg-white border-2 border-[#EDEDED] rounded-3xl">
                <div className="Text prose flex flex-col max-w-none w-full lg:w-2/3 mb-4 lg:mb-0 h-max px-2">
                    <h3>Delivery Info</h3>
                    <p>   A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.</p>

                    <h3> What's a Rich Text element?</h3>
                    <p> The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>

                    <h3> Static and dynamic content editing</h3>
                    <p>  A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing.</p>
                    <ul>
                        <li>Beautifully Designed</li>
                        <li>100% Responsive</li>
                        <li>CMS Content</li>
                        <li>Smooth Animations </li>
                    </ul>
                    <p> For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>

                    <h3>  How to customize formatting for each rich text</h3>
                    <p>  Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                </div>
                <div className="w-full lg:w-1/3 h-44 lg:h-52 rounded-2xl  border-[#E5E5E5] border-2 flex justify-center md:justify-start lg:justify-center items-center flex-col md:flex-row lg:flex-col">
                    <text className='text-lg w-2/3 md:w-auto text-center lg:text-2xl mx-6 my-4 flex'>Can't Find the Answer to Your Question?</text>
                    <form className='w-min h-min flex '>
                        <input type="submit" value="Contact Us" className='w-32  h-12 text-lg font-medium flex items-center justify-center bg-[#A5C926] rounded-3xl text-white hover:shadow-lg cursor-pointer' />
                    </form>
                </div>
            </div> 
            <Discount />
            <WeInsta />
        </div>
    );
}

export default Delivery;