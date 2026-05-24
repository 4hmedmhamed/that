import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "استكشف",
      links: ["رؤيتنا", "فريقنا", "رحلتنا", "اتصل بنا"]
    },
    {
      title: "اكتشف",
      links: ["فرق بينكيت", "الحرفية والاستدامة", "منزل الغد", "مساحتك القادمة"]
    },
    {
      title: "الدعم",
      links: ["خدمة العملاء", "الأسئلة الشائعة", "الشحن والإرجاع", "الضمان"]
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" dir="rtl">
      <div className="footer-container">
        {/* Logo / Brand Section */}
        <div className="footer-brand">
          <div className="brand-logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">بينكيت</span>
          </div>
          <p className="brand-tagline">
            نصنع مساحات مستدامة لمنزل الغد.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Pinterest">📌</a>
            <a href="#" aria-label="LinkedIn">🔗</a>
          </div>
        </div>

        {/* Footer Links Sections */}
        <div className="footer-links">
          {footerSections.map((section, idx) => (
            <div className="footer-section" key={idx}>
              <h3 className="footer-section-title">{section.title}</h3>
              <ul className="footer-section-links">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={`/${link}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h3 className="footer-section-title">كن ملهمًا</h3>
          <p className="newsletter-text">
            اشترك لتصلك رؤى التصميم، نصائح الاستدامة، والعروض الحصرية.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              required 
              aria-label="البريد الإلكتروني للنشرة البريدية"
            />
            <button type="submit">اشترك</button>
          </form>
          <p className="newsletter-note">لا بريد مزعج. يمكنك إلغاء الاشتراك في أي وقت.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {currentYear} بينكيت. جميع الحقوق محفوظة.
          </p>
          <div className="legal-links">
            <a href="/privacy-policy">سياسة الخصوصية</a>
            <span className="separator">|</span>
            <a href="/terms-of-service">شروط الخدمة</a>
            <span className="separator">|</span>
            <a href="/accessibility">إمكانية الوصول</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;