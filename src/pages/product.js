import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BiRightArrowAlt } from 'react-icons/bi'
import NavInfo from "../components/general_universal/navInfo";
import Discount from "../components/general_universal/discount";
import ProductCard from "../components/general_universal/productCard";
const base = require('../databa.json').toys
const cart = require('../databa.json').cart



const Product = () => {
    const [headerHeight, setHeaderHeight] = useState(0)
    const [prodCount, SetProdCount] = useState(1)
    const navigate = useNavigate()
    const { el } = useParams()
    let theToy = null

    useEffect(() => {
        setHeaderHeight(document.getElementsByClassName('mainHead')[0].clientHeight)
        window.scrollTo(0,0);

    })

    for (const key of Object.keys(base)) {
        let category = base[key]
        theToy = category.filter(item => item.title == el)[0]
        if (theToy) {
            break
        }
    }
    const theToyCat = Object.keys(base).filter(item => base[item].includes(theToy))

    const addToCart = () => {
        let hasToBeCreated = true
        cart.forEach(element => {
            if (element.title == theToy.title) {
                element.count += prodCount
                hasToBeCreated = false
            }
        });
        if (hasToBeCreated)
            cart.push({ count: prodCount, ...theToy })
        console.log(cart);
    }

    const incprodCount = () => {
        SetProdCount(prodCount + 1)
    }

    const decprodCount = () => {
        if ((prodCount - 1) >= 0) {
            SetProdCount(prodCount - 1)
        }
    }

    return (
        <div className="w-full min-h-screen h-max flex flex-col items-center " style={{ marginTop: headerHeight + 'px' }}>
            <NavInfo />
            <div className=" w-11/12 min-h-screen h-max flex flex-col justify-center items-start py-2 px-8 lg:px-14 bg-white border-2 border-[#EDEDED] rounded-3xl">
                <div className="w-full h-max flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-start">
                    <img src={theToy.photo} className='w-full lg:h-[70vh] lg:w-auto lg:mt-12' />
                    <div className="prose w-[26rem] h-max p-2 flex-col lg:flex lg:h-[80vh] lg:justify-center">
                        <h5 className="text-5xl my-8 lg:mt-0 lg:mb-4">{theToy.title}</h5>
                        <p className='text-[#999999]'   >
                            A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.
                        </p>{/* {theToy.description} */}
                        <p className="text-evergreenie text-4xl my-4">$ {theToy.Price}</p>
                        <div className="buyingInfo w-max h-max flex justify-between items-center">
                            <div className="flex w-20 h-[3.25rem]  justify-center items-center bg-bgc border-2 border-[#E5E5E5] rounded-3xl mr-8">
                                {prodCount}
                                <div className="btn w-min h-min">
                                    <IoMdArrowDropup className="text-sm bg-bgc hover:cursor-pointer" onClick={incprodCount} />
                                    <IoMdArrowDropdown className="text-sm bg-bgc hover:cursor-pointer" onClick={decprodCount} />
                                </div>
                            </div>
                            <button className="bg-evergreenie rounded-3xl text-white px-6 py-3 hover:shadow-md" onClick={addToCart}>Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-max my-4">
                    <text className="text-lg text-[#999999] mb-4">Product Details</text >
                    <hr />
                </div>
                <div className="flex flex-col lg:flex-row w-full h-max my-4">
                    <div className="flex flex-col w-full lg:w-2/3 h-max prose max-w-none ">
                        <h3>Add Your Product Description</h3>
                        <p> The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>

                        <h3> Simple & Elegant Template</h3>
                        <p>  Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                        <ul>
                            <li>Beautifully Designed</li>
                            <li>100% Responsive</li>
                            <li>CMS Content</li>
                            <li>Smooth Animations </li>
                        </ul>
                        <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
                        <h4> Perfect Choice for Your Business</h4>
                        <p>
                            Grabbing the consumer’s attention isn’t enough; you have to keep that attention for at least a few seconds. This is where your benefits come into play or a product description that sets your offer apart from the others.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3 my-8 lg:my-0 flex justify-center">
                        <div className="w-64 h-max flex flex-col justify-center items-center py-2 px-4 border-2 border-[#EDEDED] rounded-3xl">
                            <div className="w-full h-max flex justify-between items-center py-2 px-2 border-b-2 border-[#EDEDED]">
                                <text>Width</text>
                                <text>38 in</text>
                            </div>
                            <div className="w-full h-max flex justify-between items-center py-2 px-2 border-b-2 border-[#EDEDED]">
                                <text>Height</text>
                                <text>24 in</text>
                            </div>
                            <div className="w-full h-max flex justify-between items-center py-2 px-2 border-b-2 border-[#EDEDED]">
                                <text>Length</text>
                                <text>28.5 in</text>
                            </div>
                            <div className="w-full h-max flex justify-between items-center py-2 px-2">
                                <text>Weight</text>
                                <text>38 oz</text>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full h-max my-8 flex flex-col items-center'>
                <div className='w-11/12 h-16 flex justify-between border-b-2'>
                    <div className='flex text-2xl justify-center'>
                        Related Products
                    </div>
                    <div className='flex px-3'>
                        <div className='flex basis-24 h-5  bg-white grow-0 text-xs items-center px-2 shadow-md hover:cursor-pointer hover:shadow-evergreenie' onClick={() => navigate('/Catalog')}>
                            See All Toys
                            <BiRightArrowAlt />
                        </div>
                    </div>
                </div>
                <div className='products w-11/12 h-max grid gap-4 grid-cols-2 lg:grid-cols-4 py-4'>
                    {
                        base[theToyCat].filter((item, idx) => idx < 8).map(item => {
                            return <ProductCard info={item} />
                        })
                    }
                </div>
            </div>
            <Discount />

        </div>
    );
}

export default Product;