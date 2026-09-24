import { Building2, ShieldCheck, Banknote, Sparkles } from 'lucide-react';

export function BuildingAmenities() {
  const differentials = [
    {
      number: '01',
      title: 'Plantas Funcionais e Iluminação Natural',
      description:
        'Concebidas por escritórios premiados de arquitetura, com integração entre sala e terraço gourmet, ventilação cruzada e máximo aproveitamento de cada metro quadrado.',
      icon: Building2,
    },
    {
      number: '02',
      title: 'Lazer de Clube Completo e Decorado',
      description:
        'Piscinas climatizadas, academias com aparelhos profissionais, salão de festas privativo, espaço pet e áreas de coworking entregues prontas para uso.',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Segurança Inteligente e Portaria 24h',
      description:
        'Acesso por biometria e reconhecimento facial, clausura de pedestres e veículos, circuito fechado de TV e controle digital de encomendas.',
      icon: ShieldCheck,
    },
    {
      number: '04',
      title: 'Condições de Compra Direto com a Construtora',
      description:
        'Aproveite a tabela de lançamento com entrada facilitada durante o período de obras, financiamento bancário aprovado e possibilidade de uso do FGTS.',
      icon: Banknote,
    },
  ];

  return (
    <section id="diferenciais" className="border-t border-neutral-800/80 bg-neutral-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span>Padrão Construtivo</span>
            <span aria-hidden="true">·</span>
            <span>Excelência em Cada Detalhe</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Diferenciais que valorizam o seu patrimônio e a sua rotina
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
            Todos os empreendimentos na Vila Ema, Mooca e Tatuapé seguem rigorosos critérios de sustentabilidade, conforto acústico e modernidade.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-amber-500/50 hover:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-amber-400/80">
                    {item.number}
                  </span>
                  <Icon className="h-5 w-5 text-neutral-400 group-hover:text-amber-400 transition-colors" />
                </div>

                <h3 className="mt-4 font-display text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
