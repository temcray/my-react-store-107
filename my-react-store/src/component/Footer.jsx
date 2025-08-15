function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>T's Online Store</h3>
            <p>
              Your trusted partner for quality products and excellent service.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-Links">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#support">Customer Support</a>
              </li>
              <li>
                <a href="#returns">Returns & Exchanges</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 support@ T's Electronic store.com</p>
            <p>📞 1-800-T's Electronic</p>
            <p>📍 9876 Bulldog St, Chicago, IL 60659</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 T's online Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
