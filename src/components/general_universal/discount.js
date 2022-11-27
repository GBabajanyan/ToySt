import { FaTelegramPlane } from 'react-icons/fa'

const Discount = () => {
    return (
        <div className="w-full h-max py-8 flex justify-center items-center ">
            <div className="w-11/12 h-[27rem] lg:h-52 bg-white rounded-2xl shadow-xl flex justify-around items-center flex-col lg:flex-row lg:px-4">
                <div className=' w-full lg:w-1/2 h-1/2 lg:h-1/3 flex justify-end items-center flex-col lg:flex-row  lg:justify-around'>
                    <div className="w-16 h-16 bg-evergreenie rounded-full flex justify-center items-center ">
                        <FaTelegramPlane size={'1.75rem'} className='text-white' />
                    </div>
                    <text className='text-xl text-center lg:text-left lg:w-4/5 lg:text-4xl'>Subscribe to our newsletter & get 10% discount!</text>
                </div>
                <div className='w-full h-1/2 flex justify-center items-center '>
                    <form className='w-3/4 h-1/2 flex justify-between items-center flex-col  lg:flex-row '>
                        <label className='w-full h-max flex justify-center items-center '>
                            <input type="email" name="name"  className='bg-bgc w-full p-2 rounded-full focus-within:bg-white hover:bg-white border-2 border-[#E5E5E5] focus-within:border-evergreenie ' />
                        </label>
                        <input type="submit" value="Subscribe"  className='w-full lg:w-1/3 h-12 text-lg font-medium flex items-center justify-center bg-[#A5C926] rounded-3xl text-white hover:shadow-lg cursor-pointer'/>
                    </form>                    
                </div>
            </div>
        </div>
    ); 
}

export default Discount;