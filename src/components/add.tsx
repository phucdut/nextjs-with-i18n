
import { useTranslations } from 'next-intl';
import React from 'react';

const Add = () => {
  const t = useTranslations('Add');
  return <div>{t('home')}</div>;
};

export default Add;
