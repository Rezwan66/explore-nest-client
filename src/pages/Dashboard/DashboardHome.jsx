import DashboardContainer from '../../components/Dashboard/DashboardContainer';
import useAdmin from '../../hooks/useAdmin';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import useAuth from '../../hooks/useAuth';

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 8900 },
  { name: 'Jun', revenue: 4390 },
];

const categoryData = [
  { name: 'Adventure', value: 400 },
  { name: 'Beach', value: 300 },
  { name: 'Wildlife', value: 300 },
  { name: 'Culture', value: 200 },
];

const COLORS = ['#0d9488', '#f97316', '#1e293b', '#64748b'];

const DashboardHome = () => {
  const { isAdmin } = useAdmin();
  const { user } = useAuth();

  return (
    <div className="w-full">
      <h2 className="md:text-4xl text-2xl font-bold my-8 text-primary text-center">
        Welcome Back, {user?.displayName || 'User'}!
      </h2>
      <DashboardContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 text-center">
            <h3 className="text-gray-500 font-semibold mb-2">Total Bookings</h3>
            <p className="text-4xl font-black text-secondary">156</p>
          </div>
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 text-center">
            <h3 className="text-gray-500 font-semibold mb-2">Total Revenue</h3>
            <p className="text-4xl font-black text-primary">$28,070</p>
          </div>
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 text-center">
            <h3 className="text-gray-500 font-semibold mb-2">Active Packages</h3>
            <p className="text-4xl font-black text-secondary">24</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
            <h3 className="text-xl font-bold text-primary mb-6">Monthly Revenue</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip cursor={{fill: 'transparent'}} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#0d9488" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
            <h3 className="text-xl font-bold text-primary mb-6">Bookings by Category</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default DashboardHome;
