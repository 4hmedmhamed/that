import React, { useState } from 'react';

export default function ProductDetailView() {
  // State management to replicate open UI interactions from screenshot
  const [searchQuery, setSearchQuery] = useState('chocolat');
  const [showSearchDropdown, setShowSearchDropdown] = useState(true);
  const [showAccountMenu, setShowAccountMenu] = useState(true);

  const thumbnails = [
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=150&q=80", // Fabric detail
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=150&q=80", // Close up side profile
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=150&q=80"  // Full ambient shot
  ];

  const exploreItems = [
    {
      id: 1,
      name: "كرسي مخملي من منتصف القرن - أخضر",
      price: "₹7,499.00",
      tag: null,
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: 2,
      name: "طاولة قهوة من منتصف القرن - جوز",
      price: "₹18,999.00",
      tag: "خصم 15%",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: 3,
      name: "لمبة أرضية مقوسة من خشب الجوز - نحاس",
      price: "₹11,200.00",
      tag: null,
      img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: 4,
      name: "كرسي مخملي مميز من منتصف القرن - أخضر",
      price: "₹21,500.00",
      tag: null,
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=250&q=80"
    }
  ];
const images = [
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80", // Detail / Texture
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80", // Front main render
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"  // Ambient room setting
  ];

  // Set initial state to index 1 to match the green chair being active in your screenshot
  const [activeIndex, setActiveIndex] = useState(1);

  // Carousel navigation logic
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="bg-white min-vh-100 pb-5" style={{ fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 1. TOP HEADER / NAVBAR */}
  

      {/* MAIN TWO-COLUMN BODY LAYOUT */}
      <div className="container-fluid px-4 py-4">
        <div className="row g-4">
          
          {/* LEFT PANEL: PRODUCT IMAGES VISUAL CAROUSEL ASPECT */}
<div className="col-12 col-md-5">
      <div 
        className="position-relative rounded-3 p-3 d-flex flex-column align-items-center justify-content-between border" 
        style={{ minHeight: '440px', backgroundColor: '#fcfdfe' }}
      >
        
        {/* 1. MAIN DISPLAY ACTIVE IMAGE */}
        <div className="d-flex align-items-center justify-content-center flex-grow-1 w-100" style={{ height: '320px' }}>
          <img 
            src={images[activeIndex]} 
            alt={`Product view ${activeIndex + 1}`} 
            className="img-fluid rounded-2 transition-fade"
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* 2. NAVIGATION ARROWS */}
        <button 
          onClick={handlePrev}
          className="btn btn-white shadow rounded-circle position-absolute start-0 top-50 translate-middle-y ms-2 border d-flex align-items-center justify-content-center hover-btn" 
          style={{ width: '36px', height: '36px', zIndex: 2 }}
          aria-label="Previous image"
        >
          <i className="bi bi-chevron-left text-dark fw-bold"></i>
        </button>
        
        <button 
          onClick={handleNext}
          className="btn btn-white shadow rounded-circle position-absolute end-0 top-50 translate-middle-y me-2 border d-flex align-items-center justify-content-center hover-btn" 
          style={{ width: '36px', height: '36px', zIndex: 2 }}
          aria-label="Next image"
        >
          <i className="bi bi-chevron-right text-dark fw-bold"></i>
        </button>

        {/* 3. PAGINATION DOT INDICATORS */}
        <div className="d-flex gap-2 my-3">
          {images.map((_, idx) => (
            <span 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="rounded-circle cursor-pointer transition-base" 
              style={{ 
                width: '10px', 
                height: '10px',
                backgroundColor: idx === activeIndex ? '#6c757d' : '#e9ecef',
                border: idx === activeIndex ? 'none' : '1px solid #ced4da'
              }}
            ></span>
          ))}
        </div>

        {/* 4. INTERACTIVE THUMBNAIL DECK STRIP */}
        <div className="d-flex gap-2 align-self-start mt-2">
          {images.map((url, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveIndex(idx)}
              className="p-1 border rounded-2 overflow-hidden bg-white cursor-pointer transition-base" 
              style={{ 
                width: '58px', 
                height: '58px',
                borderColor: idx === activeIndex ? '#138750' : '#dee2e6',
                borderWidth: idx === activeIndex ? '2px' : '1px',
                boxShadow: idx === activeIndex ? '0 0 4px rgba(19, 135, 80, 0.2)' : 'none'
              }}
            >
              <img 
                src={url} 
                alt={`Thumbnail ${idx + 1}`} 
                className="w-100 h-100 rounded-1" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          ))}
        </div>

      </div>
    </div>
          {/* RIGHT PANEL: ACCENT MARKETING INFO & RELATED EXPLORATION SHELF */}
          <div className="col-12 col-md-7 ps-md-4">
            
            {/* Top Corporate Trust Badges Row layout */}
            <div className="row g-3 mb-5" style={{ backgroundColor: '#f4f9f5', borderRadius: '12px', padding: '16px 8px' }}>
              <div className="col-12 col-lg-6 d-flex align-items-center gap-3">
                <div className="fs-1 text-success"><i className="bi bi-truck"></i></div>
                <div>
                  <h6 className="m-0 fw-bold text-dark small">Free Professional Installation & Delivery</h6>
                  <p className="m-0 text-muted extra-small">Professional team installs and places your furniture perfectly.</p>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center gap-3">
                <div className="fs-1 text-warning"><i className="bi bi-coin"></i></div>
                <div>
                  <h6 className="m-0 fw-bold text-dark small">Direct-from-Manufacture Prices & Quality</h6>
                  <p className="m-0 text-muted extra-small">Choose from thousands of quality designs for living, dining, and more.</p>
                </div>
              </div>
            </div>

            {/* Explore Similar Mid-Century Pieces heading container shelf */}
            <div className="mb-3">
              <h4 className="fw-bold text-dark m-0" style={{ fontFamily: 'Georgia, serif' }}>Explore Similar Mid-Century Pieces</h4>
            </div>

            {/* Related Grid Deck Elements mapped */}
            <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 g-3">
              {exploreItems.map((item) => (
                <div key={item.id} className="col">
                  <div className="card h-100 border-0 bg-transparent d-flex flex-column justify-content-between position-relative">
                    
                    {/* Discount Ribbon Tag Badge layout */}
                    {item.tag && (
                      <span className="position-absolute badge text-dark rounded-1 fw-medium top-0 start-0 m-2 z-1" style={{ backgroundColor: '#fce4c8', fontSize: '0.75rem' }}>
                        {item.tag}
                      </span>
                    )}

                    {/* Image Thumbnail Panel block */}
                    <div>
                      <div className="rounded-3 overflow-hidden bg-light mb-2 border border-light-subtle d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
                        <img src={item.img} alt={item.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                      </div>
                      
                      {/* Name specification container info */}
                      <h5 className="text-dark fw-medium small mb-1 text-truncate-2" style={{ lineHeight: '1.3', minHeight: '34px' }}>
                        {item.name}
                      </h5>
                    </div>

                    {/* Footer Pricing action card interface elements */}
              
                    <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                      <span className="fw-bold text-dark fs-6">{item.price}</span>
                      <button className="btn btn-outline-success border-2 fw-bold px-3 py-1 btn-sm d-flex align-items-center" style={{ borderColor: '#198754' }}>
                                                  اضافه للسله

                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}