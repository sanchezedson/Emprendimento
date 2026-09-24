import { useState } from 'react';
import { ExternalLink, Sparkles, Compass, CheckCircle } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locations';

export function LifestyleMatcher() {
  const [profile, setProfile] = useState<'mobility' | 'tradition' | 'luxury'>('mobility');

  const recommendationMap: Record<'mobility' | 'tradition' | 'luxury', string> = {
    mobility: 'vila-ema',
    tradition: 'mooca',
    luxury: 'tatuape',
  };

  const selectedProjectId = recommendationMap[profile];
  const matchedProject = LOCATIONS_DATA.find((loc) => loc.id === selectedProjectId) || LOCATIONS_DATA[0];

  return (
    <section id="simulador" className="border-t border-neutral-800 bg-neutral-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Compass className="h-4 w-4" />
            <span>Orientador de Escolha</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Qual dessas 3 opções combina mais com você?
          </h2>
          <p className="mt-4 text-sm text-neutral-400 sm:text-base">
            Selecione o seu objetivo e perfil de vida para ver a recomendação sob medida com o link de cadastro direto.
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <button
            onClick={() => setProfile('mobility')}
            className={`rounded-xl border p-5 text-left transition-all ${
              profile === 'mobility'
                ? 'border-amber-500 bg-neutral-900 shadow-lg shadow-amber-500/10'
                : 'border-neutral-800 bg-neutral-950/60 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Perfil Prático
              </span>
              {profile === 'mobility' && <CheckCircle className="h-4 w-4 text-amber-400" />}
            </div>
            <h4 className="mt-2 font-display text-lg font-bold text-white">
              Mobilidade & Custo-Benefício
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">
              Proximidade ao metrô, rotina descomplicada na capital, plantas compactas e inteligentes.
            </p>
          </button>

          <button
            onClick={() => setProfile('tradition')}
            className={`rounded-xl border p-5 text-left transition-all ${
              profile === 'tradition'
                ? 'border-amber-500 bg-neutral-900 shadow-lg shadow-amber-500/10'
                : 'border-neutral-800 bg-neutral-950/60 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Perfil Tradicional
              </span>
              {profile === 'tradition' && <CheckCircle className="h-4 w-4 text-amber-400" />}
            </div>
            <h4 className="mt-2 font-display text-lg font-bold text-white">
              Gastronomia & Família
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">
              Charme de bairro tradicional paulistano, pizzarias consagradas, ruas calmas e churrasqueira a carvão no terraço.
            </p>
          </button>

          <button
            onClick={() => setProfile('luxury')}
            className={`rounded-xl border p-5 text-left transition-all ${
              profile === 'luxury'
                ? 'border-amber-500 bg-neutral-900 shadow-lg shadow-amber-500/10'
                : 'border-neutral-800 bg-neutral-950/60 hover:border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Perfil Premium
              </span>
              {profile === 'luxury' && <CheckCircle className="h-4 w-4 text-amber-400" />}
            </div>
            <h4 className="mt-2 font-display text-lg font-bold text-white">
              Alto Luxo & Lazer Resort
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">
              Metragens amplas, vista panorâmica nobre, proximidade com Shopping Anália Franco e Parque Ceret.
            </p>
          </button>
        </div>

        {/* Dynamic Matched Result Banner */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-700/80 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Sparkles className="h-4 w-4" />
                <span>Recomendação Ideal Para Seu Perfil:</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {matchedProject.name} — {matchedProject.neighborhood}
              </h3>

              <p className="text-sm text-neutral-300 max-w-2xl">
                {matchedProject.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-400">
                <span className="font-semibold text-white">{matchedProject.areaRange}</span>
                <span aria-hidden="true">·</span>
                <span>{matchedProject.bedrooms}</span>
                <span aria-hidden="true">·</span>
                <span>{matchedProject.parkingSpots}</span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-400 font-medium">A partir de {matchedProject.priceFrom}</span>
              </div>
            </div>

            {/* Direct button to this recommended form */}
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">
              <a
                href={matchedProject.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-md transition-all hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] whitespace-nowrap"
              >
                <span>Tenho Interesse na {matchedProject.neighborhood}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <span className="text-[11px] text-neutral-400">
                Formulário oficial de atendimento rápido
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
