import { useEffect } from 'react';
import { X, ExternalLink, MapPin, Check } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locations';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetNeighborhood?: string;
}

export function InterestModal({ isOpen, onClose, presetNeighborhood }: InterestModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors"
          aria-label="Fechar janela"
        >
          <X className="h-5 w-5" />
        </button>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Atendimento Personalizado
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
            Qual localidade você deseja conhecer?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400">
            Selecione abaixo para abrir o formulário exclusivo de atendimento para a sua região escolhida:
          </p>
        </div>

        {/* 3 Location Options */}
        <div className="mt-6 space-y-4">
          {LOCATIONS_DATA.map((loc) => {
            const isPreset = presetNeighborhood && loc.id === presetNeighborhood;

            return (
              <div
                key={loc.id}
                className={`group rounded-xl border p-5 transition-all ${
                  isPreset
                    ? 'border-amber-500 bg-neutral-900/90 shadow-md shadow-amber-500/10'
                    : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg font-bold text-white">
                        {loc.name}
                      </span>
                      <span className="text-xs font-semibold text-amber-400">
                        ({loc.neighborhood})
                      </span>
                    </div>

                    <p className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span>{loc.addressSummary}</span>
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-neutral-400">
                      <span>{loc.areaRange}</span>
                      <span aria-hidden="true">·</span>
                      <span>{loc.bedrooms}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-amber-300">{loc.priceFrom}</span>
                    </div>
                  </div>

                  {/* Direct Link Button */}
                  <a
                    href={loc.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow transition-all hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] whitespace-nowrap shrink-0"
                  >
                    <span>Tenho Interesse na {loc.neighborhood}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-3 border-t border-neutral-800/80 pt-3 flex items-center gap-4 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-amber-400" /> Plantas e Book Completo
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-amber-400" /> Tabela de Lançamento
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-6 border-t border-neutral-800 pt-4 text-center text-xs text-neutral-400">
          Seus dados são confidenciais e utilizados exclusivamente para o envio do material deste lançamento.
        </div>
      </div>
    </div>
  );
}
