import { useEffect, useRef, useState } from "react"
import { BiChevronDownCircle } from "react-icons/bi"

const Intro = () => {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })

    const scrollDown = () => {
        window.scrollTo({
            top: height,
            behavior: "smooth",
        });
    }
    return (
        <div className="Intro flex flex-col w-full h-max z-0 relative " ref={ref}>
            <div className="w-full min-h-[90vh] md:h-[110vh] lg:h-[100vh] flex justify-center items-center bg-[url('https://d1x7mfwjl7srzk.cloudfront.net/wp-content/uploads/2020/05/29135722/Blocks_Body-2.jpg')] bg-cover bg-center" >
                    <div className="w-[28rem] lg:w-[35rem] h-64 lg:h-92 bg-white rounded-xl flex flex-col items-center justify-around">
                        <p className="text-[#A5C926]">Say Hello to ToyStore!</p>
                        <h3 className="text-center text-3xl font-medium">Free Ecommerce <br />Template for Webflow</h3>
                        <div className="w-32 h-14 flex items-center justify-center bg-[#A5C926] rounded-3xl text-white hover:shadow-lg cursor-pointer">
                            Open Catalog
                        </div>
                    </div>
            </div>
            <button onClick={scrollDown} className='bg-white w-max rounded-full relative bottom-7 flex self-center'>
                <BiChevronDownCircle size={'3rem'} />
            </button>
        </div>
    );
}

export default Intro; 