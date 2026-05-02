import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';
import { FaHeadset, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HelpSupport = () => {
  return (
    <div>
      <SharedBanner />
      <div className="my-14 min-h-screen">
        <Container>
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="md:text-4xl text-2xl font-semibold text-primary tracking-wide mb-2">
              Help & Support
            </h2>
            <p className="text-gray-500 max-w-2xl">
              We're here to help you with anything you need. Find answers to common questions or reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-base-200 p-8 rounded-2xl text-center shadow-sm border border-base-300">
              <FaHeadset className="text-5xl text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-base-content mb-2">Live Support</h3>
              <p className="text-gray-500 mb-6">Chat with our AI assistant or reach a human agent during business hours.</p>
              <button className="btn btn-outline btn-secondary w-full rounded-xl">Start Chat</button>
            </div>

            <div className="bg-base-200 p-8 rounded-2xl text-center shadow-sm border border-base-300">
              <FaEnvelope className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-base-content mb-2">Email Us</h3>
              <p className="text-gray-500 mb-6">Send us a detailed message and we'll get back to you within 24 hours.</p>
              <Link to="/contactUs" className="btn btn-primary text-white w-full rounded-xl shadow-lg">Contact Form</Link>
            </div>

            <div className="bg-base-200 p-8 rounded-2xl text-center shadow-sm border border-base-300">
              <FaQuestionCircle className="text-5xl text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-base-content mb-2">FAQ</h3>
              <p className="text-gray-500 mb-6">Browse our comprehensive list of frequently asked questions.</p>
              <Link to="/#faq" className="btn btn-outline btn-accent w-full rounded-xl">View FAQ</Link>
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
};

export default HelpSupport;
