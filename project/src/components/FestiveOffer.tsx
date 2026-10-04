import { Gift } from 'lucide-react';
import festiveOfferBackground from '../assets/festive-offer-scene.png';
import blurredBuzzoryLogo from '../assets/buzzory-blurred.png';

function AccentStreaks({ className = '', count = 3 }: { className?: string; count?: number }) {
  return (
    <span aria-hidden="true" className={`festive-streaks ${className}`}>
      {Array.from({ length: count }, (_, index) => <i key={index} />)}
    </span>
  );
}

export default function FestiveOffer() {
  return (
    <section
      aria-labelledby="festive-offer-title"
      className="festive-offer relative isolate overflow-hidden"
      style={{ backgroundImage: `url(${festiveOfferBackground})` }}
    >
      <h2 id="festive-offer-title" className="festive-offer__title group absolute left-1/2 top-[17%] z-10 -translate-x-1/2 text-center font-black leading-[0.98]">
        <span className="block text-[#101d39]">Reveal</span>
        <span className="festive-offer__headline group relative block whitespace-nowrap text-[#e94818]">Festive Offer
          <AccentStreaks className="festive-streaks--headline" count={4} />
        </span>
      </h2>

      <a
        href="/festive-offer"
        aria-label="Click to reveal the festive offer"
        className="festive-offer__link group absolute left-1/2 top-[48.5%] z-10 flex -translate-x-1/2 flex-col items-center focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#e94818]"
      >
        <span className="festive-offer__card relative flex w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/90 shadow-[0_20px_45px_rgba(221,103,47,0.2)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_26px_58px_rgba(221,103,47,0.3)]">
          <img aria-hidden="true" className="festive-offer__blurred-brand" src={blurredBuzzoryLogo} alt="" />
          <span className="festive-offer__gift relative z-10 flex items-center justify-center rounded-full bg-[#e94818] text-white shadow-[0_8px_22px_rgba(233,72,24,0.32)] transition-transform duration-300 group-hover:scale-110">
            <Gift aria-hidden="true" className="festive-offer__gift-icon" size={29} strokeWidth={1.8} />
            <AccentStreaks className="festive-streaks--gift" />
          </span>
        </span>
        <span className="festive-offer__prompt mt-5 flex items-center font-medium italic text-[#786960] transition-colors group-hover:text-[#d95022]">
          <svg aria-hidden="true" className="festive-offer__prompt-arrow" viewBox="0 0 32 42" fill="none">
            <path d="M4 38C17 31 23 21 20 8M14 13l6-6 4 8" />
          </svg>
          <span>Click to reveal</span>
        </span>
      </a>
    </section>
  );
}
