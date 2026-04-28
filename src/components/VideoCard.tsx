interface VideoCardProps {
  index?: number;
  className?: string;
  aspect?: 'vertical' | 'horizontal';
  tilt?: 'left' | 'right' | 'none';
  overlayText?: string;
}

const VERTICAL_POSTERS = [
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5081386/pexels-photo-5081386.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const HORIZONTAL_POSTERS = [
  'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const STATS = [
  { label: '2.4M views', sub: '@creator' },
  { label: '840K plays', sub: '@brand' },
  { label: '1.1M reach', sub: '@agency' },
  { label: '3.6M views', sub: '@studio' },
  { label: '512K likes', sub: '@creator' },
  { label: '990K reach', sub: '@talent' },
];

export default function VideoCard({ index = 0, className = '', aspect = 'vertical', tilt = 'none', overlayText }: VideoCardProps) {
  const tiltClass = tilt === 'left' ? 'card-tilt-left' : tilt === 'right' ? 'card-tilt-right' : '';
  const aspectClass = aspect === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';
  const posters = aspect === 'vertical' ? VERTICAL_POSTERS : HORIZONTAL_POSTERS;
  const poster = posters[index % posters.length];
  const stat = STATS[index % STATS.length];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900 ${aspectClass} ${tiltClass} ${className} group hover:shadow-3xl`}
      style={{ transition: 'transform 0.35s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s ease' }}
    >
      {/* Background image acting as video poster */}
      <img
        src={poster}
        alt="content preview"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
          <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-white border-b-[7px] border-b-transparent ml-1" />
        </div>
      </div>

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
