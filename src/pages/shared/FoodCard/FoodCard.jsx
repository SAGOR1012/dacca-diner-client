
const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;


    return (

        <div className="card card-compact  md:w-96 bg-base-100 shadow-xl mb-10 hover:bg-slate-100 hover:transition">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-[#111827] text-white font-bold absolute right-0 mr-4 mt-4 rounded-md px-3 py-2">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 border-b-[#D99904] text-[#D99904]">ADD TO CART</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;