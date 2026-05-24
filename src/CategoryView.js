import React, { useState } from 'react';

export default function CategoryView() {
  // Available sidebar menu items matching the design layout
const sidebarCategories = [
    { id: 'sof', name: 'أرائك', icon: 'bi-couch' },
    { id: 'arm', name: 'كراسي بذراعين', icon: 'bi-chair' },
    { id: 'cof', name: 'طاولات قهوة', icon: 'bi-table' },
    { id: 'din', name: 'طاولات طعام', icon: 'bi-hr' },
    { id: 'she', name: 'أرفف ووحدات تخزين', icon: 'bi-bookshelf' },
    { id: 'bed', name: 'أثاث غرف النوم', icon: 'bi-door-closed' },
    { id: 'off', name: 'مكتب منزلي', icon: 'bi-laptop' }
  ];
  // Track state for the active sidebar category option
  const [activeCategory, setActiveCategory] = useState('she'); // Pre-selected row to mirror screen

  // Mock array for the product grid content matching the visual items
const inventoryItems = [
    {
      id: 1,
      name: "أريكة مخملية من منتصف القرن - أخضر زمردي",
      price: "₹95,000.00",
      time: "10 min",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=350&q=80"
    },
    {
      id: 2,
      name: "كرسي إيمس الاسترخائي ومسند القدمين - جلد كلاسيكي",
      price: "₹1,45,000.00",
      time: "10 min",
      img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=350&q=80"
    },
    {
      id: 3,
      name: "طاولة قهوة منحنية من خشب الجوز",
      price: "₹48,000.00",
      time: "10 min",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=350&q=80"
    },
    {
      id: 4,
      name: "وحدة رفوف بسيطة من خشب البلوط",
      price: "₹62,000.00",
      time: "10 min",
      img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=350&q=80"
    }
  ];

  return (
    <div className="bg-light min-vh-100" style={{ fontFamily: 'system-ui, sans-serif' }}>
      
      {/* HEADER NAVBAR */}
   

      {/* TWO-COLUMN APPLICATION CONTAINER */}
      <div className="container-fluid px-0">
        <div className="d-flex">
          
          {/* LEFT SIDEBAR PANEL */}
          <div className="bg-white border-end min-vh-100" style={{ width: '260px', flexShrink: 0 }}>
            <div className="list-group list-group-flush pt-2">
              {sidebarCategories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`list-group-item list-group-item-action border-0 px-4 py-3 d-flex align-items-center gap-3 fw-medium transition-base ${
                      isActive ? 'bg-success-subtle text-success border-start border-success border-4' : 'text-dark'
                    }`}
                    style={{ 
                      fontSize: '0.95rem',
                      backgroundColor: isActive ? '#e8f5e9' : 'transparent',
                      borderLeft: isActive ? '4px solid #198754 !important' : 'none'
                    }}
                  >
                    <i className={`bi ${category.icon} ${isActive ? 'text-success' : 'text-secondary'} fs-5`}></i>
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT PRODUCT INTERFACE GRID */}
          <div className="flex-grow-1 p-4 bg-white">
            
            {/* Context Heading Title */}
            <div className="border-bottom pb-2 mb-4">
              <h2 className="fw-bold fs-4 m-0 text-dark" style={{ borderBottom: '3px solid #7a5c43', display: 'inline-block', paddingBottom: '6px' }}>
                Living Room Furniture
              </h2>
            </div>

            {/* Product Cards Layout Array */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {inventoryItems.map((product) => (
                <div key={product.id} className="col">
                  <div className="card h-100 border border-light-subtle rounded-3 p-3 shadow-sm bg-white d-flex flex-column justify-content-between text-start">
                    
                    <div>
                      {/* Frame Display Image */}
                      <div className="rounded-2 overflow-hidden mb-3 d-flex align-items-center justify-content-center bg-light" style={{ height: '160px' }}>
                        <img 
                          src={product.img} 
                          alt={product.name} 
                          className="w-100 h-100" 
                          style={{ objectFit: 'cover' }} 
                        />
                      </div>

                      {/* Delivery Speed Badge */}
                      <div className="mb-2">
                        <span className="badge bg-light text-success border border-success-subtle fw-medium px-2 py-1" style={{ fontSize: '0.75rem' }}>
                          {product.time}
                        </span>
                      </div>

                      {/* Product Metadata Info */}
                      <h3 className="text-dark fw-semibold small mb-1 text-truncate-2" style={{ lineHeight: '1.4', minHeight: '38px' }}>
                        {product.name}
                      </h3>
                    </div>

                    {/* Bottom Pricing Layout Row */}
                    <div className="mt-3">
                      <div className="text-muted extra-small mb-1"><del>{product.price}</del></div>
                                      <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                      <span className="fw-bold text-dark fs-6">{product.price}</span>
                      <button className="btn btn-outline-success border-2 fw-bold px-3 py-1 btn-sm d-flex align-items-center" style={{ borderColor: '#198754' }}>
                                                  اضافه للسله

                      </button>
                    </div>
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