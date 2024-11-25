import { useTranslation } from 'react-i18next';

const LanguageCheck = () => {
  const { i18n } = useTranslation();
  let isRTL = false;

  switch (i18n.language) {
    case 'ar':
    case 'he':
      isRTL = true;
      break;
    default:
      isRTL = false;
  }

  return isRTL;
};

export default LanguageCheck;
