import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o cadastro pelo botão "Tenho Interesse"?',
      answer:
        'Ao clicar no botão "Tenho Interesse" da localidade escolhida (Vila Ema, Mooca ou Tatuapé), você será direcionado para o formulário oficial do Google Forms referente àquele empreendimento específico. Preencha seus dados de contato e um consultor especializado entrará em contato prioritário com o book completo, plantas em alta resolução e a tabela exclusiva de lançamento.',
    },
    {
      question: 'Posso utilizar meu FGTS na entrada ou amortização?',
      answer:
        'Sim! Para unidades que se enquadram nas regras do Sistema Financeiro de Habitação (SFH), o saldo do FGTS pode ser utilizado para compor a entrada, amortizar parcelas ou abater o saldo devedor do financiamento bancário.',
    },
    {
      question: 'Como funciona o fluxo de pagamento durante o período de obras?',
      answer:
        'O fluxo de pagamento é amplamente flexível: a entrada e parcelas mensais são distribuídas ao longo de todo o cronograma de construção, corrigidas pelo INCC. Na entrega das chaves, o saldo restante pode ser quitado à vista ou financiado pelo banco de sua preferência.',
    },
    {
      question: 'Os stands possuem apartamento decorado para visitação?',
      answer:
        'Sim, temos apartamentos decorados disponíveis para os projetos da Vila Ema, Mooca e Tatuapé. Após cadastrar seu interesse no formulário, você poderá agendar um horário exclusivo com recepção VIP e tour completo pelas maquetes e decorados.',
    },
    {
      question: 'Quais são os diferenciais entre Vila Ema, Mooca e Tatuapé?',
      answer:
        'A Vila Ema é ideal para quem prioriza excelente custo-benefício e mobilidade rápida pelo metrô/monotrilho. A Mooca oferece a tradição viva paulistana, tranquilidade de ruas residenciais e vida gastronômica consagrada. O Tatuapé é o polo de alto padrão da Zona Leste, vizinho ao Shopping Anália Franco e Parque CERET, com plantas amplas e valorização acelerada.',
    },
  ];

  return (
    <section className="border-t border-neutral-800 bg-neutral-950 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tudo o que você precisa saber antes de dar o próximo passo
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Informações transparentes sobre as unidades na Vila Ema, Mooca e Tatuapé.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 transition-colors hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-white focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-amber-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-neutral-800/80 px-5 pb-5 pt-3 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
