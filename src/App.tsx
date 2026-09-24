/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LocationsShowcase } from './components/LocationsShowcase';
import { LifestyleMatcher } from './components/LifestyleMatcher';
import { BuildingAmenities } from './components/BuildingAmenities';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { InterestModal } from './components/InterestModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState<string | undefined>(undefined);

  const handleOpenInterestModal = (preset?: string) => {
    setModalPreset(preset);
    setIsModalOpen(true);
  };

  const handleCloseInterestModal = () => {
    setIsModalOpen(false);
    setModalPreset(undefined);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Header onOpenInterestModal={handleOpenInterestModal} />

      <main>
        <Hero onOpenInterestModal={handleOpenInterestModal} />
        <LocationsShowcase />
        <LifestyleMatcher />
        <BuildingAmenities />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      {/* Floating CTA bar on mobile (<= 15% viewport height compliance) */}
      <FloatingMobileBar onOpenInterestModal={() => handleOpenInterestModal()} />

      {/* Interest Selector Modal */}
      <InterestModal
        isOpen={isModalOpen}
        onClose={handleCloseInterestModal}
        presetNeighborhood={modalPreset}
      />
    </div>
  );
}
