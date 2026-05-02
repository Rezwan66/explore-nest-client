import Container from '../../Container';
import { FaUsers, FaMapMarkedAlt, FaStar, FaSmile } from 'react-icons/fa';

const StatisticsSection = () => {
  const stats = [
    { id: 1, name: 'Happy Travelers', value: '10,000+', icon: <FaSmile /> },
    { id: 2, name: 'Tours Completed', value: '5,000+', icon: <FaMapMarkedAlt /> },
    { id: 3, name: 'Expert Guides', value: '150+', icon: <FaUsers /> },
    { id: 4, name: '5-Star Reviews', value: '8,500+', icon: <FaStar /> },
  ];

  return (
    <div className="py-16 bg-primary text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center p-4">
              <div className="text-4xl mb-4 text-secondary">{stat.icon}</div>
              <div className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium opacity-90 tracking-wider uppercase">
                {stat.name}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatisticsSection;
