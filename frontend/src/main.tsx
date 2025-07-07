import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from './app.js';
import { GlobalStyle } from './global_style.js';
import { theme } from './theme.js';

const queryClient = new QueryClient();

const root = document.getElementById('root');
if (!root) throw new Error('`root` element missing');

ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </QueryClientProvider>,
);
