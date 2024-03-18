// import './polyfills';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css';
import 'react-notifications/lib/notifications.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, goerli, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
// import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import store from './redux/store/store.jsx';
import { Provider } from 'react-redux';

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'John Nelson Art NFT',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Provider store={store}>
          <App />
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  </>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
// )



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <WagmiConfig config={wagmiConfig}>
//       <RainbowKitProvider chains={chains}>
//         <App />
//       </RainbowKitProvider>
//     </WagmiConfig>
//   </React.StrictMode>
// );

