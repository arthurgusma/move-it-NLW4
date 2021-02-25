import { ChallengesProvider } from '../src/contexts/ChallengesContext';
import '../src/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp;
