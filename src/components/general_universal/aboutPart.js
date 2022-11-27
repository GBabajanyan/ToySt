import { BsFillPlayFill } from 'react-icons/bs'

const AboutPart = () => {
    return ( 
        <div className="w-full h-[60vh] bg-[url('https://ae01.alicdn.com/kf/Hd01075180d8f4f428ef8865a89b3cc3cp.jpg')] bg-cover bg-fixed flex justify-center items-center flex-col my-8">
            <p className="text-white font-medium">About the Shop</p>
            <p className="text-white font-semibold text-4xl">Watch Our Story</p>
            <p className="text-white w-3/4 text-center">There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer's mood.</p>
            <div className="w-16 h-16 bg-evergreenie rounded-full flex justify-center items-center hover:shadow-lg cursor-pointer">
                <BsFillPlayFill size={'1.5rem'} className='text-white'/>
            </div>
        </div>
     );
}
 
export default AboutPart;