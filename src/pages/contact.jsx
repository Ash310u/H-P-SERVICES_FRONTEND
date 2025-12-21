import "../pages/styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <h2>Your Queries</h2>
        <p className="subtitle">
          We'd love to hear from you! Please reach out at your convenience so we
          can discuss your project.
        </p>

        <h3>DUST SOLUTION SYSTEM</h3>

        <p className="address">
          B/28, Gholui,Balichak,Kharagpur, Paschim Medinipur, West Bengal-721124
        </p>

        <p className="info">
          Mobile No. 8984030821 , 9332627903  <br />
          Email: enquiry@dustsolutionsystem.com <br />
          dustsolutionsystem@rediffmail.com
        </p>

        <p className="address">
          Mumbai Office: 2nd Floor, Unit - 204, Inspire Hub, Adani Western Heights,
          J.P. Road, 4 Bungalow, Andheri West - 400058, Mumbai, Maharashtra
        </p>

        <p className="info">Ph: 022 31410706</p>

        <button className="contact-btn">SEND YOUR QUERY</button>
      </div>
    </div>
  );
}
