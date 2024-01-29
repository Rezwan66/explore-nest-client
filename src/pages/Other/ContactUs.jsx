import { useRef } from 'react';
import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        result => {
          // console.log(result);
          if (result.status === 200) {
            form.current.reset();
            toast.success('Email sent to admin');
          } else {
            toast.error(result.text);
          }
        },
        error => {
          // console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="mt-14 mb-40">
        <Container>
          <h2 className="md:text-4xl text-2xl font-semibold mb-6 text-error text-center">
            {' '}
            Contact Us{' '}
          </h2>
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 sm:rounded-lg">
                  <p className="text-normal italic font-medium mt-2">
                    Have questions or want to start your travel journey? Fill
                    out the form to get in touch with us.
                  </p>

                  <div className="flex items-center mt-8 text-pink-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-pink-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      Explore Next GmbH, Dhaka.
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-pink-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-pink-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      +49182834784
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-pink-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-pink-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      explore@nest.com
                    </div>
                  </div>
                </div>
                {/* contact form using Email.js */}
                {/* <form className="p-6 flex flex-col justify-center">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="tel" className="hidden">
                      Number
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telephone Number"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </form> */}
                {/* from email js */}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="p-6 flex flex-col justify-center"
                >
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                  <label htmlFor="mess" className="hidden">
                    Number
                  </label>
                  <textarea
                    id="mess"
                    name="message"
                    placeholder="Your Message"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                  <input
                    type="submit"
                    value="Send"
                    className="md:w-32 bg-indigo-600 cursor-pointer hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                  />
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ContactUs;
