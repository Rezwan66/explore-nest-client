import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';

const Community = () => {
  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="my-14">
        <Container>
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            Sign up to our Community{' '}
          </h2>
          <div className="container mx-auto shadow-lg rounded-lg">
            <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
              <div className="font-semibold text-2xl">Join the chat</div>
              <div className="w-1/2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="search IRL"
                  className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
                />
              </div>
              <div className="h-12 w-12 p-2 bg-pink-500 rounded-full text-white font-semibold flex items-center justify-center">
                RA
              </div>
            </div>
            <div className="flex flex-row justify-between bg-white">
              <div className="flex flex-col md:w-2/5 border-r-2 overflow-y-auto">
                <div className="border-b-2 py-4 px-2">
                  <input
                    type="text"
                    placeholder="Search for travel companions"
                    className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                  />
                </div>
                <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">TravelBuddy123</div>
                    <span className="text-gray-500">
                      Lets explore together!
                    </span>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-2 items-center border-b-2">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/otT2199XwI8/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      Everest Adventure
                    </div>
                    <span className="text-gray-500">
                      Hi fellow adventurers, ready for Everest?
                    </span>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">TravelTech Talk</div>
                    <span className="text-gray-500">
                      Exciting discussions about the latest travel technology!
                    </span>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-2 items-center border-b-2">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      Scenic Destinations
                    </div>
                    <span className="text-gray-500">
                      Join us in discovering picturesque places around the
                      world!
                    </span>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-2 items-center border-b-2">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      Local Cuisine Explorers
                    </div>
                    <span className="text-gray-500">
                      Share your favorite travel food experiences!
                    </span>
                  </div>
                </div>
                <div className="flex flex-row py-4 px-2 items-center border-b-2">
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      Hidden Gems Exploration
                    </div>
                    <span className="text-gray-500">
                      Discover the hidden gems of the world with fellow
                      travelers!
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:flex hidden px-5 flex-col justify-between">
                <div className="flex flex-col mt-5">
                  <div className="flex justify-end mb-4">
                    <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      Welcome to the Travel Talk group, everyone!
                    </div>
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-start mb-4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                    />
                    <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                      Share your latest travel experiences, tips, or ask
                      questions about upcoming adventures!
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div>
                      <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                        Have you discovered any hidden gems recently? Share them
                        with the group!
                      </div>

                      <div className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                        Planning a trip soon? Let us know, and maybe you will
                        find a travel buddy!
                      </div>
                    </div>
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-start mb-4">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                    />
                    <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                      Happy travels, everyone!
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <input
                    className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                    type="text"
                    placeholder="Type your travel message here..."
                  />
                </div>
              </div>

              <div className="w-2/5 border-l-2 px-5">
                <div className="flex flex-col">
                  <div className="font-semibold text-xl py-4">
                    Travel Enthusiasts Group
                  </div>
                  <img
                    src="https://i.ibb.co/gr0zjpL/6.jpg"
                    className="object-cover rounded-xl h-64"
                    alt="Travel Enthusiasts"
                  />
                  <div className="font-semibold py-4">Created 22 Sep 2021</div>
                  <div className="font-light">
                    Share your love for travel and explore new destinations with
                    fellow enthusiasts!
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
export default Community;
