import WeInsta from "../components/general_universal/weInsta";
import Discount from "../components/general_universal/discount";
import ProductCard from "../components/general_universal/productCard";
import NavInfo from "../components/general_universal/navInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const base = require('../databa.json').toys

const Catalog = (props) => {
    const [headerHeight, setHeaderHeight] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        setHeaderHeight(document.getElementsByClassName('mainHead')[0].clientHeight)
        window.scrollTo(0,0);
    })

    return (
        <div className="w-full h-max flex flex-col items-center" style={{ marginTop: headerHeight + 'px' }}>
            <div className='w-11/12 h-max'>
                <NavInfo />
                <div className="categories w-full h-max flex flex-row justify-center md:justify-between ">
                    <div className="w-28 h-full hidden md:flex justify-start items-center my-4">
                        <text className="text-2xl font-medium">All Toys</text>
                    </div>
                    <div className="w-max h-full flex justify-start items-center my-4">
                        <text className="text-sm text-white mx-2 p-2 hover:cursor-pointer bg-evergreenie rounded-full">All Toys</text>
                        <text className="text-sm mx-4 hover:underline cursor-pointer">Wooden Toys</text>
                        <text className="text-sm mx-4 hover:underline cursor-pointer">Stuffed Animals</text>
                    </div>
                </div>
                <hr />
                <div className='products w-full h-max grid gap-4 grid-cols-2 lg:grid-cols-4 py-4'>
                    {
                        Object.keys(base).map((key, index) => {
                            let category = base[key]
                            return (
                                Object.values(category).map(item => {
                                    return <ProductCard info={item} />
                                })
                            )
                        })
                        // base['Wooden Toys'].map(item=>{
                        //     return <ProductCard info={item} />
                        // })
                        // base['Stuffed Animals'].map(item=>{
                        //     return <ProductCard info={item} />
                        // })
                    }
                </div>
            </div>
            <Discount />
            <WeInsta />
        </div>
    );
}

export default Catalog;