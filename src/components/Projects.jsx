export default function Projects() {
  const projects = [
    {
      title: 'Sistema SaaS',
      desc: 'Plataforma completa com autenticação, pagamentos e dashboard de analytics.',
      tags: ['React', 'Node.js', 'Stripe'],
      color: '#00D4FF',
      preview: SaasPreview,
    },
    {
      title: 'Dashboard Analítico',
      desc: 'Visualização de dados em tempo real com gráficos interativos e filtros avançados.',
      tags: ['React', 'D3.js', 'WebSocket'],
      color: '#7B61FF',
      preview: DashPreview,
    },
    {
      title: 'Aplicação de IA',
      desc: 'Chat inteligente com processamento de documentos usando modelos de linguagem.',
      tags: ['Python', 'LangChain', 'OpenAI'],
      color: '#00FFF0',
      preview: AiPreview,
    },
  ];

  return (
    <section className="section" id="projetos">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
          <div className="tag">Projetos Reais</div>
          <h2 className="section-title">
            Portfólio que{' '}
            <span className="gradient-text-cyan">impressiona</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '0 auto' }}>
            Não apenas aprenda — construa projetos que provam que você é capaz.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card fade-in"
              style={{
                overflow: 'hidden',
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              <div
                style={{
                  height: '200px',
                  background: `linear-gradient(135deg, ${project.color}15, rgba(11, 17, 32, 0.8))`,
                  borderBottom: `1px solid ${project.color}20`,
                  padding: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)`,
                  }}
                />
                <project.preview color={project.color} />
              </div>

              <div style={{ padding: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '8px',
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SaasPreview({ color }) {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{
          background: 'rgba(5, 8, 22, 0.8)',
          border: `1px solid ${color}30`,
          borderRadius: '8px',
          padding: '12px',
          fontSize: '11px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        {[
          { label: 'Receita total', value: 'R$ 48.290', w: '70%' },
          { label: 'Novos usuários', value: '1.284', w: '50%' },
          { label: 'Churn rate', value: '2.1%', w: '30%' },
        ].map((row) => (
          <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
            <span style={{ color: 'var(--muted)' }}>{row.label}</span>
            <span style={{ color }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashPreview({ color }) {
  const bars = [40, 65, 45, 80, 55, 90, 70];
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{
          background: 'rgba(5, 8, 22, 0.8)',
          border: `1px solid ${color}30`,
          borderRadius: '8px',
          padding: '12px',
        }}
      >
        <div style={{ fontSize: '10px', color: 'var(--muted)', marginBottom: '10px', fontFamily: 'monospace' }}>
          Eventos por dia
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px' }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background: `linear-gradient(180deg, ${color}, ${color}50)`,
                borderRadius: '3px 3px 0 0',
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AiPreview({ color }) {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{
          background: 'rgba(5, 8, 22, 0.8)',
          border: `1px solid ${color}30`,
          borderRadius: '8px',
          padding: '12px',
          fontFamily: 'monospace',
          fontSize: '11px',
        }}
      >
        <div style={{ color: 'var(--muted)', marginBottom: '8px' }}>→ Você:</div>
        <div
          style={{
            background: `${color}10`,
            border: `1px solid ${color}20`,
            borderRadius: '6px',
            padding: '6px 10px',
            color: 'var(--white)',
            marginBottom: '8px',
          }}
        >
          Analise este contrato PDF
        </div>
        <div style={{ color: 'var(--muted)', marginBottom: '6px' }}>← IA:</div>
        <div
          style={{
            background: 'rgba(168, 178, 209, 0.06)',
            borderRadius: '6px',
            padding: '6px 10px',
            color: 'var(--muted)',
            lineHeight: 1.5,
          }}
        >
          Encontrei 3 cláusulas críticas...
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '14px',
              background: color,
              marginLeft: '4px',
              animation: 'blink 1s infinite',
              verticalAlign: 'middle',
            }}
          />
        </div>
      </div>
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </div>
  );
}