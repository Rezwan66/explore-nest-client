// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import './CheckoutForm.css';
import useAuth from '../../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { createPaymentIntent } from '../../../../utilities/payment';
import toast from 'react-hot-toast';

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // Create Payment Intent
  useEffect(() => {
    // create payment intent
    if (booking.price > 0) {
      createPaymentIntent({ price: booking?.price }).then(data => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
    }
  }, [booking]);

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('payment method', paymentMethod);
    }

    setProcessing(true);
    // Ekhane taka katbe
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log('payment intent', paymentIntent);
    if (paymentIntent.status === 'succeeded') {
      const paymentInfo = {
        ...booking,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      try {
        await axiosSecure.post('/payments', paymentInfo);
        await axiosSecure.delete(`/bookings/${booking?._id}`);
        const text = `Payment Successful! ${paymentIntent.id}`;
        toast.success(text);
        navigate('/dashboard/userPayments');
      } catch (error) {
        toast.error(error.message);
      } finally {
        setProcessing(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 cursor-pointer"
        >
          Pay $ {booking?.price}
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
