import Container from '../../Container';

const faqs = [
  {
    q: 'What is included in the tour packages?',
    a: 'Our tour packages typically include accommodation, transportation during the tour, breakfast, a dedicated guide, and entrance fees for listed attractions. Flights are usually separate unless specified.',
  },
  {
    q: 'Is it safe to pay online through ExploreNest?',
    a: 'Absolutely. We use Stripe for payment processing, which is one of the most secure payment gateways in the world. Your card details are never stored on our servers.',
  },
  {
    q: 'Can I cancel or reschedule my booking?',
    a: 'Yes, you can cancel or reschedule. Cancellations made 30 days prior to the trip receive a full refund. Please check our Terms & Conditions for detailed cancellation policies.',
  },
  {
    q: 'Do you offer custom tour packages?',
    a: 'Yes! While we have predefined packages, you can contact our support team to customize an itinerary tailored specifically to your needs and group size.',
  },
];

const FAQSection = () => {
  return (
    <div className="py-20 bg-base-100">
      <Container>
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-2xl font-semibold mb-4 text-primary tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Got questions? We've got answers. Find out everything you need to know about booking with us.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="collapse collapse-arrow bg-base-200 shadow-sm border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked={i === 0} /> 
              <div className="collapse-title text-xl font-medium text-primary">
                {faq.q}
              </div>
              <div className="collapse-content">
                <p className="text-gray-500">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
