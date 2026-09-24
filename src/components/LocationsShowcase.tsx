import { ExternalLink, Check, MapPin, Bed, Car, Maximize2, Calendar } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locations';

export function LocationsShowcase() {
  return (
    <section id="empreendimentos" className="relative bg-neutral-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span>Portfolio Exclusivo</span>
            <span aria-hidden="true">·</span>
            <span>3 Bairros Icônicos</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Encontre o empreendimento perfeito para seu momento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Da praticidade e mobilidade da Vila Ema à tradição gastronômica da Mooca e ao alto luxo cosmopolita do Tatuapé.
          </p>
        </div>

        {/* 3 Projects Detailed Grid */}
        <div className="mt-16 space-y-20">
          {LOCATIONS_DATA.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                id={project.id}
                className="scroll-mt-28 rounded-2xl border border-neutral-800/80 bg-neutral-900/60 p-6 sm:p-8 lg:p-10"
              >
                <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
                      <img
                        src={project.image}
                        alt={`Fachada do ${project.name} em ${project.neighborhood}`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                      
                      {/* Quiet bottom banner on image */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-200">
                        <span className="font-semibold text-white drop-shadow-md">
                          {project.neighborhood} · Zona Leste
                        </span>
                        <span className="rounded bg-black/60 px-2 py-1 backdrop-blur-md text-amber-300">
                          {project.walkScore}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Unboxed kicker */}
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400">
                      <span>Bairro {project.neighborhood}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-neutral-400">Status: Em Lançamento</span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.name}
                    </h3>
                    
                    <p className="mt-1 text-sm font-medium text-amber-400/90">
                      {project.tagline}
                    </p>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-400">
                      <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span>{project.addressSummary}</span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                      {project.description}
                    </p>

                    {/* Key Specs Row */}
                    <div className="mt-6 grid grid-cols-2 gap-3 border-y border-neutral-800/90 py-4 sm:grid-cols-4">
                      <div className="flex items-center gap-2">
                        <Maximize2 className="h-4 w-4 text-amber-400 shrink-0" />
                        <div>
                          <div className="text-[10px] text-neutral-400 uppercase">Área</div>
                          <div className="text-xs font-semibold text-white">{project.areaRange}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-amber-400 shrink-0" />
                        <div>
                          <div className="text-[10px] text-neutral-400 uppercase">Dormitórios</div>
                          <div className="text-xs font-semibold text-white">{project.bedrooms}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-amber-400 shrink-0" />
                        <div>
                          <div className="text-[10px] text-neutral-400 uppercase">Vagas</div>
                          <div className="text-xs font-semibold text-white">{project.parkingSpots}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-amber-400 shrink-0" />
                        <div>
                          <div className="text-[10px] text-neutral-400 uppercase">Previsão</div>
                          <div className="text-xs font-semibold text-white">{project.deliveryYear}</div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights list */}
                    <div className="mt-5 space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        Destaques do projeto:
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                            <Check className="h-3.5 w-3.5 mt-0.5 text-amber-400 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and Target Button to the Google Form */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                          Valores a partir de
                        </span>
                        <div className="font-display text-2xl font-bold text-amber-400">
                          {project.priceFrom}
                        </div>
                      </div>

                      {/* Explicit button with exact required link */}
                      <a
                        href={project.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-sm bg-amber-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-lg shadow-amber-500/10 transition-all hover:bg-amber-400 hover:shadow-amber-500/20 active:scale-[0.98] whitespace-nowrap"
                      >
                        <span>Tenho Interesse na {project.neighborhood}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
