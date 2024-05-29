
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div className='w-5/12 md:w-4/12 text-center mx-auto my-12' >
                <h5 className='text-[#D99904] mb-4'>{ subHeading }</h5>
                <div className='border-y-4 p-5 '>
                    <h3 className='md:text-[20px] lg:text-4xl font-semibold'>{ heading }</h3>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;