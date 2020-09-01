import apiClient from './core/apiClient';
import { webSocketClient } from './core/wsClient';

import { ProductService } from './product';

export default {
  products: new ProductService(apiClient, webSocketClient),
};
