import { useState } from 'react';
import { ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { LOCATIONS_DATA, heroImg } from '../data/locations';

interface HeroProps {
  onOpenInterestModal: (presetNeighborhood?: string) => void;
}

export function Hero({ onOpenInterestModal }: HeroProps) {
  const [activeLocationId, setActiveLocationId] = useState<'vila-ema' | 'mooca' | 'tatuape'>('vila-ema');

  const activeProject = LOCATIONS_DATA.find((loc) => loc.id === activeLocationId) || LOCATIONS_DATA[0];

  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-8 pb-20 lg:pt-14 lg:pb-32">
      {/* Background Graphic & Image Backdrop */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={heroImg}
          alt="Edifício residencial moderno em São Paulo"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7">
            {/* Unboxed editorial kicker */}
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400"></span>
              <span>Lançamentos Exclusivos Zona Leste</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">São Paulo</span>
            </div>

            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-tight">
              O novo padrão de viver na <span className="text-amber-400">Vila Ema</span>, <span className="text-amber-400">Mooca</span> e <span className="text-amber-400">Tatuapé</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Empreendimentos contemporâneos com plantas inteligentes de 42m² a 145m², áreas de lazer completas e localização estratégica perto do metrô, parques e da melhor gastronomia.
            </p>

            {/* Quiet metadata features */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>Condições Direto com a Construtora</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>Utilize seu FGTS</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>Atendimento Consultivo Exclusivo</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => onOpenInterestModal()}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-amber-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 transition-all hover:bg-amber-400 active:scale-[0.98]"
              >
                <span>Cadastrar Interesse</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#empreendimentos"
                className="inline-flex items-center justify-center rounded-sm border border-neutral-700 bg-neutral-900/60 px-6 py-3.5 text-sm font-medium text-neutral-200 backdrop-blur-sm transition-colors hover:border-neutral-500 hover:text-white"
              >
                Explorar as 3 Localidades
              </a>
            </div>
          </div>

          {/* Right Column: Direct Interactive Neighborhood Selector Box */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Acesso Direto ao Formulário
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  Escolha seu bairro de preferência
                </h3>
                <p className="mt-1 text-xs text-neutral-400">
                  Clique no botão para abrir o formulário oficial da localidade desejada.
                </p>
              </div>

              {/* Segmented Location Tabs */}
              <div className="grid grid-cols-3 gap-1 rounded-lg bg-neutral-950 p-1.5">
                {LOCATIONS_DATA.map((loc) => {
                  const isActive = activeLocationId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setActiveLocationId(loc.id)}
                      className={`rounded-md py-2.5 px-2 text-center text-xs font-semibold transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-amber-500 text-neutral-950 shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {loc.neighborhood}
                    </button>
                  );
                })}
              </div>

              {/* Active Selection Details Card */}
              <div className="mt-5 space-y-4 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-display text-base font-bold text-white">
                      {activeProject.name}
                    </h4>
                    <p className="flex items-center gap-1 text-xs text-neutral-400">
                      <MapPin className="h-3.5 w-3.5 text-amber-400" />
                      {activeProject.addressSummary}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-neutral-400">A partir de</span>
                    <p className="text-sm font-bold text-amber-400">{activeProject.priceFrom}</p>
                  </div>
                </div>

                <div className="border-t border-neutral-800/80 pt-3 text-xs text-neutral-300">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-neutral-500">Metragens:</span> {activeProject.areaRange}
                    </div>
                    <div>
                      <span className="text-neutral-500">Dormitórios:</span> {activeProject.bedrooms}
                    </div>
                    <div>
                      <span className="text-neutral-500">Vagas:</span> {activeProject.parkingSpots}
                    </div>
                    <div>
                      <span className="text-neutral-500">Previsão:</span> {activeProject.deliveryYear}
                    </div>
                  </div>
                </div>

                {/* Primary Button directed to the correct form URL */}
                <a
                  href={activeProject.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-amber-500 to-amber-600 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-md transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/20 active:scale-[0.98]"
                >
                  <span>Tenho Interesse em {activeProject.neighborhood}</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              {/* Fast links to all 3 forms */}
              <div className="mt-5 border-t border-neutral-800 pt-4">
                <p className="mb-2 text-[11px] font-medium text-neutral-400">
                  Ou acesse diretamente os formulários específicos:
                </p>
                <div className="flex flex-col gap-2">
                  {LOCATIONS_DATA.map((loc) => (
                    <a
                      key={loc.id}
                      href={loc.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-950/40 px-3 py-2 text-xs text-neutral-300 transition-colors hover:border-amber-500/50 hover:text-amber-400"
                    >
                      <span className="font-medium">Formulário {loc.neighborhood}</span>
                      <span className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                        Tenho Interesse <ExternalLink className="h-3 w-3" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
