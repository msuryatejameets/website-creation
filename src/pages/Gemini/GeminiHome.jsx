import { useTheme } from '../../context/ThemeContext';
import Navbar from './NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoreFocusSection from './components/CoreFocusSection';
import BroadcastMatrixSection from './components/BroadcastMatrixSection';
import useActiveSection from './hooks/useActiveSection';
import { profile } from '../../data/profile';
import './Gemini.css';

/**
 * Main Gemini portfolio container component, assembled from SRP-compliant sub-components.
 */
function Gemini() {
  const activeSection = useActiveSection('.section-wrapper');
  const { theme } = useTheme();
  const { hero, aboutSlides, coreFocus, broadcastMatrix } = profile.gemini;

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection heroData={hero} />
        <AboutSection slides={aboutSlides} />
        <CoreFocusSection coreFocusData={coreFocus} />
        <BroadcastMatrixSection broadcastData={broadcastMatrix} />
      </main>
    </div>
  );
}

export default Gemini;