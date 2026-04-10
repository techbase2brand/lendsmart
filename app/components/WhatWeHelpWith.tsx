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
        <div className="what-we-help-with bg-black md:px-10">
            <div className="max-w-[1440px] mx-auto">
                {title && <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white">{title}</h2>}

                {helpWithData && helpWithData.length > 0 ? (
                    <div className="help-with-grid flex flex-wrap gap-6 sm:gap-8 lg:gap-12 mt-6">
                        {helpWithData.map((item) => (
                            <div key={item.id} className="help-with-card">
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