import { useEffect, useState } from 'react';
import DashboardContainer from '../../../components/Dashboard/DashboardContainer';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UserPayments = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure(`/payments?email=${user?.email}`).then(res =>
      setPayments(res.data)
    );
  }, [axiosSecure, user?.email]);
  //   console.log(payments);
  const totalPayments = payments?.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <DashboardContainer>
        <div className="my-16">
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            My Payments{' '}
          </h2>
          <div className="w-[350px] md:w-[650px] lg:w-[750px]">
            <div className="flex justify-end items-center">
              <h2 className="text-lg font-bold">
                Total Payments: $ {totalPayments}
              </h2>
            </div>
            <div className="mt-8">
              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="table">
                  {/* head */}
                  <thead className="bg-[#f73378]">
                    <tr className="uppercase text-white">
                      <th>#</th>
                      <th>Payment Date</th>
                      <th>Package</th>
                      <th>Transaction ID</th>
                      <th>Tour Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {payments?.map((item, idx) => (
                      <tr key={item._id}>
                        <th>{idx + 1}</th>

                        <td>
                          {new Date(item?.date).toLocaleDateString('en-GB')}
                        </td>
                        <td>{item?.packageName}</td>
                        <td>{item?.transactionId}</td>
                        <td>
                          {new Date(item?.tourDate).toLocaleDateString('en-GB')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
};
export default UserPayments;
