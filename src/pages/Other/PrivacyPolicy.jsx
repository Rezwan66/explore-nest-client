import Container from '../../components/Container';
import SharedBanner from '../../components/Shared/SharedBanner';

const PrivacyPolicy = () => {
  return (
    <div>
      <SharedBanner />
      <div className="my-14 min-h-screen">
        <Container>
          <div className="max-w-4xl mx-auto bg-base-100 p-8 md:p-12 rounded-3xl shadow-lg border border-base-200">
            <h1 className="text-4xl font-bold text-primary mb-8 text-center border-b pb-4">Privacy Policy & Terms</h1>
            
            <div className="space-y-8 text-base-content/80">
              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to ExploreNest. We are committed to protecting your personal information and your right to privacy. 
                  If you have any questions or concerns about our policy, or our practices with regards to your personal information, 
                  please contact us at privacy@explorenest.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">2. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect personal information that you voluntarily provide to us when registering at the Services, 
                  expressing an interest in obtaining information about us or our products and services, when participating 
                  in activities on the Services or otherwise contacting us.
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Name and Contact Data</li>
                  <li>Credentials (Passwords)</li>
                  <li>Payment Data (Processed securely via Stripe)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use personal information collected via our Services for a variety of business purposes described below. 
                  We process your personal information for these purposes in reliance on our legitimate business interests, 
                  in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">4. Terms of Service</h2>
                <p className="leading-relaxed">
                  By using ExploreNest, you agree to comply with and be bound by the following terms and conditions of use, 
                  which together with our privacy policy govern ExploreNest's relationship with you in relation to this website.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
