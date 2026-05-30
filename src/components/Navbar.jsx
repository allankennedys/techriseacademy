import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Formação', 'Projetos', 'Depoimentos', 'Planos'];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 0',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(5, 8, 22, 0.9)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '22px',
            background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          TechRise<span style={{ WebkitTextFillColor: '#00FFF0' }}>.</span>
        </div>
<button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
<div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: 'var(--muted)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--neon)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
            >
              {link}
            </a>
          ))}
          <a href="#planos" className="btn-primary" style={{ padding: '10px 24px', fontSize: '14px' }}>
            Começar Agora
          </a>
        </div>
      </div>
    </nav>
  );
}