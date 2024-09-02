import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';

const Blogs = () => {
  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="">
        <Container>
          <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
              <div
                role="main"
                className="flex flex-col items-center justify-center"
              >
                <h1 className="leading-9 text-center md:text-4xl text-2xl font-semibold text-error ">
                  Our Blogs
                </h1>
                <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                  Embark on a virtual journey of discovery with our travel
                  blogs. From breathtaking destinations to travel tips and
                  cultural insights, our articles are your passport to
                  adventure.
                </p>
              </div>
              <div className="lg:flex items-stretch md:mt-12 mt-8">
                <div className="lg:w-1/2">
                  <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                    {/* Card 1 */}
                    <div className="sm:w-1/2 relative">
                      <div>
                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          18 November 2023
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            Discovering Tranquility: Bali Escapade
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            Immerse yourself in the serenity
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              className="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <img
                        src="https://i.ibb.co/PZhWX7F/3.jpg"
                        className="w-full h-64"
                        alt="Bali Escapade"
                      />
                    </div>

                    {/* Card 2 */}
                    <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                      <div>
                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          24 August 2022
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            Artistry in Architecture: Exploring Modern Designs
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            Immerse yourself in the world of modern architecture
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              className="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <img
                        src="https://i.ibb.co/26dwBCW/2c.jpg"
                        className="w-full h-64"
                        alt="Exploring Modern Designs"
                      />
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="relative">
                    <div>
                      <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        8 September 2022
                      </p>
                      <div className="absolute bottom-0 left-0 md:p-10 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          Serenity in Nature: Exploring Outdoor Sitting Places
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Discover peaceful outdoor sitting areas that blend
                          seamlessly with nature.
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://i.ibb.co/qCTS5tr/2.jpg"
                      alt="Serenity in Nature"
                      className="w-full mt-8 md:mt-6 md:h-96 hidden sm:block"
                    />
                    <img
                      className="w-full mt-4 sm:hidden"
                      src="https://i.ibb.co/JFRxHx8/1.jpg"
                      alt="Serenity in Nature"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                  {/* Card 4 */}
                  <div className="relative">
                    <div>
                      <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        5 November 2022
                      </p>
                      <div className="absolute bottom-0 left-0 md:p-10 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          Explore Tranquil Retreats: Perfect Spots for Serenity
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Immerse yourself in the tranquility of unique retreats
                          that offer a perfect blend of comfort and serenity.
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://i.ibb.co/7Rmcr4S/1c.jpg"
                      alt="Explore Tranquil Retreats"
                      className="w-full sm:block hidden"
                    />
                    <img
                      className="w-full sm:hidden"
                      src="https://i.ibb.co/rb41Ctm/1b.jpg"
                      alt="Explore Tranquil Retreats"
                    />
                  </div>

                  <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                    {/* Card 5 */}
                    <div className="relative w-full">
                      <div>
                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          15 September 2022
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            Explore the Enchanting Beauty of Santorini
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            Embark on a journey to the breathtaking landscapes
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              className="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <img
                        src="https://i.ibb.co/rFCJ6T8/2b.jpg"
                        className="w-full h-64"
                        alt="Santorini Exploration"
                      />
                    </div>

                    {/* Card 6 */}
                    <div className="relative w-full sm:mt-0 mt-4">
                      <div>
                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          20 October 2022
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            Discover the Rich Cultural Heritage of Kyoto
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            Immerse yourself in the cultural richness of Kyoto.
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              className="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <img
                        src="https://i.ibb.co/H7b6Fs3/5.jpg"
                        className="w-full h-64"
                        alt="Kyoto Cultural Heritage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Blogs;
