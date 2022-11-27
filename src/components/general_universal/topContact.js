import { BsTwitter } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

const TopContact = () => {
    return (
        <div className='topContact w-full h-7 flex bg-evergreenie justify-center'>
            <div className='w-full lg:w-11/12 h-full flex justify-between px-4 lg:px-0'>
                <div className="flex basis-80 shrink-0 h-full text-white justify-between">
                    <div className="flex shrink-0 items-center text-xs ">
                        Call Us: +1 213 974-5898

                    </div>
                    <div className="flex shrink-0 items-center text-xs">
                        Email:
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>toystore@template.com</a>
                    </div>
                </div>
                <div className="flex basis-32 shrink-0">
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
    );
}

export default TopContact;