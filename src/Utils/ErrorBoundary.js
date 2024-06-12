import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';


export function ErrorFallback({ error, resetErrorBoundary }) {
  const { t } = useTranslation();
  return (
    <Box
      role="alert"
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Typography style={{ marginTop: 10 }}>{t('Something_Wrong')}</Typography>
      {/* <pre>{error.message}</pre> */}
      <Button onClick={resetErrorBoundary}>{t('Try_Again')}</Button>
    </Box>
  );
}
