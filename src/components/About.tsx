export default function About() {
  return (
    <div className="container">
      <div className="detail-content">
        <div className="page-header">
          <h1 className="page-title">About Open Niger State</h1>
          <p className="page-description">
            The Open Niger State portal is a centralized digital gateway designed to simplify access to government services, resources, and information for residents and business owners in Niger State.
          </p>
        </div>

        <section>
          <h2>Our Mission</h2>
          <p>
            To empower the people and businesses of Niger State by providing transparent, efficient, and easily accessible digital government services. We aim to reduce bureaucracy and foster a thriving economic environment through technology.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li><strong>Consolidated Information</strong>: Find everything from business registration to tax compliance in one place.</li>
            <li><strong>Business Support</strong>: Access resources for funding, training, and strategic growth.</li>
            <li><strong>Transparency</strong>: Clear guidelines on processes, fees, and requirements for all state services.</li>
          </ul>
        </section>

        <section>
          <h2>Our Vision</h2>
          <p>
            To make Niger State a leader in digital governance in Nigeria, creating a seamless interface between the government and its citizens that drives innovation and sustainable development.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            For general inquiries or support regarding the portal, please contact us:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:openniger@nigerstate.gov.ng">openniger@nigerstate.gov.ng</a><br />
          </p>
        </section>
        
        <div className="feedback-box">
          <h3>Institutional Framework</h3>
          <p>Open Niger State is an initiative of the Niger State Government, managed by Niger State Information Technology and Digital Economy Agency (NSITDEA).</p>
        </div>
      </div>
    </div>
  );
}
