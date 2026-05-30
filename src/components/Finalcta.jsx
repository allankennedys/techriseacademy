export default function FinalCTA() {
  return (
    <section
      className="section"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(123, 97, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), rgba(123, 97, 255, 0.4), transparent)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="fade-in">
          <div className="tag">Comece Hoje</div>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Prepare-se Para{' '}
            <span className="gradient-text">Construir o Futuro.</span>
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: 'var(--muted)',
              maxWidth: '520px',
              margin: '0 auto 48px',
              lineHeight: 1.7,
            }}
          >
            Milhares de profissionais já iniciaram sua jornada. Agora é sua vez.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <a href="#planos" className="btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
              Garantir Minha Vaga →
            </a>
            <a href="#formacao" className="btn-secondary" style={{ fontSize: '16px', padding: '16px 40px' }}>
              Ver Formação Completa
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {[
              '✓ Garantia de 30 dias',
              '✓ Projetos reais desde o dia 1',
              '✓ 120+ empresas parceiras',
            ].map((item) => (
              <span key={item} style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <footer
        style={{
          marginTop: '100px',
          borderTop: '1px solid rgba(0, 212, 255, 0.08)',
          padding: '40px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '20px',
              background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TechRise<span style={{ WebkitTextFillColor: '#00FFF0' }}>.</span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
            © 2025 TechRise Academy. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </section>
  );
}