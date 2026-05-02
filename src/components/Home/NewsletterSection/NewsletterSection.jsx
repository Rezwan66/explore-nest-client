import Container from '../../Container';
import toast from 'react-hot-toast';

const NewsletterSection = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success('Successfully subscribed to newsletter!');
    e.target.reset();
  };

  return (
    <div className="py-20 bg-secondary/5">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white dark:bg-base-300 p-8 md:p-12 rounded-3xl shadow-lg border border-primary/20">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get Special Offers & News
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to our newsletter to receive the latest updates on exciting new packages, exclusive discounts, and inspiring travel stories directly to your inbox.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered input-primary w-full shadow-sm rounded-full px-6"
                required
              />
              <button type="submit" className="btn btn-primary rounded-full px-8 text-white shadow-md hover:scale-105 transition-transform">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsletterSection;
