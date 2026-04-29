import heroVideo from '../assets/hero.mp4';
interface VideoCardProps {
  index?: number;
  src?: string;
  className?: string;
  aspect?: 'vertical' | 'horizontal';
  tilt?: 'left' | 'right' | 'none';
  overlayText?: string;
}

const STATS = [
  { label: '2.4M views', sub: '@creator' },
  { label: '840K plays', sub: '@brand' },
  { label: '1.1M reach', sub: '@agency' },
  { label: '3.6M views', sub: '@studio' },
  { label: '512K likes', sub: '@creator' },
  { label: '990K reach', sub: '@talent' },
];

export default function VideoCard({
  src,
  index = 0,
  className = '',
  aspect = 'vertical',
  tilt = 'none',
  overlayText
}: VideoCardProps)
 {
  const tiltClass = tilt === 'left' ? 'card-tilt-left' : tilt === 'right' ? 'card-tilt-right' : '';
  const aspectClass = aspect === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';
  const stat = STATS[index % STATS.length];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900 ${aspectClass} ${tiltClass} ${className} group hover:shadow-3xl`}
      style={{ transition: 'transform 0.35s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s ease' }}
    >
      {/* Background image acting as video poster */}
      <video
        src={src || heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      ></video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

      {/* Bottom stat */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white text-xs font-bold">{overlayText || stat.label}</p>
            <p className="text-white/60 text-xs">{stat.sub}</p>
          </div>
          {/* Live badge */}
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            VIRAL
          </span>
        </div>
      </div>
    </div>
  );
}
