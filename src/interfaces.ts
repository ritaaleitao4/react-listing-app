
// Listing interface
export interface ListingInterface {
  id: string
  name: string
  description: string
  price: number
  currency: CURRENCY,
  priceInGBP: number
}

// Listing form interface
export interface ListingFormInterface {
  listing: ListingInterface[];
  handleListingCreate: (listing: ListingInterface) => void;
}

// Listing list interface
export interface ListingListInterface {
  handleListingRemove: (id: string) => void;
  listing: ListingInterface[];
}

// Listing item interface
export interface ListingItemInterface {
  handleListingRemove: (id: string) => void;
  listing: ListingInterface;
}

// Currency options
export enum CURRENCY {
  AUD = "AUD",
  EUR = "EUR",
  BGN = "BGN",
  BRL = "BRL",
  CAD = "CAD",
  CHF = "CHF",
  CNY = "CNY",
  CZK = "CZK",
  DKK = "DKK",
  GBP = "GBP",
  HKD = "HKD",
  HRK = "HRK",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  ISK = "ISK",
  JPY = "JPY",
  KRW = "KRW",
  MXN = "MXN",
  MYR = "MYR",
  NOK = "NOK",
  NZD = "NZD",
  PHP = "PHP",
  PLN = "PLN",
  RON = "RON",
  RUB = "RUB",
  SEK = "SEK",
  SGD = "SGD",
  THB = "THB",
  TRY = "TRY",
  USD = "USD",
  ZAR = "ZAR",
}

// Currency rates
export interface RatesInterface {
  rates: any
}