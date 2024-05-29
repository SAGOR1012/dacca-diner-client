
import { useForm } from "react-hook-form";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <SectionTitle subHeading="---What's new?---" heading="ADD AN ITEM"></SectionTitle>
            {/* form section */ }


            <form onSubmit={ handleSubmit(onSubmit) } className="mx-14  bg-gray-300 rounded-lg">
                <div className="p-8">
                    <div className="flex gap-4">
                        <input { ...register("name", { required: true }) } type="Name" name="name" className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Recipe Name *" />
                    </div>
                    {/* category name */ }
                    <div className="my-6 flex gap-4">
                        <select { ...register('category', { required: true }) }
                            name="select" id="select" className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                            <option className="font-semibold text-slate-300" disabled selected >Category *</option>
                            <option className="font-semibold text-slate-300" value="salad">Salad</option>
                            <option className="font-semibold text-slate-300" value="pizza">Pizza</option>
                            <option className="font-semibold text-slate-300" value="soup">Soup</option>
                            <option className="font-semibold text-slate-300" value="desert">Desert</option>
                            <option className="font-semibold text-slate-300" value="drinks">Drinks</option>
                        </select>

                        {/* price */ }
                        <input  { ...register('price', { required: true }) }
                            type="text" name="price" className=" block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Price *" />
                    </div>

                    {/* description recipe */ }
                    <div className="">
                        <textarea { ...register('recipe', { required: true }) }
                            name="textarea" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">Recipe Description</textarea>
                    </div>
                    {/* input file  */ }
                    <div>
                        <input  { ...register('image', { required: true }) }
                            type="file" className="file-input border-none w-full max-w-xs" />

                    </div>
                    {/* submit btn */ }
                    <button className="btn mt-5">
                        Add Item <FaUtensils className="ml-3"></FaUtensils>
                    </button>
                </div>
            </form>


        </div>
    );
};

export default AddItem;