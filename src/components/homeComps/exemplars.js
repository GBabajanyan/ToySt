import { BiRightArrowAlt } from 'react-icons/bi'
import ProductCard from '../general_universal/productCard';

const base = require('../../databa.json').toys


const Section = (props) => {
    return (
        <div className='w-full h-max  flex flex-col items-center'>
            <div className='w-11/12 h-16 flex justify-between border-b-2'>
                <div className='flex text-2xl justify-center'>
                    {props.type}
                </div>
                <div className='flex px-3'>
                    <div className='flex basis-24 h-5  bg-white grow-0 text-xs items-center px-2 shadow-md hover:cursor-pointer hover:shadow-evergreenie'>
                        See All Toys
                        <BiRightArrowAlt />
                    </div>
                </div>
            </div>
            <div className='products w-11/12 h-max grid gap-4 grid-cols-2 lg:grid-cols-4 py-4'>
                {
                    props.ducts.filter((item, idx) => idx < 4).map(item=>{
                        return <ProductCard info={item} />
                    })
                }
            </div>
            
        </div>
    );
}


const Exemplars = () => {
    return (
        <div className='exemplars w-full h-max pb-8'>
            {
                Object.keys(base).map((key, index) => {
                    return <Section type={key} ducts={base[key]} />
                })
            }

        </div>
    );
}

export default Exemplars;