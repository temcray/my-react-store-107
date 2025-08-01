//import


import './App.css';


function App() {
  return (
    <div className="App">
      <main className="main-content">
        <div className="hero-section">
          <h1>Welcome to My Online Store</h1>
          <p className="hero-subtitle">
            Discover amazing products at incredible prices.
            Your satisfaction is our top priority!
          </p>
          <div classNmae="hero-actions">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary">Lean More</button>
          </div>
        </div>
        <div className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Your payment information is safe with us</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">↩</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy, no questions asked</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Products</h3>
              <p>Carefully curated selection of premium items</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

//export 
export default App;





