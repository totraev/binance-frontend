export interface ProductResponse {
  code: string;
  message: string;
  messageDetail: string;
  data: ProductData[];
  success: boolean;
}

export interface ProductStreamResponse {
  data: ProductStreamData[];
  stream: string;
}

export interface Market {
  market: string;
  categories: string[];
}

export interface ProductData {
  s: string; // symbol
  b: string; // base asset
  q: string; // quote asset
  o: number; // open price
  h: number; // high price
  l: number; // low price
  c: number; // latest price
  v: number; // volume
  pm: string; // parent market
  pn: string; // category of the parent market
  ts: number; // Epsilon
}

export interface ProductStreamData {
  s: string;
  E: number;
  c: string;
  e: string;
  h: string;
  l: string;
  o: string;
  q: string;
  v: string;
}
