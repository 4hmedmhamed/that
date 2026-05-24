import React from 'react';

export default function ProductShelves() {
const sections = [
    {
      title: "غرف المعيشة وتناول الطعام", // Living Room & Dining Suites
      products: [
        {
          id: 1,
          name: "طقم أريكة جلدية إيطالية فاخرة",
          desc: "طقم من 3 قطع",
          price: "₹1,87,000.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 2,
          name: "طقم طعام إسكندنافي من خشب البلوط",
          desc: "طقم من 7 قطع",
          price: "₹71,900.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 3,
          name: "كرسي استرخاء من المخمل",
          desc: "طقم من 7 قطع",
          price: "₹15,900.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 4,
          name: "طاولة قهوة من الخشب المُعاد تدويره",
          desc: "",
          price: "₹23,000.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 5,
          name: "سجادة ديكور",
          desc: "قطعة واحدة",
          price: "₹25,000.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      title: "غرف النوم ومساحات العمل", // Bedroom & Workspace
      products: [
        {
          id: 6,
          name: "طقم سرير عصري من الجلد",
          desc: "طقم من 3 قطع",
          price: "₹1,45,000.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 7,
          name: "إعداد مكتب منزلي مريح",
          desc: "مكتب وكرسي",
          price: "₹34,200.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 8,
          name: "خزانة ملابس مدمجة بسيطة",
          desc: "أبواب منزلقة",
          price: "₹89,000.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 9,
          name: "لمبة طاولة سيراميك محكم",
          desc: "قطعة واحدة",
          price: "₹6,500.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 10,
          name: "مرآة أرضية بإطار من خشب الجوز",
          desc: "طول كامل",
          price: "₹12,800.00",
          time: "10 min",
          img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ];
  return (
    <div className="bg-light min-vh-100 py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container-fluid px-4">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-5 position-relative">
            
            {/* Header row */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold text-dark m-0 fs-4">{section.title}</h2>
              <a href="#see-all" className="text-success text-decoration-none fw-medium fs-6">
                See All
              </a>
            </div>

            {/* Horizontal Product Container */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 flex-nowrap overflow-auto pb-3 hide-scrollbar">
              {section.products.map((product) => (
                <div key={product.id} className="col flex-shrink-0" style={{ minWidth: '260px' }}>
                  <div className="card h-100 border border-light-subtle rounded-3 shadow-sm bg-white p-3 d-flex flex-column justify-content-between">
                    
                    {/* Top Image Box */}
                    <div>
                      <div 
                        className="d-flex align-items-center justify-content-center overflow-hidden mb-3 rounded-2"
                        style={{ height: '160px', backgroundColor: '#fafafa' }}
                      >
                        <img 
                          src={product.img} 
                          alt={product.name} 
                          className="img-fluid max-h-100" 
                          style={{ objectFit: 'contain', maxHeight: '100%' }}
                        />
                      </div>

                      {/* Time Tag Badge */}
                      <div className="mb-2">
                        <span className="badge bg-success-subtle text-success fw-medium px-2 py-1" style={{ fontSize: '0.75rem' }}>
                          {product.time}
                        </span>
                      </div>

                      {/* Item Meta */}
                      <h3 className="text-dark fw-semibold fs-6 mb-1 text-truncate-2" style={{ minHeight: '44px', lineHeight: '1.4' }}>
                        {product.name}
                      </h3>
                      <p className="text-muted small mb-3">{product.desc || '\u00A0'}</p>
                    </div>

                    {/* Bottom Row Actions */}
                    <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                      <span className="fw-bold text-dark fs-6">{product.price}</span>
                      <button className="btn btn-outline-success border-2 fw-bold px-3 py-1 btn-sm d-flex align-items-center" style={{ borderColor: '#198754' }}>
                                                  اضافه للسله

                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Optional Slider Pagination Buttons (Mirroring the screenshot layout overlay) */}
            {idx === 0 && (
              <>
                <button className="btn btn-white shadow rounded-circle position-absolute start-0 top-50 translate-middle-y z-3 d-none d-md-flex align-items-center justify-content-center border" style={{ width: '40px', height: '40px', left: '-15px' }}>
                  <i className="bi bi-chevron-left text-dark"></i>
                </button>
                <button className="btn btn-white shadow rounded-circle position-absolute end-0 top-50 translate-middle-y z-3 d-none d-md-flex align-items-center justify-content-center border" style={{ width: '40px', height: '40px', right: '-15px' }}>
                  <i className="bi bi-chevron-right text-dark"></i>
                </button>
              </>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}