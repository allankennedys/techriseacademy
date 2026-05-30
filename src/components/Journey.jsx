export default function Journey() {
  const steps = [
    {
      number: '01',
      title: 'Aprender',
      desc: 'Aulas práticas com projetos reais desde o primeiro dia. Sem enrolação, direto ao que importa.',
      color: '#00D4FF',
    },
    {
      number: '02',
      title: 'Construir',
      desc: 'Desenvolva um portfólio sólido com aplicações que você pode mostrar para qualquer empresa.',
      color: '#7B61FF',
    },
    {
      number: '03',
      title: 'Especializar',
      desc: 'Mergulhe fundo nas tecnologias de ponta: IA, Cloud, arquitetura de sistemas modernos.',
      color: '#00FFF0',
    },
    {
      number: '04',
      title: 'Conquistar',
      desc: 'Acesso exclusivo às 120+ empresas parceiras e suporte até você fechar sua primeira vaga.',
      color: '#00D4FF',
    },
  ];

  return (
    <section className="section" id="jornada">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
          <div className="tag">Sua Evolução</div>
          <h2 className="section-title">
            Da primeira linha de código
            <br />
            <span className="gradient-text">ao primeiro emprego</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '0 auto' }}>
            Uma jornada estruturada pensada para te levar do zero até o mercado de trabalho.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), rgba(123, 97, 255, 0.3), transparent)',
              display: 'none',
            }}
            className="timeline-line"
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="glass-card fade-in"
              style={{
                padding: '32px 28px',
                transitionDelay: `${i * 0.15}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${step.color}, transparent)`,
                }}
              />

              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '56px',
                  fontWeight: 800,
                  color: step.color,
                  opacity: 0.15,
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {step.number}
              </div>

              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: `1px solid ${step.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  boxShadow: `0 0 15px ${step.color}40`,
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: step.color,
                  }}
                />
              </div>

              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: step.color,
                  marginBottom: '12px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}