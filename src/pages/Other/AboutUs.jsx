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
          <div className="flex flex-col items-center mb-10">
            <h2 className="md:text-4xl text-2xl font-semibold text-primary text-center tracking-wide mb-2">
              About Us
            </h2>
            <p className="text-gray-500 max-w-2xl text-center">
              Discover who we are and why we are passionate about showing you the world.
            </p>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-2xl bg-primary">
                  <img
                    alt="Travel Enthusiasts"
                    src="https://i.ibb.co/hZZ3FKm/1a.jpg"
                    className="w-full align-middle rounded-t-2xl object-cover h-64"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-white">
                      Explore the World with Us
                    </h4>
                    <p className="text-md font-light mt-2 text-primary-content/90 leading-relaxed">
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
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-secondary">
                          <FaGlobeAmericas className="text-2xl" />
                        </div>
                        <h6 className="text-xl mb-1 font-bold text-base-content">
                          Global Travel
                        </h6>
                        <p className="mb-4 text-gray-500 leading-relaxed">
                          Explore our comprehensive travel services for a
                          seamless global travel experience.
                        </p>
                      </div>
                    </div>

                    {/* Card 2 - Dynamic Travel Components */}
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-accent">
                          <FaMap className="text-2xl" />
                        </div>
                        <h6 className="text-xl mb-1 font-bold text-base-content">
                          Explore Maps
                        </h6>
                        <p className="mb-4 text-gray-500 leading-relaxed">
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
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-accent">
                          <FaNewspaper className="text-2xl" />
                        </div>
                        <h6 className="text-xl mb-1 font-bold text-base-content">
                          Informative Content
                        </h6>
                        <p className="mb-4 text-gray-500 leading-relaxed">
                          Explore our pages that provide detailed insights into
                          travel destinations.
                        </p>
                      </div>
                    </div>

                    {/* Card 4 - Travel Documentation */}
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-secondary">
                          <FaFirstAid className="text-2xl" />
                        </div>
                        <h6 className="text-xl mb-1 font-bold text-base-content">
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
