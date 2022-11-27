const CatBox = (props) => {
    const reverser = props.rev ? 'flex-row-reverse' : ''
    const reverser2 = props.rev ? 'end' : 'start'
    return (
        <div className={"w-[27rem] h-48  my-5 flex items-end items-self-center justify-self-center"}>
            <div className={"w-[27rem] h-32 bg-" + props.color + " rounded-2xl flex " + reverser + " relative"}>
                <img src={props.img} className="w-48 h-48 block relative bottom-16" alt="" />
                <div className={"flex flex-col items-" + reverser2 + " justify-center "}>
                    <h3 className="text-center text-2xl  font-sm text-white mb-1">{props.title}</h3>
                    <div className="w-28 h-10 p-1 flex items-center justify-center bg-white rounded-3xl text-xs font-medium hover:shadow-lg cursor-pointer">
                        Shop Now
                    </div>
                </div>

            </div>
        </div>
    );
}

const CatIntro = () => {
    return (
        <div className="catIntro w-full h-max  py-12 grid gap-4 grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2" >
            <CatBox color="evergreenie" img="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png" title="Stuffed Animals" rev={false} />
            <CatBox color="reddie" img="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png" title="Wooden Toys" rev={true} />
        </div>
    );
}

export default CatIntro;
