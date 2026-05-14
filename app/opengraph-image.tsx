import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            'radial-gradient(circle at top left, rgba(59,125,191,0.35), transparent 32%), linear-gradient(180deg, #080c10 0%, #0d1117 60%, #080c10 100%)',
          color: '#e8edf5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          blufit Gym
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 18,
            color: '#9ca3af',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Bondel, Mangaluru
        </div>
        <div
          style={{
            marginTop: 110,
            fontSize: 86,
            lineHeight: 0.9,
            fontWeight: 700,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            maxWidth: 900,
          }}
        >
          Where Fitness Meets Dedication
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: '#9ca3af', maxWidth: 800 }}>
          Premium fitness centre in Bondel with weight training, personal coaching, MMA, Zumba,
          running track, and more.
        </div>
      </div>
    ),
    size,
  );
}
