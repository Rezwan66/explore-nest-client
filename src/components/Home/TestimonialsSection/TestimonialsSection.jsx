import Container from '../../Container';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Adventure Traveler',
    content: 'ExploreNest made my trip to the Swiss Alps absolutely seamless. The guide was knowledgeable and the itinerary was perfect!',
    image: 'https://i.ibb.co/30tGtxP/portrait-white-man-isolated.jpg',
  },
  {
    id: 2,
    name: 'David & Emma',
    role: 'Honeymooners',
    content: 'We booked our Maldives honeymoon through them and it was a dream come true. Highly recommend their premium packages.',
    image: 'https://i.ibb.co/7X0GqH2/close-up-portrait-nice-boy-smiling.jpg',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Solo Backpacker',
    content: 'As a solo traveler, I felt incredibly safe and supported throughout my journey across Southeast Asia. Amazing experience.',
    image: 'https://i.ibb.co/M601jXb/bohemian-man-with-his-arms-crossed.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-base-100">
      <Container>
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-2xl font-semibold mb-4 text-primary tracking-wide">
            What Our Travelers Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. Read the experiences of thousands of happy travelers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-base-200 p-8 rounded-2xl relative shadow-sm border border-base-300">
              <div className="text-4xl text-secondary absolute top-4 left-6 opacity-20">"</div>
              <p className="text-gray-500 italic mb-6 relative z-10">{t.content}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <span className="text-xs text-primary">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
