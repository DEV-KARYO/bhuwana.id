import Image from 'next/image';

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

export default function LeaderAvatar({ leader, size = 'md' }) {
  const initials = getInitials(leader.name);
  
  const sizeClasses = {
    sm: 'w-16 h-16 rounded-[1rem]',
    md: 'w-24 h-24 md:w-28 md:h-28 rounded-[1.5rem]',
    lg: 'w-32 h-32 md:w-36 md:h-36 rounded-[2rem]',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-3xl',
    lg: 'text-4xl md:text-5xl',
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const textClass = textSizeClasses[size] || textSizeClasses.md;

  return (
    <div className={`${sizeClass} bg-gradient-to-br from-indigo-100 via-white to-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shadow-lg shadow-indigo-950/5 flex-shrink-0`}>
      {leader.image ? (
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover"
        />
      ) : (
        <span className={`${textClass} font-black text-slate-400 tracking-tight`}>
          {initials}
        </span>
      )}
    </div>
  );
}
