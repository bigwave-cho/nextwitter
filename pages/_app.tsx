import '@/styles/globals.css';
import type { AppProps } from 'next/app';

/*
## Next.js에서 tailwind 세팅하기
https://tailwindcss.com/docs/guides/nextjs
*/

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
