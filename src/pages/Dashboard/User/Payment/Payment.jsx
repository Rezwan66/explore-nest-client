import { loadStripe } from '@stripe/stripe-js';
import DashboardContainer from '../../../../components/Dashboard/DashboardContainer';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  return (
    <div>
      <DashboardContainer>
        <div className="my-16">
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            Payment{' '}
          </h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default Payment;
