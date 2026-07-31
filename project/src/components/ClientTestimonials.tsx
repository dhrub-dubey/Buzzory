import logo1 from '../assets/client-logo-1.svg';
import logo2 from '../assets/client-logo-2.svg';
import logo3 from '../assets/client-logo-3.svg';
import logo4 from '../assets/client-logo-4.svg';
import logo5 from '../assets/client-logo-5.svg';
import logo6 from '../assets/client-logo-6.svg';
import logo7 from '../assets/client-logo-7.svg';

const clientLogos = [
  { name: 'Client logo 1', src: logo1 },
  { name: 'Client logo 2', src: logo2 },
  { name: 'Client logo 3', src: logo3 },
  { name: 'Client logo 4', src: logo4 },
  { name: 'Client logo 5', src: logo5 },
  { name: 'Client logo 6', src: logo6 },
  { name: 'Client logo 7', src: logo7 },
];

function Logo({ logo }: { logo: (typeof clientLogos)[number] }) {
  return (
    <div className="flex h-32 w-80 shrink-0 items-center justify-center">
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-28 max-w-[320px] w-auto h-auto object-contain grayscale opacity-55 transition duration-370 hover:grayscale-0 hover:opacity-100"
      />
    </div>
  );
}

export default function ClientTestimonials() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-9 text-center text-xs font-bold uppercase tracking-[0.18em] text-gray-700 sm:mb-11 sm:text-sm">
          Brands we have worked with
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <div className="brand-marquee flex w-max items-center">
          {[0, 1, 2].map((copy) => (
            <div key={copy} className="flex items-center gap-8 pr-8 sm:gap-10 sm:pr-10" aria-hidden={copy > 0}>
              {clientLogos.map((logo) => (
                <Logo key={`${logo.name}-${copy}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
