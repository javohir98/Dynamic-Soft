import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { ReactQueryClientProvider } from '@/components';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

export const metadata = {
  title: 'Dynamic Soft',
  description: 'Dynamic Soft CRUD example',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/d-favicon.jpg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <ModalsProvider>
              <Notifications position="bottom-center" />

              {children}
            </ModalsProvider>
          </MantineProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
