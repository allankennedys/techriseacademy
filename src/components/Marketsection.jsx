export default function MarketSection() {
  const bars = [
    { year: '2021', value: 45, label: '45%' },
    { year: '2022', value: 58, label: '58%' },
    { year: '2023', value: 72, label: '72%' },
    { year: '2024', value: 86, label: '86%' },
    { year: '2025', value: 95, label: '95%' },
  ];

  const metrics = [
    { value: '4.7M', desc: 'vagas abertas em tech no Brasil', trend: '+23% ao ano' },
    { value: 'R$12k', desc: 'salário médio de dev sênior', trend: '+18% em 2 anos' },
    { value: '340%', desc: 'crescimento do setor de IA', trend: 'desde 2020' },
  ];

  return (
    <section className="section" id="mercado">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          <div className="fade-in">
            <div className="tag">O Mercado Está Mudando</div>
            <h2 className="section-title">
              A demanda por{' '}
              <span className="gradient-text">profissionais tech</span>
              {' '}nunca foi tão alta
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '40px', lineHeight: 1.8 }}>
              O mercado de tecnologia cresce em ritmo acelerado. Empresas de todos os setores buscam profissionais qualificados — e a oferta ainda não acompanha a demanda.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {metrics.map((m) => (
                <div
                  key={m.value}
                  className="glass-card"
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '28px',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      minWidth: '80px',
                    }}
                  >
                    {m.value}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--white)', marginBottom: '2px' }}>
                      {m.desc}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--cyan)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      ↑ {m.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            <div
              className="glass-card"
              style={{ padding: '36px' }}
            >
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--muted)',
                  marginBottom: '24px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Crescimento da adoção de IA no mercado corporativo
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '12px',
                  height: '200px',
                  paddingBottom: '40px',
                  position: 'relative',
                }}
              >
                {bars.map((bar, i) => (
                  <div
                    key={bar.year}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      height: '100%',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'var(--neon)',
                        fontWeight: 600,
                      }}
                    >
                      {bar.label}
                    </span>
                    <div
                      style={{
                        width: '100%',
                        height: `${bar.value}%`,
                        background: `linear-gradient(180deg, #00D4FF, #7B61FF)`,
                        borderRadius: '6px 6px 0 0',
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                        transition: 'height 1s ease',
                        animation: `growBar 1s ease ${i * 0.1}s forwards`,
                        transformOrigin: 'bottom',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '12px',
                        color: 'var(--muted)',
                        position: 'absolute',
                        bottom: 0,
                      }}
                    >
                      {bar.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <style>{`
              @keyframes growBar {
                from { transform: scaleY(0); }
                to { transform: scaleY(1); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}