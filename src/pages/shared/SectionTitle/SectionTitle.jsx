
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div className='max-w-[424px] text-center mx-auto mb-12' >
                <h5 className='text-[#D99904] mb-4'>{subHeading}</h5>
                <div className='border-y-slate-700 border-t-2 border-b-2 p-5 '>
                    <h3 className='text-white'>{heading}</h3>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;