import React from 'react';
import ProductShelves from './ProductShelves';
import ProductDetailView from "./ProductDetailView";
import BinkeyitHome from "./BinkeyitHome"
import CategoryView from "./CategoryView"
import Logo from "./logo.png"
import baner from "./baner.png"
import Footer from './Footer';

function App() {

  // Alternative curated, high-end image assets
const categories = [
  { 
    id: 1, 
    name: 'غرفة المعيشة', 
    img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 2, 
    name: 'غرفة النوم', 
    img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 3, 
    name: 'تناول الطعام', 
    img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 4, 
    name: 'المكتب المنزلي', 
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 5, 
    name: 'أثاث خارجي', 
    img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 6, 
    name: 'الإضاءة', 
    img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 7, 
    name: 'لمسات ديكورية', 
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 8, 
    name: 'المنسوجات', 
    img: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 9, 
    name: 'الحمام', 
    img: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 10, 
    name: 'المطبخ', 
    img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=200&h=200&q=80' 
  },

  
  { 
    id: 13, 
    name: 'ديكور الجدران', 
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 14, 
    name: 'نباتات منزلية', 
    img: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=200&h=200&q=80' 
  },
  { 
    id: 15, 
    name: 'تخزين وتنظيم', 
    img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=200&h=200&q=80' 
  }
];

  // Alternative high-quality modern lounge furniture set for the hero display banner
  const heroImageUrl = "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80";

  return (
//     <div className="text-white min-vh-100" style={{ backgroundColor: '#f4f6fc', fontFamily: 'system-ui, sans-serif' }}>
      
//       {/* NAVBAR */}
//  <nav className="navbar navbar-light bg-white px-4 py-2 border-bottom sticky-top shadow-sm">
//         <div className="container-fluid d-flex align-items-center justify-content-between gap-3">
          
//           {/* Logo Branding */}
//           <a className="navbar-brand fw-bold fs-3 m-0" href="#home" style={{ letterSpacing: '-0.5px' }}>
//          <img src={Logo} alt="Logo"  style={{ maxWidth: '150px' }}/>
//           </a>

//           {/* Centered Search Bar */}
//           <div className="flex-grow-1 mx-md-5" style={{ maxWidth: '550px' }}>
//             <div className="input-group border rounded-2 px-2 py-1 bg-light align-items-center">
//               <i className="bi bi-search text-muted me-2"></i>
//               <input 
//                 type="text" 
//                 className="form-control border-0 p-0 shadow-none bg-transparent text-dark" 
//                 placeholder='Search "mid-century sofa"'
//               />
//             </div>
//           </div>

//           {/* Action Account & Basket Widgets */}
//           <div className="d-flex align-items-center gap-4">
//             <div className="dropdown">
//               <button className="btn btn-link text-dark text-decoration-none dropdown-toggle p-0 fw-medium" type="button">
//                 Account
//               </button>
//             </div>

//             <button className="btn btn-dark d-flex align-items-center gap-2 px-3 py-2 rounded-2" style={{ backgroundColor: '#0c2340', border: 'none' }}>
//               <i className="bi bi-cart3"></i>
//               <span className="fw-medium small">My Cart</span>
//             </button>
//           </div>

//         </div>
//       </nav>

//       {/* CORE CONTAINER */}
//       <div className="container-fluid px-4 py-4">
        
//         {/* HERO BANNER SECTION */}
//         <div 
//           className="position-relative rounded-4  mb-5 d-flex align-items-center overflow-hidden"
//           style={{ 
//             background: 'linear-gradient(95deg, #23a602 0%, #0b5901 100%)',
//             minHeight: '360px' 
//           }}
//         >
//           {/* Left Text Segment */}
//           <div className="position-relative z-1" style={{ maxWidth: '520px' }}>
   
//          <img src={baner} alt="Logo"  style={{ maxWidth: '900px' }}/>

//             {/* <p className="fs-4 text-white-50 mb-4 fw-light">Curated spaces, delivered</p> */}

//           </div>

//           {/* Right Product Graphic Layer */}
//           <div 
//             className="position-absolute end-0 bottom-0 top-0 d-none d-md-block"
//             style={{
//               width: '45%',
//               backgroundImage: `url(${heroImageUrl})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               borderTopLeftRadius: '24px',
//               borderBottomLeftRadius: '24px',
//               opacity: '1'
//             }}
//           >
//             <div>

//         <iframe 
//             src="https://that-app.vercel.app" 
//             title="فيديو يوتيوب"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//             allowfullscreen
//               style={{
//               width: '100%',
//               height:'70vh'
            
//             }}

//             >
//         </iframe>
//         </ div>
//         </div>
//         </div>

//         {/* METRIC / CATEGORIES NAV GRID */}
//         <div className="row g-4 justify-content-center">
//           {categories.map((cat) => (
//             <div key={cat.id} className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1-2 text-center">
//               <div className="card border-0 bg-transparent h-100">
                
//                 {/* Visual Thumbnail Card Panel */}
//                 <div 
//                   className="rounded-4 p-0 mb-2 d-flex align-items-center justify-content-center mx-auto overflow-hidden thumbnail-box"
//                   style={{ 
//                     backgroundColor: '#0d7b37', 
//                     width: '115px', 
//                     height: '115px',
//                     cursor: 'pointer',
//                     transition: 'all 0.2s ease-in-out',
//                     border: '1px solid #3ca32a'
//                   }}
//                 >
//                   <img 
//                     src={cat.img} 
//                     alt={cat.name} 
//                     className="w-100 h-100" 
//                     style={{ objectFit: 'cover' }}
//                   />
//                 </div>

//                 {/* String Label Markup */}
//                 <span className="text-wrap fw-medium px-1" style={{ fontSize: '0.8rem', color: '#8895a7', display: 'block' }}>
//                   {cat.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     < ProductShelves />
//     < ProductDetailView />
//     {/* < BinkeyitHome /> */}
//     < CategoryView />
//     < Footer />

//     </div>

<div>
  app
</div>
  );
}
export default App;
