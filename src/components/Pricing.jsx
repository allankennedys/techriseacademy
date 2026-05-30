export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '297',
      period: '/mês',
      desc: 'Para quem quer começar com o essencial.',
      features: [
        'Módulos de Programação e Front-end',
        'Acesso à comunidade',
        'Projetos guiados',
        'Suporte por fórum',
        '—',
        '—',
      ],
      cta: 'Começar Agora',
      recommended: false,
      color: '#A8B2D1',
    },
    {
      name: 'Pro',
      price: '497',
      period: '/mês',
      desc: 'A escolha de quem quer ir longe.',
      features: [
        'Todos os 7 módulos completos',
        'Projetos reais com mentoria',
        'Suporte prioritário (24h)',
        'Acesso a vagas exclusivas',
        'Certificado reconhecido',
        'Garantia de reembolso 30 dias',
      ],
      cta: 'Garantir Minha Vaga',
      recommended: true,
      color: '#00D4FF',
    },
    {
      name: 'Elite',
      price: '897',
      period: '/mês',
      desc: 'Máxima aceleração com suporte 1:1.',
      features: [
        'Tudo do plano Pro',
        'Mentoria 1:1 semanal',
        'Revisão de currículo e LinkedIn',
        'Simulações de entrevista',
        'Networking com recrutadores',
        'Suporte até a contratação',
      ],
      cta: 'Falar com Consultor',
      recommended: false,
      color: '#7B61FF',
    },
  ];

  return (
    <section className="section" id="planos">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
          <div className="tag">Planos</div>
          <h2 className="section-title">
            Invista no seu{' '}
            <span className="gradient-text">futuro</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '460px', margin: '0 auto' }}>
            Escolha o plano ideal para o seu momento e comece sua transformação hoje.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className="fade-in"
              style={{
                transitionDelay: `${i * 0.15}s`,
                position: 'relative',
              }}
            >
              {plan.recommended && (
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '-1px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '6px 20px',
                      background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
                      borderRadius: '100px 100px 0 0',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#050816',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Mais Popular
                  </span>
                </div>
              )}

              <div
                style={{
                  background: 'rgba(11, 17, 32, 0.7)',
                  border: plan.recommended
                    ? '1px solid rgba(0, 212, 255, 0.5)'
                    : '1px solid rgba(0, 212, 255, 0.15)',
                  borderRadius: plan.recommended ? '0 16px 16px 16px' : '16px',
                  backdropFilter: 'blur(12px)',
                  padding: '32px',
                  boxShadow: plan.recommended
                    ? '0 0 40px rgba(0, 212, 255, 0.15), inset 0 0 40px rgba(0, 212, 255, 0.03)'
                    : 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      fontSize: '12px',
                      color: plan.color,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    {plan.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'var(--muted)',
                        fontFamily: 'Syne, sans-serif',
                      }}
                    >
                      R$
                    </span>
                    <span
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '48px',
                        fontWeight: 800,
                        color: plan.recommended ? '#00D4FF' : 'var(--white)',
                        textShadow: plan.recommended ? '0 0 30px rgba(0, 212, 255, 0.4)' : 'none',
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--muted)' }}>{plan.period}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '6px' }}>
                    {plan.desc}
                  </p>
                </div>

                <div
                  style={{
                    height: '1px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    marginBottom: '24px',
                  }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {plan.features.map((feature, j) => (
                    <div
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: feature === '—' ? 'rgba(168, 178, 209, 0.3)' : 'var(--muted)',
                      }}
                    >
                      <span
                        style={{
                          color: feature === '—' ? 'rgba(168, 178, 209, 0.2)' : plan.color,
                          fontSize: '16px',
                          flexShrink: 0,
                        }}
                      >
                        {feature === '—' ? '✕' : '✓'}
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {}}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    padding: '14px',
                    borderRadius: '8px',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    ...(plan.recommended
                      ? {
                          background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
                          color: '#050816',
                          border: 'none',
                          boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
                        }
                      : {
                          background: 'transparent',
                          color: 'var(--white)',
                          border: `1px solid ${plan.color}40`,
                        }),
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}