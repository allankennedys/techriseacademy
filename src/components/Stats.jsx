export default function Stats() {
  const stats = [
    { value: '10.000+', label: 'Alunos formados', icon: '👨‍💻', color: 'var(--neon)' },
    { value: '500+', label: 'Projetos desenvolvidos', icon: '🚀', color: 'var(--purple)' },
    { value: '95%', label: 'Taxa de satisfação', icon: '⭐', color: 'var(--cyan)' },
    { value: '120', label: 'Empresas parceiras', icon: '🏢', color: 'var(--neon)' },
  ];

  return (
    <section className="section" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card fade-in"
              style={{
                padding: '32px',
                textAlign: 'center',
                transitionDelay: `${i * 0.1}s`,
                background: `radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.05) 0%, rgba(11, 17, 32, 0.7) 60%)`,
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{stat.icon}</div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '42px',
                  fontWeight: 800,
                  color: stat.color,
                  textShadow: `0 0 30px ${stat.color}60`,
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}