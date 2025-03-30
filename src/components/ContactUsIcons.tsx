import { FmdGood, Instagram, WhatsApp } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { palette } from '../utils/styleguide';
import { useState } from 'react';

export const InstagramLink = () => {
  return (
    <Link
      href="https://www.instagram.com/rosemaryveggiefood/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram
        sx={{ color: palette.darkPurple, fontSize: 40, cursor: 'pointer' }}
      />
    </Link>
  );
};
export const WhatsAppLink = () => {
  const [state] = useState({
    phone: '+34656680264',
    message: 'Hola! Tengo una consulta.',
  });

  const whatsappLink = `https://wa.me/${state.phone}?text=${encodeURIComponent(
    state.message
  )}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <WhatsApp
        sx={{
          color: palette.darkPurple,
          marginLeft: 1,
          fontSize: 40,
          cursor: 'pointer',
        }}
      />
    </Link>
  );
};

export const LocationLink = () => {
  return (
    <Link
      href="https://maps.app.goo.gl/bJPhSTdWmhGyZF4n6"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FmdGood sx={{ color: palette.darkPurple, fontSize: 40 }} />
    </Link>
  );
};
