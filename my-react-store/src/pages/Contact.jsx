import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us: </h1>

      <div className="form">
        <label className="form-label">Your name</label>
        <input type="text" className="form-control" />
      </div>

      <div>
        <label className="form-label">Your email</label>
        <input type="text" className="form-control" />
      </div>

      <div>
        <label className="form-label">Your message</label>
        <textarea className="form-control" rows={3}></textarea>
      </div>

      <div className="controls">
        <button className="btn btn-outline-dark">Send message</button>
      </div>
    </div>
  );
}

export default Contact;
