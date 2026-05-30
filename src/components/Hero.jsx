import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        background: '#050816',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(123, 97, 255, 0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            gap: '60px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div
              className="tag"
              style={{ animation: 'fadeInUp 0.6s ease forwards' }}
            >
              Plataforma de Educação do Futuro
            </div>

            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(40px, 6vw, 76px)',
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: '24px',
                color: '#ffffff',
                animation: 'fadeInUp 0.7s ease 0.1s forwards',
                opacity: 0,
              }}
            >
              O Futuro da Tecnologia{' '}
              <span className="gradient-text">
                Começa com Você.
              </span>
            </h1>

            <p
              style={{
                fontSize: '18px',
                color: '#A8B2D1',
                maxWidth: '540px',
                marginBottom: '40px',
                lineHeight: 1.75,
                animation: 'fadeInUp 0.7s ease 0.2s forwards',
                opacity: 0,
              }}
            >
              Domine programação, inteligência artificial e desenvolvimento de
              software através de projetos práticos e experiências imersivas.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '56px',
                animation: 'fadeInUp 0.7s ease 0.3s forwards',
                opacity: 0,
              }}
            >
              <a href="#planos" className="btn-primary">
                Iniciar Minha Jornada →
              </a>
              <a href="#formacao" className="btn-secondary">
                Explorar Formação
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '40px',
                flexWrap: 'wrap',
                animation: 'fadeInUp 0.7s ease 0.4s forwards',
                opacity: 0,
              }}
            >
              {[
                { value: '10k+', label: 'Alunos ativos' },
                { value: '500+', label: 'Projetos entregues' },
                { value: '95%', label: 'Taxa de satisfação' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '30px',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', color: '#A8B2D1' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <HoloPanel />
        </div>
      </div>
    </section>
  );
}

function HoloPanel() {
  const techs = [
    { name: 'React', pct: 92, color: '#00D4FF' },
    { name: 'Node.js', pct: 78, color: '#7B61FF' },
    { name: 'Python', pct: 85, color: '#00FFF0' },
    { name: 'IA / ML', pct: 70, color: '#00D4FF' },
    { name: 'Cloud', pct: 65, color: '#7B61FF' },
  ];

  return (
    <div
      style={{
        width: '300px',
        flexShrink: 0,
        animation: 'float 6s ease-in-out infinite',
        display: 'none',
      }}
      className="holo-panel"
    >
      <style>{`
        @media (min-width: 960px) { .holo-panel { display: block !important; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
      `}</style>

      <div
        style={{
          background: 'rgba(11, 17, 32, 0.85)',
          border: '1px solid rgba(0, 212, 255, 0.25)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.1), inset 0 0 40px rgba(0, 212, 255, 0.03)',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            color: '#00D4FF',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '20px',
            fontWeight: 600,
          }}
        >
          Stack de Habilidades
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {techs.map((t, i) => (
            <div key={t.name} style={{ animationDelay: `${i * 0.1}s` }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                  fontSize: '13px',
                }}
              >
                <span style={{ color: '#ffffff', fontFamily: 'monospace' }}>{t.name}</span>
                <span style={{ color: t.color, fontWeight: 600 }}>{t.pct}%</span>
              </div>
              <div
                style={{
                  height: '4px',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${t.pct}%`,
                    background: `linear-gradient(90deg, ${t.color}, ${t.color}80)`,
                    borderRadius: '2px',
                    boxShadow: `0 0 8px ${t.color}60`,
                    animation: `growBar 1s ease ${i * 0.15}s forwards`,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '24px',
            padding: '12px',
            background: 'rgba(0, 212, 255, 0.06)',
            border: '1px solid rgba(0, 212, 255, 0.15)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00D4FF',
              boxShadow: '0 0 10px #00D4FF',
              animation: 'pulse 2s infinite',
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: '12px', color: '#A8B2D1' }}>
            120 empresas contratando agora
          </span>
        </div>
      </div>

      <style>{`
        @keyframes growBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}