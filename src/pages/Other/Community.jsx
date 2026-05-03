import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';

const Community = () => {
  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="my-14">
        <Container>
          <div className="text-center mb-10">
            <h2 className="md:text-4xl text-3xl font-bold text-primary mb-4">
              Join the Community
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Connect with fellow travelers, share experiences, and find your next travel buddy!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row shadow-xl rounded-3xl overflow-hidden border border-base-300 bg-base-100 min-h-[700px] max-h-[800px]">
            
            {/* Left Sidebar - Chat List */}
            <div className="w-full lg:w-1/3 border-r border-base-300 flex flex-col bg-base-100">
              {/* Header */}
              <div className="p-5 border-b border-base-300 bg-base-200/50 flex justify-between items-center">
                <div className="font-bold text-xl text-base-content">Messages</div>
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-10 shadow-sm">
                    <span className="font-bold">ME</span>
                  </div>
                </div>
              </div>
              
              {/* Search */}
              <div className="p-4 border-b border-base-300">
                <input
                  type="text"
                  placeholder="Search groups or friends..."
                  className="input input-bordered w-full rounded-2xl bg-base-200 focus:outline-primary border-none shadow-inner"
                />
              </div>

              {/* Chat List */}
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                {[
                  { name: "TravelBuddy123", msg: "Let's explore together!", seed: "Felix", active: false },
                  { name: "Everest Adventure", msg: "Hi fellow adventurers, ready for Everest?", seed: "Aneka", active: false },
                  { name: "TravelTech Talk", msg: "Exciting discussions about travel tech!", seed: "Jasper", active: true },
                  { name: "Scenic Destinations", msg: "Join us in discovering picturesque places!", seed: "Nala", active: false },
                  { name: "Cuisine Explorers", msg: "Share your favorite travel food!", seed: "Buster", active: false },
                  { name: "Hidden Gems", msg: "Discover hidden gems of the world!", seed: "Loki", active: false },
                  { name: "Solo Travelers", msg: "Anyone visiting Kyoto this spring?", seed: "Mia", active: false },
                ].map((chat, i) => (
                  <div key={i} className={`flex flex-row p-4 items-center border-b border-base-200 cursor-pointer transition-colors hover:bg-base-200 ${chat.active ? 'bg-primary/10 border-l-4 border-l-primary' : 'border-l-4 border-l-transparent'}`}>
                    <div className="avatar">
                      <div className="w-12 rounded-full border border-base-300 bg-base-100">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.seed}`} alt="avatar" />
                      </div>
                    </div>
                    <div className="ml-4 w-full">
                      <div className={`text-lg font-semibold ${chat.active ? 'text-primary' : 'text-base-content'}`}>{chat.name}</div>
                      <div className="text-base-content/60 text-sm truncate w-48">{chat.msg}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle - Chat Area */}
            <div className="w-full lg:w-2/3 flex flex-col bg-base-200/30 relative">
              {/* Chat Header */}
              <div className="p-5 border-b border-base-300 bg-base-100 flex items-center justify-between z-10 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full border border-base-300 bg-base-100">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper" alt="Group avatar" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-base-content">TravelTech Talk</h3>
                    <p className="text-sm text-secondary font-medium">14 Members • 3 Online</p>
                  </div>
                </div>
                <button className="btn btn-circle btn-ghost text-base-content/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full border border-base-300 bg-base-100">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="avatar" />
                    </div>
                  </div>
                  <div className="chat-header text-base-content/60 text-xs mb-1 ml-1">
                    Aneka <time className="text-xs opacity-50 ml-1">12:45</time>
                  </div>
                  <div className="chat-bubble bg-base-100 text-base-content shadow-sm border border-base-200">Welcome to the TravelTech Talk group, everyone!</div>
                </div>
                
                <div className="chat chat-end">
                  <div className="chat-image avatar placeholder">
                    <div className="bg-primary text-primary-content w-10 rounded-full shadow-sm">
                      <span className="font-bold text-sm">ME</span>
                    </div>
                  </div>
                  <div className="chat-header text-base-content/60 text-xs mb-1 mr-1">
                    You <time className="text-xs opacity-50 ml-1">12:46</time>
                  </div>
                  <div className="chat-bubble chat-bubble-primary shadow-sm text-white">Thanks! Excited to learn about the latest gadgets for my next trip. I've been eyeing some new camera gear.</div>
                </div>

                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full border border-base-300 bg-base-100">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper" alt="avatar" />
                    </div>
                  </div>
                  <div className="chat-header text-base-content/60 text-xs mb-1 ml-1">
                    Jasper <time className="text-xs opacity-50 ml-1">12:50</time>
                  </div>
                  <div className="chat-bubble bg-base-100 text-base-content shadow-sm border border-base-200">Has anyone tried the new AI translation earbuds yet? They seem perfect for exploring remote areas where English isn't common.</div>
                </div>
                
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full border border-base-300 bg-base-100">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nala" alt="avatar" />
                    </div>
                  </div>
                  <div className="chat-header text-base-content/60 text-xs mb-1 ml-1">
                    Nala <time className="text-xs opacity-50 ml-1">13:15</time>
                  </div>
                  <div className="chat-bubble bg-base-100 text-base-content shadow-sm border border-base-200">Yes! I used them in rural Japan last month and they were a total game changer. Highly recommend.</div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-5 border-t border-base-300 bg-base-100 z-10">
                <div className="flex gap-3 items-center">
                  <button className="btn btn-circle btn-ghost text-base-content/60 hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    className="input input-bordered w-full rounded-full bg-base-200 focus:outline-primary border-none shadow-inner"
                  />
                  <button className="btn btn-circle btn-primary shadow-lg shadow-primary/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
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
