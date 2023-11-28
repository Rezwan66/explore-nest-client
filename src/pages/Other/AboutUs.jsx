import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';

const AboutUs = () => {
  return (
    <div>
      <SharedBanner></SharedBanner>

      <div className="my-14">
        <Container>
          <h2 className="md:text-4xl text-2xl font-semibold mb-10 text-error text-center">
            {' '}
            About Us{' '}
          </h2>
        </Container>
      </div>
    </div>
  );
};
export default AboutUs;
