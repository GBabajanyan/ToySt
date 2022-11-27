const data = [
    'https://assets.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg',
    'https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg',
    "https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg",
    "https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg",
    "https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg",
    "https://assets.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg"
]

const WeInsta = () => {
    return (
        <div className="w-full h-max flex items-center flex-col py-8 pb-16">
            <h2 className="text-3xl">We're on Instagram!</h2>
            <div className="w-11/12 grid grid-cols-3 lg:grid-cols-6 gap-4 mt-20 my-16">
                {data.map(item => {
                    return (
                        <a href='https://instagram.com/' target="_blank">
                            <img src={item} className=' min-w-32 rounded-xl' />
                        </a>
                    )
                })}
            </div>
            <a href="https://instagram.com/" className="w-40 h-14 px-4 flex items-center justify-center bg-evergreenie rounded-3xl text-white font-medium hover:shadow-lg ">
                See More Photos
            </a>
        </div>
    );
}

export default WeInsta;