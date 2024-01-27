import { loadStripe } from '@stripe/stripe-js';
import DashboardContainer from '../../../../components/Dashboard/DashboardContainer';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const [booking, setBooking] = useState({});
  const { id } = useParams();
  // console.log(id);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure(`/bookings/${id}`).then(res => setBooking(res.data));
  }, [axiosSecure, id]);
  console.log(booking);
  return (
    <div>
      <DashboardContainer>
        <div className="my-16">
          <h2 className="md:text-3xl text-xl font-semibold mb-10 text-error text-center">
            {' '}
            Payment for {booking?.packageName}
          </h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default Payment;
