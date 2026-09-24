import { Star, CheckCircle } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Renato Silveira',
      role: 'Engenheiro Civil & Comprador',
      location: 'Origem Vila Ema',
      quote:
        'A proximidade do metrô e o fluxo suave de entrada durante as obras foram decisivos. A equipe tirou todas as dúvidas e o atendimento após o preenchimento do formulário foi em menos de 15 minutos.',
      metric: 'Unidade 2 Dormitórios garantida na 1ª fase',
    },
    {
      name: 'Mariana Castanho',
      role: 'Arquiteta e Moradora',
      location: 'Palazzo Mooca',
      quote:
        'Nasci e cresci na Mooca e fazia questão da tradicional churrasqueira a carvão e da localização tranquila. O projeto respeita a história do bairro com um design impecável.',
      metric: '3 Dormitórios com 2 suítes adquirido',
    },
    {
      name: 'Carlos Eduardo Barreto',
      role: 'Investidor Imobiliário',
      location: 'Iconic Tatuapé Sky',
      quote:
        'A valorização imobiliária do Tatuapé é histórica. O projeto do rooftop com piscina suspensa e acabamento de altíssimo nível tornou essa a melhor oportunidade da minha carteira este ano.',
      metric: '+18% de valorização estimada até a entrega das chaves',
    },
  ];

  return (
    <section className="border-t border-neutral-800 bg-neutral-900/30 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span>Experiência Real</span>
            <span aria-hidden="true">·</span>
            <span>Clientes & Investidores</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quem comprou aprova a escolha
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Histórias de quem já garantiu sua unidade nos melhores endereços da Zona Leste de São Paulo.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-950/70 p-6"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm italic text-neutral-300 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 border-t border-neutral-800/80 pt-4">
                <div className="font-semibold text-white text-sm">{item.name}</div>
                <div className="text-xs text-neutral-400">{item.role}</div>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-amber-400">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>{item.location}</span>
                </div>
                <div className="mt-1 text-[11px] text-neutral-500">{item.metric}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
