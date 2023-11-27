import Lottie from 'lottie-react';
import dashAnim from '../../assets/animations/Animation-dashboard.json';
import DashboardContainer from '../../components/Dashboard/DashboardContainer';

const DashboardHome = () => {
  return (
    <div>
      <h2 className="md:text-5xl text-2xl font-semibold my-10 text-error text-center">
        Welcome to Dashboard
      </h2>
      <DashboardContainer>
        <div className="max-w-[500px] mx-auto">
          <Lottie animationData={dashAnim} loop={true}></Lottie>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default DashboardHome;
