import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import campaignBackground from '../assets/campaign-background.jpeg';
import drumScene from '../assets/campaign-drum-cutout.png';
import dhakSound from '../assets/dhak.mp3';

const pujaStart = new Date('2026-10-17T00:00:00+05:30').getTime();

function getCountdown() {
  const secondsLeft = Math.max(0, Math.floor((pujaStart - Date.now()) / 1000));
  return [
    Math.floor(secondsLeft / 86400),
    Math.floor((secondsLeft % 86400) / 3600),
    Math.floor((secondsLeft % 3600) / 60),
    secondsLeft % 60,
  ];
}

function Countdown() {
  const [time, setTime] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const units = ['Days', 'Hours', 'Minutes', 'Seconds'];

  return (
    <div className="campaign-countdown" role="timer" aria-label="Time left for Durga Pujo">
      <p className="campaign-countdown__label">Time left for Durga Pujo</p>
      <div className="campaign-countdown__units">
        {time.map((value, index) => (
          <div className="campaign-countdown__unit" key={units[index]}>
            <span className="campaign-countdown__value">{String(value).padStart(2, '0')}</span>
            <span className="campaign-countdown__name">{units[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TitleStreaks({ side }: { side: 'left' | 'right' }) {
  return (
    <span aria-hidden="true" className={`campaign-title__streaks campaign-title__streaks--${side}`}>
      <i /><i /><i />
    </span>
  );
}

function WhatsAppMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.496.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347ZM12.05 24h-.005a11.88 11.88 0 0 1-5.683-1.448L.057 24l1.688-6.164A11.82 11.82 0 0 1 .157 11.89C.16 5.334 5.495 0 12.05 0a11.82 11.82 0 0 1 8.414 3.48 11.82 11.82 0 0 1 3.478 8.413C23.939 18.665 18.604 24 12.05 24Zm0-21.96c-5.43 0-9.85 4.417-9.852 9.85a9.8 9.8 0 0 0 1.51 5.26l.235.374-.999 3.648 3.741-.982.361.214a9.87 9.87 0 0 0 5.031 1.378h.004c5.45 0 9.884-4.436 9.887-9.886a9.82 9.82 0 0 0-2.892-6.992A9.82 9.82 0 0 0 12.05 2.04Z" />
    </svg>
  );
}

export default function FestiveCampaignPage() {
  const dhakAudio = useRef<HTMLAudioElement>(null);
  const artwork = `url(${campaignBackground})`;

  const playDhak = () => {
    const audio = dhakAudio.current;
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play().catch(() => {});
  };

  const stopDhak = () => {
    const audio = dhakAudio.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <main className="campaign-page">
      <Navbar festive />
      <section className="campaign-hero" aria-labelledby="campaign-title">
        <div aria-hidden="true" className="campaign-hero__art" style={{ backgroundImage: artwork }} />

        <h1 id="campaign-title" className="campaign-title">
          <span className="campaign-title__line campaign-title__line--light">
            <span className="campaign-title__text">Get Your<TitleStreaks side="left" /></span>
          </span>
          <span className="campaign-title__line campaign-title__line--gold">
            <span className="campaign-title__text">Business Noticed</span>
          </span>
          <span className="campaign-title__line campaign-title__line--light">
            <span className="campaign-title__text">This Pujo<TitleStreaks side="right" /></span>
          </span>
        </h1>

        <p className="campaign-subtitle">Get featured with <strong>3 Influencers</strong></p>

        <div className="campaign-price">
          <span className="campaign-price__label">At just</span>
          <span className="campaign-price__value">₹ 9,999</span>
          <span aria-hidden="true" className="campaign-price__streaks">
            <i /><i /><i /><i /><i /><i />
          </span>
        </div>

        <Countdown />
        <div className="campaign-drum" aria-hidden="true">
          <img src={drumScene} alt="" onMouseEnter={playDhak} onMouseLeave={stopDhak} />
          <span className="campaign-drum__streaks">
            <i /><i /><i /><i /><i /><i />
          </span>
        </div>
        <audio ref={dhakAudio} src={dhakSound} preload="auto" loop />

        <a
          className="campaign-whatsapp"
          href="https://wa.me/916297337103?text=Hi%21%20I%27m%20interested%20in%20the%20Durga%20Pujo%20influencer%20offer.Can%20you%20please%20share%20more%20details%3F"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppMark />
          <span>WhatsApp us</span>
          <ArrowRight aria-hidden="true" size={21} />
        </a>
      </section>
    </main>
  );
}
