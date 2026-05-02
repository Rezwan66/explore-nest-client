import Container from '../../Container';
import { FaGlobeAmericas, FaShieldAlt, FaPlaneDeparture, FaHeadset } from 'react-icons/fa';

const features = [
  {
    title: 'Worldwide Coverage',
    description: 'We offer tours and packages in over 100+ countries.',
    icon: <FaGlobeAmericas className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Secure Booking',
    description: 'Your payments and personal info are 100% safe with us.',
    icon: <FaShieldAlt className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Fast & Easy',
    description: 'Book your dream vacation in just a few clicks.',
    icon: <FaPlaneDeparture className="w-10 h-10 text-primary" />,
  },
  {
    title: '24/7 Support',
    description: 'Our customer service team is always here to help you.',
    icon: <FaHeadset className="w-10 h-10 text-primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-base-200">
      <Container>
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-2xl font-semibold mb-4 text-primary tracking-wide">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience the best travel services with our premium features designed to make your journey unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center flex flex-col items-center"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturesSection;
