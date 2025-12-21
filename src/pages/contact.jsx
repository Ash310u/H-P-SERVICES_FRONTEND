import "../pages/styles/contact.css";

export default function Contact() {
  const handleSendQuery = () => {
    window.open(
      "https://forms.gle/bAQxbin5FzJqi3hcA",
      "_blank",
      "noopener,noreferrer"
    );
  };

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

        <p className="info">
          Email: <br />
          kp4283462009@gmail.com <br />
          abhradeephazra99@gmail.com
        </p>

        <p className="address">
          B/28, Gholui, Balichak, Kharagpur, Paschim Medinipur,
          West Bengal - 721124
        </p>

        <p className="info">Ph: 8984030821 , 9332627903</p>

        {/* ✅ GOOGLE FORM */}
        <button className="contact-btn" onClick={handleSendQuery}>
          SEND YOUR QUERY
        </button>
      </div>
    </div>
  );
}
