import { Link, useLocation } from "react-router-dom";
import { GoArrowRight } from 'react-icons/go'


const NavInfo = () => {
    let location = useLocation()
    let locationElementsWithoutSpace = location.pathname.split('/').splice(1)
    let locationElements= locationElementsWithoutSpace.map(item=>{
        let itemsWithSpaces=item.split('%20')
        if(itemsWithSpaces.length>1){
            return itemsWithSpaces.join(' ')
        } else{
            return item
        }
    })
    return (
        <nav className="categories w-11/12 h-10 flex flex-row justify-start items-center mb-24 mt-16 rounded-full border-[#E5E5E5] border-2 text-[#999999] px-4">
            <Link to='/' className="hover:underline mx-1">Home</Link>
            {
                locationElements.map(item => {
                    if (locationElements.indexOf(item)!==(locationElements.length-1)) {
                        return (
                            <div className="flex w-max h-full justify-center items-center">
                                <GoArrowRight />
                                <Link to={'/' + item} className="hover:underline mx-1">{item}</Link>
                            </div>
                        )
                    } else {
                        return (
                            <div className="flex w-max h-full justify-center items-center">
                                <GoArrowRight />
                                <text className="mx-1">{item}</text>
                            </div>
                        )
                    }
                })
            }
        </nav>
    );
}

export default NavInfo;