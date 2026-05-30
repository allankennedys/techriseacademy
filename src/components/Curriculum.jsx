import { useState } from 'react';

const modules = [
  {
    id: 1,
    icon: '⚡',
    title: 'Fundamentos',
    subtitle: 'Programação',
    desc: 'Lógica, algoritmos, estruturas de dados e boas práticas de código.',
    techs: ['Python', 'JavaScript', 'Git'],
    duration: '6 semanas',
    color: '#00D4FF',
    unlocked: true,
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Front-end',
    subtitle: 'Interfaces Modernas',
    desc: 'Crie interfaces responsivas e dinâmicas com as tecnologias mais usadas no mercado.',
    techs: ['React', 'TypeScript', 'Tailwind'],
    duration: '8 semanas',
    color: '#7B61FF',
    unlocked: true,
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Back-end',
    subtitle: 'APIs e Serviços',
    desc: 'Construa servidores robustos, APIs RESTful e arquiteturas escaláveis.',
    techs: ['Node.js', 'Express', 'FastAPI'],
    duration: '8 semanas',
    color: '#00FFF0',
    unlocked: true,
  },
  {
    id: 4,
    icon: '🗄️',
    title: 'Banco de Dados',
    subtitle: 'SQL & NoSQL',
    desc: 'Modelagem, performance e escolha certa entre bancos relacionais e não-relacionais.',
    techs: ['PostgreSQL', 'MongoDB', 'Redis'],
    duration: '4 semanas',
    color: '#00D4FF',
    unlocked: false,
  },
  {
    id: 5,
    icon: '☁️',
    title: 'Cloud',
    subtitle: 'Infraestrutura',
    desc: 'Deploy, escalabilidade e boas práticas de infraestrutura moderna na nuvem.',
    techs: ['AWS', 'Docker', 'CI/CD'],
    duration: '5 semanas',
    color: '#7B61FF',
    unlocked: false,
  },
  {
    id: 6,
    icon: '🤖',
    title: 'Inteligência Artificial',
    subtitle: 'IA & Machine Learning',
    desc: 'Modelos de linguagem, visão computacional e integração de IA em aplicações reais.',
    techs: ['Python', 'LangChain', 'OpenAI'],
    duration: '6 semanas',
    color: '#00FFF0',
    unlocked: false,
  },
  {
    id: 7,
    icon: '🏆',
    title: 'Projeto Final',
    subtitle: 'Portfólio Completo',
    desc: 'Desenvolva um produto completo do zero ao deploy, com mentoria individual.',
    techs: ['Full Stack', 'IA', 'Cloud'],
    duration: '4 semanas',
    color: '#FFD700',
    unlocked: false,
  },
];

export default function Curriculum() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="formacao">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
          <div className="tag">Trilha de Formação</div>
          <h2 className="section-title">
            Módulos projetados para{' '}
            <span className="gradient-text">o mercado real</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto' }}>
            Cada módulo é um nível. Cada nível te deixa mais próximo das melhores oportunidades.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              className="glass-card fade-in"
              onClick={() => setActive(active === mod.id ? null : mod.id)}
              style={{
                padding: '28px',
                cursor: 'pointer',
                transitionDelay: `${i * 0.08}s`,
                position: 'relative',
                overflow: 'hidden',
                opacity: mod.unlocked ? 1 : 0.7,
                borderColor: active === mod.id ? mod.color : undefined,
                boxShadow: active === mod.id ? `0 0 25px ${mod.color}30` : undefined,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: `linear-gradient(90deg, ${mod.color}, transparent)`,
                  opacity: active === mod.id ? 1 : 0.4,
                }}
              />

              {!mod.unlocked && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontSize: '16px',
                    opacity: 0.4,
                  }}
                >
                  🔒
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${mod.color}15`,
                    border: `1px solid ${mod.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}
                >
                  {mod.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: mod.color,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 600,
                      marginBottom: '2px',
                    }}
                  >
                    {mod.subtitle}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '17px',
                    }}
                  >
                    {mod.title}
                  </div>
                </div>
              </div>

              {active === mod.id && (
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.7 }}>
                    {mod.desc}
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {mod.techs.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '11px',
                      padding: '4px 10px',
                      borderRadius: '100px',
                      background: `${mod.color}12`,
                      border: `1px solid ${mod.color}25`,
                      color: mod.color,
                    }}
                  >
                    {tech}
                  </span>
                ))}
                <span
                  style={{
                    fontSize: '11px',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    background: 'rgba(168, 178, 209, 0.08)',
                    border: '1px solid rgba(168, 178, 209, 0.15)',
                    color: 'var(--muted)',
                    marginLeft: 'auto',
                  }}
                >
                  {mod.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}