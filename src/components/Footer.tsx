import { ExternalLink, ShieldCheck } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locations';

export function Footer() {
  return (
    <footer className="border-t border-neutral-850 bg-neutral-950 py-16 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          
          {/* Brand Info */}
          <div className="md:col-span-4">
            <a href="#" className="font-display text-xl font-bold tracking-wider text-white">
              ALTARE <span className="font-light text-amber-400">RESIDENCIAL</span>
            </a>
            <p className="mt-4 text-xs leading-relaxed text-neutral-400 max-w-sm">
              Desenvolvimento e comercialização de empreendimentos residenciais de destaque na Zona Leste de São Paulo. Arquitetura moderna, lazer de clube e valorização sólida.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>Intermediação Imobiliária Especializada · CRECI/SP</span>
            </div>
          </div>

          {/* Direct Forms Links */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Formulários de Interesse
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {LOCATIONS_DATA.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={loc.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-amber-400"
                  >
                    <span>Formulário de Interesse — {loc.neighborhood}</span>
                    <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Legal */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a href="#empreendimentos" className="hover:text-amber-400 transition-colors">
                  Empreendimentos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Padrão Construtivo
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Seletor de Bairros
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[11px] text-neutral-500 leading-normal">
              Imagens meramente ilustrativas com sugestão de decoração. Os móveis, equipamentos e acabamentos serão entregues conforme memorial descritivo da incorporação.
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 border-t border-neutral-900 pt-6 text-center text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Altare Residencial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
