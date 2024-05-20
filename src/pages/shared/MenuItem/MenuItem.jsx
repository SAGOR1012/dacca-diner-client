
const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item;


    return (
        <div className=" flex space-x-2">
            <img className="w-[120px]" style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" />

            <div>
                <h3 className="uppercase text-xl">{name}---------------</h3>
                <p className="text-stone-400">{recipe}</p>
            </div>
            <p className="text-[#D99904] text-xl ">${price}</p>


        </div>
    );
};

export default MenuItem;