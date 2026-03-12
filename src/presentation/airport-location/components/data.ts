export interface IAirport {
  id: number;
  name: string;
  code: string;
  country: string;
  countryCode: string;
  continent: string;
  caterers: number;
}

export const airports: IAirport[] = [
  {
    id: 1,
    name: "John F. Kennedy International",
    code: "JFK",
    country: "United States",
    countryCode: "us",
    continent: "North America",
    caterers: 10,
  },
  {
    id: 2,
    name: "Heathrow Airport",
    code: "LHR",
    country: "United Kingdom",
    countryCode: "gb",
    continent: "Europe",
    caterers: 6,
  },
  {
    id: 3,
    name: "Charles de Gaulle Airport",
    code: "CDG",
    country: "France",
    countryCode: "fr",
    continent: "Europe",
    caterers: 8,
  },
  {
    id: 4,
    name: "Haneda Airport",
    code: "HND",
    country: "Japan",
    countryCode: "jp",
    continent: "Asia",
    caterers: 5,
  },
  {
    id: 5,
    name: "Dubai International",
    code: "DXB",
    country: "United Arab Emirates",
    countryCode: "ae",
    continent: "Asia",
    caterers: 12,
  },
  {
    id: 6,
    name: "Singapore Changi Airport",
    code: "SIN",
    country: "Singapore",
    countryCode: "sg",
    continent: "Asia",
    caterers: 9,
  },
];
