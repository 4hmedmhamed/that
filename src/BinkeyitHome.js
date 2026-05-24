import React, { useState } from 'react';

export default function BinkeyitHome() {
  // Set to false by default so you can test clicking "Open" and "Close" fluidly
  const [isCartOpen, setIsCartOpen] = useState(false);

  // State for cart items quantity management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Emerald Velvet Accent Chair",
      unit: "1 unit",
      price: 35000,
      qty: 1,
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 2,
      name: "Mid-Century Walnut Side Table",
      unit: "1 unit",
      price: 15000,
      qty: 1,
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ]);

  // Main navigation categories data
  const categories = [
    { id: 1, name: 'Living Room', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 2, name: 'Bedroom', img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 3, name: 'Dining', img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 4, name: 'Home Office', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 5, name: 'Outdoor Furniture', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 6, name: 'Lighting', img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 7, name: 'Decor Accents', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 8, name: 'Dairy, Bread & Eggs', img: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 9, name: 'Textiles', img: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=150&h=150&q=80' },
    { id: 10, name: 'Bath', img: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=150&h=150&q=80' },
  ];

  const updateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const itemsTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const deliveryCharge = itemsTotal > 0 ? 2500 : 0;
  const grandTotal = itemsTotal + deliveryCharge;
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="position-relative overflow-hidden min-vh-100" style={{ backgroundColor: '#0b0f19', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 1. INTERACTIVE SMOOTH TRANSITION DIM OVERLAY */}
      <div 
        className={`position-fixed top-0 start-0 w-100 h-100 bg-black transition-fade-overlay ${isCartOpen ? 'open' : ''}`} 
        style={{ zIndex: 1040 }}
        onClick={() => setIsCartOpen(false)} // Click anywhere outside to close the slide drawer
      />

      {/* 2. HEADER TOP NAVBAR */}
      <nav className="navbar navbar-dark px-4 py-3" style={{ backgroundColor: '#070a10', borderBottom: '1px solid #131926' }}>
        <div className="container-fluid d-flex align-items-center justify-content-between gap-3">
          
          <a className="navbar-brand fw-bold fs-3" href="#home" style={{ letterSpacing: '-0.5px', color: '#e5a922' }}>
            Binkey<span className="text-success">it</span>
          </a>

          <div className="flex-grow-1 mx-md-5" style={{ maxWidth: '600px' }}>
            <div className="input-group">
              <span className="input-group-text border-0 text-white-50" style={{ backgroundColor: '#131926' }}>
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-0 text-white shadow-none" placeholder='Search "sofa"' style={{ backgroundColor: '#131926' }} />
            </div>
          </div>

          <div className="d-flex align-items-center gap-4">
            <button className="btn btn-link text-white text-decoration-none dropdown-toggle p-0" type="button">
              Account
            </button>

            {/* Click to open the cart panel slider */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="btn btn-primary d-flex align-items-center gap-2 px-3 py-2 border-0" 
              style={{ backgroundColor: '#0a4fa5' }}
            >
              <i className="bi bi-cart3 fs-5"></i>
              <div className="text-start lh-sm">
                <small className="d-block text-white-50" style={{ fontSize: '0.7rem' }}>{totalItemCount} Items</small>
                <strong style={{ fontSize: '0.85rem' }}>₹{itemsTotal.toLocaleString('en-IN')}.00</strong>
              </div>
            </button>
          </div>

        </div>
      </nav>

      {/* LUXURY BANNER CONTAINER */}
      <div className="container-fluid px-4 py-4">
        <div className="position-relative rounded-4 p-5 mb-5 d-flex align-items-center overflow-hidden" style={{ background: 'linear-gradient(95deg, #0243a6 0%, #012359 100%)', minHeight: '340px' }}>
          <div className="position-relative z-1" style={{ maxWidth: '520px' }}>
            <h1 className="display-4 fw-bold text-white mb-2" style={{ letterSpacing: '-1px' }}>Luxury for your Home</h1>
            <p className="fs-4 text-white-50 mb-4 fw-light">Curated spaces, delivered</p>
            <button className="btn btn-warning fw-semibold px-4 py-2" style={{ backgroundColor: '#dca842', border: 'none', color: '#111' }}>Shop Now</button>
          </div>
          <div className="position-absolute end-0 bottom-0 top-0 d-none d-md-block" style={{ width: '45%', backgroundImage: `url('https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px', opacity: '0.85' }} />
        </div>

        {/* SUB-CATEGORY DECK LIST */}
        <div className="row g-4 justify-content-center">
          {categories.map((cat) => (
            <div key={cat.id} className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1-2 text-center">
              <div className="card border-0 bg-transparent h-100">
                <div className="rounded-4 p-0 mb-2 d-flex align-items-center justify-content-center mx-auto overflow-hidden thumbnail-box" style={{ backgroundColor: '#121824', width: '115px', height: '115px', cursor: 'pointer', border: '1px solid #1c2436' }}>
                  <img src={cat.img} alt={cat.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <span className="text-wrap fw-medium px-1" style={{ fontSize: '0.8rem', color: '#8895a7', display: 'block' }}>{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. SLIDING SIDEBAR CART PANEL                             */}
      {/* ========================================================= */}
      <div 
        className={`position-fixed top-0 end-0 h-100 bg-white text-dark shadow-lg d-flex flex-column transition-slider ${isCartOpen ? 'open' : ''}`}
        style={{ 
          width: '400px', 
          maxWidth: '100%', 
          zIndex: 1050
        }}
      >
        {/* Cart Header Panel */}
        <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-white">
          <h5 className="m-0 fw-bold fs-5">Cart</h5>
          {/* Click to explicitly dismiss/close the cart slider panel */}
          <button 
            type="button" 
            className="btn-close shadow-none" 
            aria-label="Close"
            onClick={() => setIsCartOpen(false)} 
          ></button>
        </div>

        {/* Savings Ribbon */}
        <div className="px-3 py-2 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#eef4ff', color: '#2b6cb0' }}>
          <span className="small fw-medium">Your total savings</span>
          <span className="fw-bold small">₹0.00</span>
        </div>

        {/* Scrollable Cart List */}
        <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-3 bg-light-subtle">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white border rounded-3 p-3 d-flex align-items-center justify-content-between shadow-sm">
              <div className="d-flex align-items-center gap-3">
                <div className="border rounded-2 overflow-hidden bg-light" style={{ width: '60px', height: '60px' }}>
                  <img src={item.img} alt={item.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <h6 className="m-0 fw-bold text-dark text-truncate" style={{ maxWidth: '160px', fontSize: '0.85rem' }}>{item.name}</h6>
                  <small className="text-muted d-block">{item.unit}</small>
                  <span className="fw-bold text-dark small">₹{item.price.toLocaleString('en-IN')}.00</span>
                </div>
              </div>

              {/* Quantity select selectors */}
              <div className="d-flex align-items-center gap-2 border rounded-2 p-1 bg-success" style={{ borderColor: '#198754' }}>
                <button onClick={() => updateQty(item.id, -1)} className="btn btn-sm p-0 px-2 text-white border-0 fw-bold shadow-none">-</button>
                <span className="text-white fw-bold small px-1">{item.qty}</span>
                <button onClick={() => updateQty(item.id, 1)} className="btn btn-sm p-0 px-2 text-white border-0 fw-bold shadow-none">+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Bill Summary Footer Panel Section */}
        <div className="p-3 border-top bg-white mt-auto">
          <h6 className="fw-bold mb-3 text-dark fs-6">Bill details</h6>
          <div className="d-flex flex-column gap-2 mb-3" style={{ fontSize: '0.85rem' }}>
            <div className="d-flex justify-content-between text-muted">
              <span>Items total</span>
              <span>
                <del className="me-2 text-black-50">₹{(itemsTotal + 10000).toLocaleString('en-IN')}.00</del> 
                <strong className="text-dark">₹{itemsTotal.toLocaleString('en-IN')}.00</strong>
              </span>
            </div>
            <div className="d-flex justify-content-between text-muted">
              <span>Quntity total</span>
              <span>{totalItemCount} item</span>
            </div>
            <div className="d-flex justify-content-between text-muted">
              <span>Delivery Charge</span>
              <span className="text-dark">₹{deliveryCharge.toLocaleString('en-IN')}.00</span>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center pt-2 border-top mb-3">
            <span className="fw-bold text-dark">Grand total</span>
            <span className="fw-bold text-dark fs-5">₹{grandTotal.toLocaleString('en-IN')}.00</span>
          </div>

          <button className="btn btn-success w-100 py-3 fw-bold d-flex align-items-center justify-content-between rounded-3 shadow-sm px-4" style={{ backgroundColor: '#115331', border: 'none' }}>
            <span>₹{grandTotal.toLocaleString('en-IN')}.00</span>
            <span className="d-flex align-items-center gap-1">Checkout <i className="bi bi-chevron-right"></i></span>
          </button>
        </div>

      </div>

    </div>
  );
}