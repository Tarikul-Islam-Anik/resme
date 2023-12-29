/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Precedent - Building blocks for your Next.js project';
export const contentType = 'image/png';

export default async function OG() {
  const sfPro = await fetch(
    new URL('./fonts/SF-Pro-Display-Medium.otf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage:
            'linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)',
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
        >
          <rect width='100' height='100' fill='black' rx='15' />
          <path
            d='M13 18H26.875C27.4824 18 28.0838 18.1201 28.6449 18.3534C29.206 18.5867 29.7159 18.9287 30.1454 19.3599C31.0127 20.2306 31.5 21.4115 31.5 22.6429C31.5 23.8742 31.0127 25.0551 30.1454 25.9259C29.278 26.7966 28.1016 27.2857 26.875 27.2857H13V18ZM13 41.2143C13 39.9829 13.4873 38.802 14.3546 37.9313C15.222 37.0606 16.3984 36.5714 17.625 36.5714H31.5V45.8571H17.625C17.0176 45.8571 16.4162 45.7371 15.8551 45.5037C15.294 45.2704 14.7841 44.9284 14.3546 44.4973C13.9252 44.0662 13.5845 43.5543 13.3521 42.991C13.1196 42.4277 13 41.824 13 41.2143ZM13 59.7857C13 58.5544 13.4873 57.3734 14.3546 56.5027C15.222 55.632 16.3984 55.1429 17.625 55.1429H31.5V64.4286H17.625C16.3984 64.4286 15.222 63.9394 14.3546 63.0687C13.4873 62.198 13 61.0171 13 59.7857ZM13 73.7143H31.5V83H13V73.7143ZM31.5 73.7143H50V83H31.5V73.7143ZM31.5 55.1429H50V64.4286H31.5V55.1429ZM31.5 36.5714H45.375C46.6016 36.5714 47.778 37.0606 48.6454 37.9313C49.5127 38.802 50 39.9829 50 41.2143C50 42.4456 49.5127 43.6266 48.6454 44.4973C47.778 45.368 46.6016 45.8571 45.375 45.8571H31.5V36.5714ZM50 55.1429H68.5V64.4286H50V55.1429ZM50 73.7143H68.5V83H50V73.7143ZM68.5 55.1429H82.375C83.6016 55.1429 84.778 55.632 85.6454 56.5027C86.5127 57.3734 87 58.5544 87 59.7857C87 61.0171 86.5127 62.198 85.6454 63.0687C84.778 63.9394 83.6016 64.4286 82.375 64.4286H68.5V55.1429ZM68.5 18H82.375C83.6016 18 84.778 18.4892 85.6454 19.3599C86.5127 20.2306 87 21.4115 87 22.6429C87 23.8742 86.5127 25.0551 85.6454 25.9259C84.778 26.7966 83.6016 27.2857 82.375 27.2857H68.5V18ZM13 73.7143H68.5V83H13V73.7143ZM13 18H68.5V27.2857H13V18Z'
            fill='white'
          />
        </svg>
        <h1
          style={{
            fontSize: '100px',
            fontFamily: 'SF Pro',
            background:
              'linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: '5rem',
            letterSpacing: '-0.02em',
          }}
        >
          Resme
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'SF Pro',
          data: sfPro,
        },
      ],
    }
  );
}
