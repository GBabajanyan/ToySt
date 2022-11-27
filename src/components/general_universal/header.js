import { BsCart } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react';
import TopContact from './topContact';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import "../../index.css"
import Modal from 'react-modal';
const base = require('../../databa.json')



const Header = () => {
    const [dropDownOpen, setOpen] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    const modalStyles = {
        content: {
            width: '27rem',
            minHeight: '25rem',
            height: 'max-content',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            borderRadius:'2rem'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 20,
        }
    }
    const resizeFunction = () => {
        if (window.innerWidth > 1024) {
            setOpen(false)
        }
    }

    window.onresize = resizeFunction

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="headerik flex flex-col w-full h-max absolute lg:fixed z-10 self-end shadow-md" >
            <TopContact />
            <div className='mainHead flex w-full h-16 bg-white justify-center'>
                <div className='w-full lg:w-11/12 h-full flex flex-row '>
                    <div className="w-28 h-full flex justify-center items-center" >
                        <Link to='/' className="text-2xl font-medium">ToyStore</Link>
                    </div>

                    {
                        !dropDownOpen ?
                            (
                                <nav className='w-max h-full hidden lg:flex'>
                                    <Link to='/Catalog' className=' text-[#717171] w-max h-full py-5 px-4 border-y-2 border-bgc border-solid hover:underline'>
                                        Catalog
                                    </Link>
                                    <Link to='/Delivery' className=' text-[#717171] w-max h-full py-5 px-4 border-y-2 border-bgc border-solid hover:underline'>
                                        Delivery
                                    </Link>
                                    <Link to='/About' className=' text-[#717171] w-max h-full py-5 px-4 border-y-2 border-bgc border-solid hover:underline'>
                                        About
                                    </Link>
                                    <Link to='/Contact' className=' text-[#717171] w-max h-full py-5 px-4 border-y-2 border-bgc border-solid hover:underline'>
                                        Contacts
                                    </Link>
                                </nav>
                            ) : null
                    }
                    <div className="flex w-40 h-full justify-end ml-auto">
                        <div className="cart flex justify-center items-center basis-24 h-full ">
                            <a href='#' className='flex flex-row items-center ' onClick={openModal}>
                                <div className="">Cart</div>
                                <div className="mx-2">
                                    <BsCart />
                                </div>
                                <div className="flex w-5 h-5 justify-center items-center bg-evergreenie rounded-full text-white px-1">{base.cart.length}</div>
                            </a>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={modalStyles}
                                center
                            >
                                {/* w-40rem, h-25rem */}
                                <div className='w-full h-max flex flex-col '>
                                    <div className='w-full h-24 flex flex-row p-4 justify-between'>
                                        <text className='text-3xl'>Your Cart</text>
                                        <GrFormClose className='text-2xl hover:cursor-pointer' onClick={closeModal} />
                                    </div>
                                    <hr />
                                    {
                                        base.cart.length != 0 ?
                                    
                                    <div className='w-full min-h-96 flex flex-col'>
                                        <div className='w-full min-h-36 flex flex-col'>asdafd?</div>
                                        <div className='w-full h-36 bg-red-700'></div>
                                    </div>
                                    
                                        :
                                    
                                    <div className='w-full h-64 flex justify-center items-center'>
                                        <text className="text-2xl">Your Cart is empty</text>
                                    </div>
                            
                                        
                                    }
                                </div>

                            </Modal>
                        </div>
                        <div className="flex lg:hidden justify-center items-center basis-16 h-full border-l-2 border-bgc border-solid hover:cursor-pointer" onClick={() => setOpen(!dropDownOpen)}>
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>
            </div>
            {

                dropDownOpen ?
                    (
                        <nav className='w-full h-max flex flex-col lg:hidden relative'>
                            <Link to='/Catalog' className=' bg-white w-full h-max py-5 px-4 border-y-2 border-bgc border-solid hover:underline'>
                                Catalog
                            </Link>
                            <Link to='/Delivery' className=' bg-white w-full h-max py-5 px-4 border-y-2 border-bgc border-solid hover:underline'>
                                Delivery
                            </Link>
                            <Link to='/About' className=' bg-white w-full h-max py-5 px-4 border-y-2 border-bgc border-solid hover:underline'>
                                About
                            </Link>
                            <Link to='/Contact' className=' bg-white w-full h-max py-5 px-4 border-y-2 border-bgc border-solid hover:underline'>
                                Contacts
                            </Link>
                        </nav>
                    ) : null
            }


        </div>
    );
}

export default Header;