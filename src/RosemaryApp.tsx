import { ThemeProvider } from '@emotion/react';
import { AppWrapper, theme } from './utils/styleguide';
import ContactSection from './sections/ContactSection';
import ScrollToTopButton from './components/ScrollButton';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translation/translation-en.json';
import esTranslation from './translation/translation-es.json';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CookiePolicyPage from './pages/CookiePolicyPage';
import LandingPage from './pages/LandingPage';
import CookiesModal from './components/CookiesModal';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import CourtesyViewRosemary from './courtesyView/ComingSoon';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export const RosemaryApp = () => {
  return (
    <BrowserRouter basename={'/'}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          {/* <Routes>
            <Route path="/" element={<CourtesyViewRosemary />} />
          </Routes> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
          {<CookiesModal />}
          <ContactSection />
          <ScrollToTopButton />
        </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default RosemaryApp;
