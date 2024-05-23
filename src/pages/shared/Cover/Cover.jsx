import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero md:h-[500px]">

                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md py-20">
                            <div className='  border-y-4 pt-4 '>
                                <h1 className="mb-5 mx-5 text-3xl md:text-6xl font-bold poetsen-one-regular  uppercase">{title}</h1>
                            </div>

                        </div>
                    </div>
                </div>{ }
            </div>
        </Parallax>

    );
};

export default Cover;