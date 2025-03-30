import { palette } from '../utils/styleguide';
import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

const CookiesModal = () => {
  const { t } = useTranslation();
  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      cookieName="privacy-consent"
      style={{ backgroundColor: palette.purple }}
      expires={150}
      flipButtons
      buttonText={t('cookiePolicyData.cookieNotice.acceptButton')}
      declineButtonText={t('cookiePolicyData.cookieNotice.declineButton')}
      buttonStyle={{
        backgroundColor: palette.white,
        color: palette.purple,
        fontSize: '0.9rem',
      }}
      declineButtonStyle={{
        backgroundColor: palette.white,
        color: palette.purple,
        fontSize: '0.9rem',
      }}
    >
      {t('cookiePolicyData.cookieNotice.message')}{' '}
      <Link to="/cookie-policy" style={{ color: 'white', fontWeight: 900 }}>
        {t('cookiePolicyData.cookieNotice.linkText')}
      </Link>{' '}
      {t('cookiePolicyData.cookieNotice.messageEnd')}
    </CookieConsent>
  );
};

export default CookiesModal;
