import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    let navigate=useNavigate()
    return (
            <div className="w-full h-[50vh] flex flex-col justify-center items-center bg-white rounded-lg border border-gray-200 shadow-md hover:cursor-pointer" onClick={()=>navigate('/Catalog/'+props.info.title)}>
                <img className="rounded-t-lg h-[25vh]" src={props.info.photo} alt="" />
                <div className="p-5 flex flex-col justify-center items-center ">
                    <p className="mb-2 text-lg  tracking-tight text-black">{props.info.title}</p>
                    <p className="h-5 items-center py- px-3 text-sm font text-center text-white bg-evergreenie rounded-full">
                        ${props.info.Price} USD                        
                    </p>
                </div>
            </div>
    );
}

export default ProductCard;