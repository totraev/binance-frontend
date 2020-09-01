export default {
  host: process.env.APP_REACT_HOST ?? 'http://localhost:3000',
  wsHost: process.env.APP_REACT_WS_HOST ?? 'wss://stream.binance.com',
};

export const RECONNECT_TIMEOUT = 2000;
export const FORCE_CLOSED = 'Connection was force closed';
