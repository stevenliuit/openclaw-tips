export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#05070c]" />

      {/* Orb 1 – cyan top-center */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.07) 0%, transparent 70%)',
          animation: 'pulse-glow 6s ease-in-out infinite',
        }}
      />

      {/* Orb 2 – purple bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(129,140,248,0.06) 0%, transparent 70%)',
          animation: 'pulse-glow 8s ease-in-out infinite 2s',
        }}
      />

      {/* Orb 3 – teal mid-left */}
      <div
        className="absolute top-1/2 -left-24 w-[400px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.04) 0%, transparent 70%)',
          animation: 'pulse-glow 10s ease-in-out infinite 4s',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(34,211,238,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.25,
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
