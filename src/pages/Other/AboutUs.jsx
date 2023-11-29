import {
  FaFirstAid,
  FaGlobeAmericas,
  FaMap,
  FaNewspaper,
} from 'react-icons/fa';
import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';

const AboutUs = () => {
  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="my-14">
        <Container>
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            About Us{' '}
          </h2>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                  <img
                    alt="Travel Enthusiasts"
                    src="https://i.ibb.co/hZZ3FKm/1a.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-white">
                      Explore the World with Us
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Embark on a journey of discovery and adventure with our
                      travel community. Whether you&apos;re a seasoned traveler
                      or planning your first trip, we provide a platform to
                      share experiences and make your travel dreams a reality.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    {/* Card 1 - Travel Services */}
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink-500">
                          <i className="fas fa-globe-americas text-white">
                            <FaGlobeAmericas />
                          </i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Global Travel
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Explore our comprehensive travel services for a
                          seamless global travel experience.
                        </p>
                      </div>
                    </div>

                    {/* Card 2 - Dynamic Travel Components */}
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink-500">
                          <i className="fas fa-map text-white">
                            <FaMap />
                          </i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Explore Maps
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Discover our interactive maps to plan your journey
                          with ease.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    {/* Card 3 - Informative Pages */}
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink-500">
                          <i className="fas fa-newspaper text-white">
                            <FaNewspaper />
                          </i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Informative Content
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Explore our pages that provide detailed insights into
                          travel destinations.
                        </p>
                      </div>
                    </div>

                    {/* Card 4 - Travel Documentation */}
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink-500">
                          <i className="fas fa-file-alt text-white">
                            <FaFirstAid />
                          </i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Travel Aid
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Discover our comprehensive services designed for
                          travelers.
                        </p>
                      </div>
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
export default AboutUs;
