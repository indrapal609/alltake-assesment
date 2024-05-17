import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

//custom theme props
const theme = extendTheme({
  colors: {
    themeColor: {
      400: '#c88fa7',
      500: '#c97799',
      600: '#c9628d',
      700: '#cb4b80',
      800: '#cc3372',
      900: '#ce0557',
    },
  },
});

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <ColorModeScript />
          <App />
        </ChakraProvider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
