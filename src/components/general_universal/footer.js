import { BsTwitter } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

const Footerr = () => {
    return (
        <div className="footer w-full h-52 md:h-64 flex justify-center bg-evergreenie ">
            <div className='h-full w-11/12 flex flex-col '>
                <div className="main w-full h-2/3  flex flex-row justify-between">
                    <div className="flex justify-start items-center " style={{ flex: 1 }}>
                        <text className="text-2xl font-normal text-white relative bottom-8 lg:bottom-0">ToyStore</text>
                    </div>
                    <div className=" flex h-full flex-col lg:flex-row " style={{ flex: 2 }}>
                        <div className="pages flex justify-center items-center h-1/2 flex-1 text-xs lg:h-full md:text-base lg:text-lg ">
                            <a href="#" className='text-white flex justify-end lg:justify-center px-0 lg:px-2 items-center flex-1  hover:underline'>Home</a>
                            <a href="#" className='text-white flex justify-end lg:justify-center px-0 lg:px-2 flex-1  hover:underline'>Catalog</a>
                            <a href="#" className='text-white flex justify-end lg:justify-center px-0 lg:px-2 flex-1  hover:underline'>Delivery</a>
                            <a href="#" className='text-white flex justify-end lg:justify-center px-0 lg:px-2 flex-1  hover:underline'>About</a>
                            <a href="#" className='text-white flex justify-end lg:justify-center px-0 lg:px-2 flex-1  hover:underline'>Contacts</a>
                        </div>
                        <div className="social flex h-1/2 flex-1 justify-end lg:h-full ">
                            <div className='h-full w-40 flex items-start lg:items-center'>

                            <div className="flex-1 flex justify-center items-center">
                                <a href='https://twitter.com/'>
                                    <BsTwitter style={{ color: 'white' }} />
                                </a>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <a href='https://www.facebook.com/'>
                                    <FaFacebookSquare style={{ color: 'white' }} />
                                </a>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <a href='https://www.instagram.com/'>
                                    <BsInstagram style={{ color: 'white' }} />
                                </a>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <a href='https://www.pinterest.com/'>
                                    <BsPinterest style={{ color: 'white' }} />
                                </a>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <a href='https://www.youtube.com/'>
                                    <BsYoutube style={{ color: 'white' }} />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="license w-full h-1/3 border-t-2 border-[#B3CC57] flex flex-row justify-between">
                    <div className='flex w-max p-4 h-full  text-white text-xs justify-center items-center'>
                        <text> Created with love by <a href="#" className='underline'> Elastic themes</a></text>
                    </div>
                    <div className='flex w-min '>
                        <div className='flex p-4 h-full  text-white text-xs justify-center items-center '>
                            <text>Powered by <a href="#" className='underline'> Webflow</a></text>
                        </div>
                        <div className='flex w-min p-4 h-full text-white text-xs justify-center items-center'>
                            <a href="#" className='underline'> Style Guide</a>
                        </div>
                        <div className='flex w-max p-4 h-ful text-white text-xs justify-center items-center'>
                            <a href="#" className='underline'> Licensing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footerr;
