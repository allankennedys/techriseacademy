import { useState } from 'react';

const faqs = [
  {
    q: 'Preciso ter experiência anterior para começar?',
    a: 'Não. A formação começa do absoluto zero. O único requisito é disposição para aprender e praticar.',
  },
  {
    q: 'Quanto tempo por semana preciso dedicar?',
    a: 'Recomendamos entre 10 e 15 horas semanais para manter o ritmo ideal. É possível avançar no seu próprio tempo, mas a consistência faz toda a diferença.',
  },
  {
    q: 'O certificado é reconhecido pelo mercado?',
    a: 'Sim. Nosso certificado é reconhecido por mais de 120 empresas parceiras. Além disso, o portfólio de projetos reais que você constrói ao longo da formação tem muito mais peso que qualquer certificado.',
  },
  {
    q: 'Como funciona o suporte?',
    a: 'Dependendo do plano, você tem acesso a suporte por fórum (Starter), resposta em até 24h (Pro) ou mentoria individual semanal ao vivo (Elite).',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. No plano Pro e Elite você tem 30 dias de garantia de reembolso integral, sem perguntas. Após esse período, você pode cancelar a renovação a qualquer momento.',
  },
  {
    q: 'Quanto tempo leva para conseguir emprego após a formação?',
    a: 'A média dos nossos alunos leva de 3 a 6 meses após a conclusão para fechar a primeira vaga. Alunos do plano Elite têm suporte dedicado até a contratação.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
          <div className="tag">Dúvidas Frequentes</div>
          <h2 className="section-title">
            Suas perguntas,{' '}
            <span className="gradient-text">respondidas</span>
          </h2>
        </div>

        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card fade-in"
              style={{
                transitionDelay: `${i * 0.08}s`,
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: open === i ? 'var(--neon)' : 'var(--white)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: 'var(--neon)',
                    fontSize: '18px',
                    fontWeight: 300,
                  }}
                >
                  +
                </div>
              </div>

              <div
                style={{
                  maxHeight: open === i ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
              >
                <div
                  style={{
                    padding: '0 24px 20px',
                    color: 'var(--muted)',
                    fontSize: '14px',
                    lineHeight: 1.8,
                    borderTop: '1px solid rgba(0, 212, 255, 0.08)',
                    paddingTop: '16px',
                  }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}