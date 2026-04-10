import React from 'react'

// Export the types so they can be imported elsewhere
export interface HelpWithItem {
    id: number;
    title: string;
    image: string;
}

export interface WhatWeHelpWithProps {
    title?: string;
    helpWithData?: HelpWithItem[];
}

const WhatWeHelpWith: React.FC<WhatWeHelpWithProps> = ({ title, helpWithData }) => {
    return (
        <div className="what-we-help-with bg-black md:px-10 py-15">
            <div className="max-w-[1440px] mx-auto">
                {title && <h2 className="text-[24px] sm:text-[30px] md:text-[34px] text-center lg:text-[40px] font-extrabold leading-normal md:leading-[1.05] tracking-[-0.02em] text-white">{title}</h2>}

                {helpWithData && helpWithData.length > 0 ? (
                    <div className="help-with-grid justify-center flex flex-wrap gap-6 sm:gap-8 lg:gap-6 mt-6">
                        {helpWithData.map((item) => (
                            <div key={item.id} className="help-with-card w-full md:w-[calc(33.333%-12px)] lg:w-[calc(25%-15px)] flex flex-col items-center text-center gap-4">
                                {item.image && (
                                    <div className="help-with-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                )}
                                <h3 className="help-with-title">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    )
}

export default WhatWeHelpWith