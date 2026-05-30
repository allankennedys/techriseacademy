export default function Testimonials() {
  const testimonials = [
    {
      name: 'Lucas Ferreira',
      role: 'Dev Front-end @ Nubank',
      avatar: 'LF',
      text: 'Em 8 meses sai do zero e fui contratado. O que mais me surpreendeu foi a qualidade dos projetos práticos — cheguei na entrevista com um portfólio real.',
      color: '#00D4FF',
    },
    {
      name: 'Camila Santos',
      role: 'Engenheira de Software @ iFood',
      avatar: 'CS',
      text: 'Vim de Recursos Humanos sem nenhum conhecimento técnico. A jornada da TechRise foi estruturada de um jeito que eu consegui aprender no meu ritmo.',
      color: '#7B61FF',
    },
    {
      name: 'Rafael Oliveira',
      role: 'Dev Full Stack @ Startup',
      avatar: 'RO',
      text: 'O módulo de IA abriu portas que eu nem sabia que existiam. Hoje desenvolvo produtos inteiros sozinho e tenho dois freelas recorrentes.',
      color: '#00FFF0',
    },
    {
      name: 'Mariana Costa',
      role: 'Cloud Engineer @ AWS Partner',
      avatar: 'MC',
      text: 'Tentei outros cursos mas me perdia na teoria. Aqui tudo é na prática. Terminei já sabendo fazer deploy de aplicações reais na AWS.',
      color: '#00D4FF',
    },
    {
      name: 'Diego Mendes',
      role: 'Desenvolvedor Sênior',
      avatar: 'DM',
      text: 'Já era desenvolvedor pleno mas queria subir de nível. Os módulos de Cloud e IA me deram o upgrade que precisava para chegar no sênior.',
      color: '#7B61FF',
    },
    {
      name: 'Ana Lima',
      role: 'Dev Back-end @ Banco Inter',
      avatar: 'AL',
      text: 'A mentoria individual do projeto final foi decisiva. Tive feedback real de um profissional sênior antes de apresentar para o mercado.',
      color: '#00FFF0',
    },
  ];

  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
          <div className="tag">Depoimentos</div>
          <h2 className="section-title">
            Quem já fez a{' '}
            <span className="gradient-text">transição</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass-card fade-in"
              style={{
                padding: '28px',
                transitionDelay: `${i * 0.1}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${t.color}15 0%, transparent 70%)`,
                }}
              />

              <div
                style={{
                  fontSize: '36px',
                  color: t.color,
                  opacity: 0.3,
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                "
              </div>

              <p
                style={{
                  color: 'var(--muted)',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                }}
              >
                {t.text}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${t.color}40, ${t.color}15)`,
                    border: `1px solid ${t.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: t.color,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      marginBottom: '2px',
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: '12px', color: t.color }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}