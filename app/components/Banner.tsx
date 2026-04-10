import Image from "next/image";
import { memo } from "react";

const Banner = (props) => {
  const {
    bredcrumbs,
    title,
    description1,
    description2,
    serviceItems,
    callToAction,
    chatToAction,
    image,
  } = props;

  return (
    <div className="bg-[#F4FBE9] py-[60px] md:py-[90px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Breadcrumbs */}
            {bredcrumbs && (
              <p className="text-sm text-gray-600 mb-2">
                {bredcrumbs.join(" / ")}
              </p>
            )}

            {/* Title */}
            {title && (
              <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                {title}
              </h1>
            )}

            {/* Descriptions */}
            {description1 && (
              <p className="text-gray-700">
                {description1}
              </p>
            )}

            {description2 && (
              <p className="text-gray-700 mt-2">
                {description2}
              </p>
            )}

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
              {callToAction && (
                <a
                  href={callToAction.link}
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded transition"
                >
                  {callToAction.text}
                </a>
              )}

              {chatToAction && (
                <a
                  href={chatToAction.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 hover:border-black px-5 py-2.5 rounded transition"
                >
                  {chatToAction.text}
                </a>
              )}
            </div>

            {/* Service Items */}
            {serviceItems?.length > 0 && (
              <ul className="mt-6 space-y-4">
                {serviceItems.map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <span className="shrink-0">{item.icon}</span>
                    <span className="text-sm md:text-base text-gray-800">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}

          </div>

          {/* RIGHT IMAGE */}
          <div>
            {image && (
              <Image
                src={image}
                alt="banner"
                width={1000}
                height={522}
                priority
                quality={75}
                className="w-full h-auto object-contain"
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default memo(Banner);