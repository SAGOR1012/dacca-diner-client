
const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item;


    return (
        <div className=" flex gap-3 space-x-1  md:space-x-2">
            <img className=" w-20 h-20 md:w-[120px]" style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" />

            <div>
                <h3 className="uppercase  md:text-xl">{name}---------------</h3>
                <p className="text-stone-400">{recipe}</p>
            </div>
            <p className="text-[#D99904] md:text-xl ">${price}</p>


        </div>
    );
};

export default MenuItem;