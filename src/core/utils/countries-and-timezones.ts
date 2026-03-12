import { Country, State, City } from "country-state-city";

export type { ICountry, IState, ICity } from "country-state-city";

export const getCountriesV2 = () => {
  return Country.getAllCountries();
};

export const getStatesOfCountryV2 = (countryCode: string) => {
  return State.getStatesOfCountry(countryCode);
};

export const getCitiesOfStateV2 = (countryCode: string, stateCode: string) => {
  return City.getCitiesOfState(countryCode, stateCode);
};

export const getCountries = () => countriesWithTimezones.map(({ country }) => country);

export const getTimezonesByCountry = (country?: string) => {
  if (!country || country === undefined) {
    return countriesWithTimezones.reduce<
      { timeZone: string; name: string; tzCode: string; utc: string; country: string }[]
    >((acc, country) => {
      return [...acc, ...country.timeZones.map((tz) => ({ ...tz, country: country.country }))];
    }, []);
  }

  const result = countriesWithTimezones.find((countryWithTZ) => {
    return countryWithTZ.country.toLowerCase() === country.toLowerCase();
  });

  if (!result || result === undefined) {
    return [];
  } else {
    return result.timeZones.map((tz) => ({ ...tz, country }));
  }
};

const countriesWithTimezones = [
  {
    id: 4,
    alpha2: "af",
    alpha3: "afg",
    country: "Afghanistan",
    timeZones: [
      { timeZone: "Afghanistan Time", name: "(GMT+04:30) Kabul", tzCode: "AFT", utc: "+04:30" },
    ],
  },
  {
    id: 8,
    alpha2: "al",
    alpha3: "alb",
    country: "Albania",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Tirana",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 12,
    alpha2: "dz",
    alpha3: "dza",
    country: "Algeria",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Algiers",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 20,
    alpha2: "ad",
    alpha3: "and",
    country: "Andorra",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Andorra",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 24,
    alpha2: "ao",
    alpha3: "ago",
    country: "Angola",
    timeZones: [
      { timeZone: "West Africa Time", name: "(GMT+01:00) Luanda", tzCode: "WAT", utc: "+01:00" },
    ],
  },
  {
    id: 28,
    alpha2: "ag",
    alpha3: "atg",
    country: "Antigua and Barbuda",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Antigua",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 32,
    alpha2: "ar",
    alpha3: "arg",
    country: "Argentina",
    timeZones: [
      {
        timeZone: "Argentina Time",
        name: "(GMT-03:00) Buenos Aires",
        tzCode: "ART",
        utc: "-03:00",
      },
    ],
  },
  {
    id: 51,
    alpha2: "am",
    alpha3: "arm",
    country: "Armenia",
    timeZones: [
      { timeZone: "Armenia Time", name: "(GMT+04:00) Yerevan", tzCode: "AMT", utc: "+04:00" },
    ],
  },
  {
    id: 36,
    alpha2: "au",
    alpha3: "aus",
    country: "Australia",
    timeZones: [
      {
        timeZone: "Australian Western Standard Time",
        name: "(GMT+08:00) Perth",
        tzCode: "AWST",
        utc: "+08:00",
      },
      {
        timeZone: "Australian Central Standard Time",
        name: "(GMT+09:30) Adelaide",
        tzCode: "ACST",
        utc: "+09:30",
      },
      {
        timeZone: "Australian Eastern Standard Time",
        name: "(GMT+10:00) Sydney",
        tzCode: "AEST",
        utc: "+10:00",
      },
    ],
  },
  {
    id: 40,
    alpha2: "at",
    alpha3: "aut",
    country: "Austria",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Vienna",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 31,
    alpha2: "az",
    alpha3: "aze",
    country: "Azerbaijan",
    timeZones: [
      { timeZone: "Azerbaijan Time", name: "(GMT+04:00) Baku", tzCode: "AZT", utc: "+04:00" },
    ],
  },
  {
    id: 44,
    alpha2: "bs",
    alpha3: "bhs",
    country: "Bahamas",
    timeZones: [
      {
        timeZone: "Eastern Standard Time",
        name: "(GMT-05:00) Nassau",
        tzCode: "EST",
        utc: "-05:00",
      },
    ],
  },
  {
    id: 48,
    alpha2: "bh",
    alpha3: "bhr",
    country: "Bahrain",
    timeZones: [
      {
        timeZone: "Arabian Standard Time",
        name: "(GMT+03:00) Manama",
        tzCode: "AST",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 50,
    alpha2: "bd",
    alpha3: "bgd",
    country: "Bangladesh",
    timeZones: [
      {
        timeZone: "Bangladesh Standard Time",
        name: "(GMT+06:00) Dhaka",
        tzCode: "BST",
        utc: "+06:00",
      },
    ],
  },
  {
    id: 52,
    alpha2: "bb",
    alpha3: "brb",
    country: "Barbados",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Bridgetown",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 112,
    alpha2: "by",
    alpha3: "blr",
    country: "Belarus",
    timeZones: [
      { timeZone: "Moscow Standard Time", name: "(GMT+03:00) Minsk", tzCode: "MSK", utc: "+03:00" },
    ],
  },
  {
    id: 56,
    alpha2: "be",
    alpha3: "bel",
    country: "Belgium",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Brussels",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 84,
    alpha2: "bz",
    alpha3: "blz",
    country: "Belize",
    timeZones: [
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) Belize City",
        tzCode: "CST",
        utc: "-06:00",
      },
    ],
  },
  {
    id: 204,
    alpha2: "bj",
    alpha3: "ben",
    country: "Benin",
    timeZones: [
      {
        timeZone: "West Africa Time",
        name: "(GMT+01:00) Porto-Novo",
        tzCode: "WAT",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 64,
    alpha2: "bt",
    alpha3: "btn",
    country: "Bhutan",
    timeZones: [
      { timeZone: "Bhutan Time", name: "(GMT+06:00) Thimphu", tzCode: "BTT", utc: "+06:00" },
    ],
  },
  {
    id: 68,
    alpha2: "bo",
    alpha3: "bol",
    country: "Bolivia, Plurinational State of",
    timeZones: [
      { timeZone: "Bolivia Time", name: "(GMT-04:00) La Paz", tzCode: "BOT", utc: "-04:00" },
    ],
  },
  {
    id: 70,
    alpha2: "ba",
    alpha3: "bih",
    country: "Bosnia and Herzegovina",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Sarajevo",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 72,
    alpha2: "bw",
    alpha3: "bwa",
    country: "Botswana",
    timeZones: [
      {
        timeZone: "Central Africa Time",
        name: "(GMT+02:00) Gaborone",
        tzCode: "CAT",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 76,
    alpha2: "br",
    alpha3: "bra",
    country: "Brazil",
    timeZones: [
      { timeZone: "Brasilia Time", name: "(GMT-03:00) Brasilia", tzCode: "BRT", utc: "-03:00" },
      { timeZone: "Amazon Time", name: "(GMT-04:00) Manaus", tzCode: "AMT", utc: "-04:00" },
      {
        timeZone: "Fernando de Noronha Time",
        name: "(GMT-02:00) Fernando de Noronha",
        tzCode: "FNT",
        utc: "-02:00",
      },
    ],
  },
  {
    id: 96,
    alpha2: "bn",
    alpha3: "brn",
    country: "Brunei Darussalam",
    timeZones: [
      {
        timeZone: "Brunei Darussalam Time",
        name: "(GMT+08:00) Bandar Seri Begawan",
        tzCode: "BNT",
        utc: "+08:00",
      },
    ],
  },
  {
    id: 100,
    alpha2: "bg",
    alpha3: "bgr",
    country: "Bulgaria",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Sofia",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 854,
    alpha2: "bf",
    alpha3: "bfa",
    country: "Burkina Faso",
    timeZones: [
      {
        timeZone: "Greenwich Mean Time",
        name: "(GMT+00:00) Ouagadougou",
        tzCode: "GMT",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 108,
    alpha2: "bi",
    alpha3: "bdi",
    country: "Burundi",
    timeZones: [
      {
        timeZone: "Central Africa Time",
        name: "(GMT+02:00) Bujumbura",
        tzCode: "CAT",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 132,
    alpha2: "cv",
    alpha3: "cpv",
    country: "Cabo Verde",
    timeZones: [
      { timeZone: "Cape Verde Time", name: "(GMT-01:00) Praia", tzCode: "CVT", utc: "-01:00" },
    ],
  },
  {
    id: 116,
    alpha2: "kh",
    alpha3: "khm",
    country: "Cambodia",
    timeZones: [
      { timeZone: "Indochina Time", name: "(GMT+07:00) Phnom Penh", tzCode: "ICT", utc: "+07:00" },
    ],
  },
  {
    id: 120,
    alpha2: "cm",
    alpha3: "cmr",
    country: "Cameroon",
    timeZones: [
      { timeZone: "West Africa Time", name: "(GMT+01:00) Yaounde", tzCode: "WAT", utc: "+01:00" },
    ],
  },
  {
    id: 124,
    alpha2: "ca",
    alpha3: "can",
    country: "Canada",
    timeZones: [
      {
        timeZone: "Pacific Standard Time",
        name: "(GMT-08:00) Vancouver",
        tzCode: "PST",
        utc: "-08:00",
      },
      {
        timeZone: "Mountain Standard Time",
        name: "(GMT-07:00) Edmonton",
        tzCode: "MST",
        utc: "-07:00",
      },
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) Winnipeg",
        tzCode: "CST",
        utc: "-06:00",
      },
      {
        timeZone: "Eastern Standard Time",
        name: "(GMT-05:00) Toronto",
        tzCode: "EST",
        utc: "-05:00",
      },
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Halifax",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 140,
    alpha2: "cf",
    alpha3: "caf",
    country: "Central African Republic",
    timeZones: [
      { timeZone: "West Africa Time", name: "(GMT+01:00) Bangui", tzCode: "WAT", utc: "+01:00" },
    ],
  },
  {
    id: 148,
    alpha2: "td",
    alpha3: "tcd",
    country: "Chad",
    timeZones: [
      { timeZone: "West Africa Time", name: "(GMT+01:00) N'Djamena", tzCode: "WAT", utc: "+01:00" },
    ],
  },
  {
    id: 152,
    alpha2: "cl",
    alpha3: "chl",
    country: "Chile",
    timeZones: [
      {
        timeZone: "Chile Standard Time",
        name: "(GMT-04:00) Santiago",
        tzCode: "CLT",
        utc: "-04:00",
      },
      {
        timeZone: "Easter Island Standard Time",
        name: "(GMT-06:00) Easter Island",
        tzCode: "EAST",
        utc: "-06:00",
      },
    ],
  },
  {
    id: 156,
    alpha2: "cn",
    alpha3: "chn",
    country: "China",
    timeZones: [
      {
        timeZone: "China Standard Time",
        name: "(GMT+08:00) Beijing",
        tzCode: "CST",
        utc: "+08:00",
      },
    ],
  },
  {
    id: 170,
    alpha2: "co",
    alpha3: "col",
    country: "Colombia",
    timeZones: [
      { timeZone: "Colombia Time", name: "(GMT-05:00) Bogota", tzCode: "COT", utc: "-05:00" },
    ],
  },
  {
    id: 174,
    alpha2: "km",
    alpha3: "com",
    country: "Comoros",
    timeZones: [
      { timeZone: "East Africa Time", name: "(GMT+03:00) Moroni", tzCode: "EAT", utc: "+03:00" },
    ],
  },
  {
    id: 178,
    alpha2: "cg",
    alpha3: "cog",
    country: "Congo",
    timeZones: [
      {
        timeZone: "West Africa Time",
        name: "(GMT+01:00) Brazzaville",
        tzCode: "WAT",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 180,
    alpha2: "cd",
    alpha3: "cod",
    country: "Congo, Democratic Republic of the",
    timeZones: [
      { timeZone: "West Africa Time", name: "(GMT+01:00) Kinshasa", tzCode: "WAT", utc: "+01:00" },
      {
        timeZone: "Central Africa Time",
        name: "(GMT+02:00) Lubumbashi",
        tzCode: "CAT",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 188,
    alpha2: "cr",
    alpha3: "cri",
    country: "Costa Rica",
    timeZones: [
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) San Jose",
        tzCode: "CST",
        utc: "-06:00",
      },
    ],
  },
  {
    id: 384,
    alpha2: "ci",
    alpha3: "civ",
    country: "Côte d'Ivoire",
    timeZones: [
      {
        timeZone: "Greenwich Mean Time",
        name: "(GMT+00:00) Abidjan",
        tzCode: "GMT",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 191,
    alpha2: "hr",
    alpha3: "hrv",
    country: "Croatia",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Zagreb",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 192,
    alpha2: "cu",
    alpha3: "cub",
    country: "Cuba",
    timeZones: [
      { timeZone: "Cuba Standard Time", name: "(GMT-05:00) Havana", tzCode: "CST", utc: "-05:00" },
    ],
  },
  {
    id: 196,
    alpha2: "cy",
    alpha3: "cyp",
    country: "Cyprus",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Nicosia",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 203,
    alpha2: "cz",
    alpha3: "cze",
    country: "Czechia",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Prague",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 208,
    alpha2: "dk",
    alpha3: "dnk",
    country: "Denmark",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Copenhagen",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 262,
    alpha2: "dj",
    alpha3: "dji",
    country: "Djibouti",
    timeZones: [
      { timeZone: "East Africa Time", name: "(GMT+03:00) Djibouti", tzCode: "EAT", utc: "+03:00" },
    ],
  },
  {
    id: 212,
    alpha2: "dm",
    alpha3: "dma",
    country: "Dominica",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Roseau",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 214,
    alpha2: "do",
    alpha3: "dom",
    country: "Dominican Republic",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Santo Domingo",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 218,
    alpha2: "ec",
    alpha3: "ecu",
    country: "Ecuador",
    timeZones: [
      { timeZone: "Ecuador Time", name: "(GMT-05:00) Quito", tzCode: "ECT", utc: "-05:00" },
      {
        timeZone: "Galapagos Time",
        name: "(GMT-06:00) Galapagos Islands",
        tzCode: "GALT",
        utc: "-06:00",
      },
    ],
  },
  {
    id: 818,
    alpha2: "eg",
    alpha3: "egy",
    country: "Egypt",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Cairo",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 222,
    alpha2: "sv",
    alpha3: "slv",
    country: "El Salvador",
    timeZones: [
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) San Salvador",
        tzCode: "CST",
        utc: "-06:00",
      },
    ],
  },
  {
    id: 226,
    alpha2: "gq",
    alpha3: "gnq",
    country: "Equatorial Guinea",
    timeZones: [
      { timeZone: "West Africa Time", name: "(GMT+01:00) Malabo", tzCode: "WAT", utc: "+01:00" },
    ],
  },
  {
    id: 232,
    alpha2: "er",
    alpha3: "eri",
    country: "Eritrea",
    timeZones: [
      { timeZone: "East Africa Time", name: "(GMT+03:00) Asmara", tzCode: "EAT", utc: "+03:00" },
    ],
  },
  {
    id: 233,
    alpha2: "ee",
    alpha3: "est",
    country: "Estonia",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Tallinn",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 748,
    alpha2: "sz",
    alpha3: "swz",
    country: "Eswatini",
    timeZones: [
      {
        timeZone: "South Africa Standard Time",
        name: "(GMT+02:00) Mbabane",
        tzCode: "SAST",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 231,
    alpha2: "et",
    alpha3: "eth",
    country: "Ethiopia",
    timeZones: [
      {
        timeZone: "East Africa Time",
        name: "(GMT+03:00) Addis Ababa",
        tzCode: "EAT",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 242,
    alpha2: "fj",
    alpha3: "fji",
    country: "Fiji",
    timeZones: [{ timeZone: "Fiji Time", name: "(GMT+12:00) Suva", tzCode: "FJT", utc: "+12:00" }],
  },
  {
    id: 246,
    alpha2: "fi",
    alpha3: "fin",
    country: "Finland",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Helsinki",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 250,
    alpha2: "fr",
    alpha3: "fra",
    country: "France",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Paris",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 266,
    alpha2: "ga",
    alpha3: "gab",
    country: "Gabon",
    timeZones: [
      {
        timeZone: "West Africa Time",
        name: "(GMT+01:00) Libreville",
        tzCode: "WAT",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 270,
    alpha2: "gm",
    alpha3: "gmb",
    country: "Gambia",
    timeZones: [
      { timeZone: "Greenwich Mean Time", name: "(GMT+00:00) Banjul", tzCode: "GMT", utc: "+00:00" },
    ],
  },
  {
    id: 268,
    alpha2: "ge",
    alpha3: "geo",
    country: "Georgia",
    timeZones: [
      {
        timeZone: "Georgia Standard Time",
        name: "(GMT+04:00) Tbilisi",
        tzCode: "GET",
        utc: "+04:00",
      },
    ],
  },
  {
    id: 276,
    alpha2: "de",
    alpha3: "deu",
    country: "Germany",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Berlin",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 288,
    alpha2: "gh",
    alpha3: "gha",
    country: "Ghana",
    timeZones: [
      { timeZone: "Greenwich Mean Time", name: "(GMT+00:00) Accra", tzCode: "GMT", utc: "+00:00" },
    ],
  },
  {
    id: 300,
    alpha2: "gr",
    alpha3: "grc",
    country: "Greece",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Athens",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 308,
    alpha2: "gd",
    alpha3: "grd",
    country: "Grenada",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) St. George's",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 320,
    alpha2: "gt",
    alpha3: "gtm",
    country: "Guatemala",
    timeZones: [
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) Guatemala City",
        tzCode: "CST",
        utc: "-06:00",
      },
    ],
  },
  {
    id: 324,
    alpha2: "gn",
    alpha3: "gin",
    country: "Guinea",
    timeZones: [
      {
        timeZone: "Greenwich Mean Time",
        name: "(GMT+00:00) Conakry",
        tzCode: "GMT",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 624,
    alpha2: "gw",
    alpha3: "gnb",
    country: "Guinea-Bissau",
    timeZones: [
      { timeZone: "Greenwich Mean Time", name: "(GMT+00:00) Bissau", tzCode: "GMT", utc: "+00:00" },
    ],
  },
  {
    id: 328,
    alpha2: "gy",
    alpha3: "guy",
    country: "Guyana",
    timeZones: [
      { timeZone: "Guyana Time", name: "(GMT-04:00) Georgetown", tzCode: "GYT", utc: "-04:00" },
    ],
  },
  {
    id: 332,
    alpha2: "ht",
    alpha3: "hti",
    country: "Haiti",
    timeZones: [
      {
        timeZone: "Eastern Standard Time",
        name: "(GMT-05:00) Port-au-Prince",
        tzCode: "EST",
        utc: "-05:00",
      },
    ],
  },
  {
    id: 340,
    alpha2: "hn",
    alpha3: "hnd",
    country: "Honduras",
    timeZones: [
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) Tegucigalpa",
        tzCode: "CST",
        utc: "-06:00",
      },
    ],
  },
  {
    id: 348,
    alpha2: "hu",
    alpha3: "hun",
    country: "Hungary",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Budapest",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 352,
    alpha2: "is",
    alpha3: "isl",
    country: "Iceland",
    timeZones: [
      {
        timeZone: "Greenwich Mean Time",
        name: "(GMT+00:00) Reykjavik",
        tzCode: "GMT",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 356,
    alpha2: "in",
    alpha3: "ind",
    country: "India",
    timeZones: [
      {
        timeZone: "India Standard Time",
        name: "(GMT+05:30) New Delhi",
        tzCode: "IST",
        utc: "+05:30",
      },
    ],
  },
  {
    id: 360,
    alpha2: "id",
    alpha3: "idn",
    country: "Indonesia",
    timeZones: [
      {
        timeZone: "Western Indonesia Time",
        name: "(GMT+07:00) Jakarta",
        tzCode: "WIB",
        utc: "+07:00",
      },
      {
        timeZone: "Central Indonesia Time",
        name: "(GMT+08:00) Makassar",
        tzCode: "WITA",
        utc: "+08:00",
      },
      {
        timeZone: "Eastern Indonesia Time",
        name: "(GMT+09:00) Jayapura",
        tzCode: "WIT",
        utc: "+09:00",
      },
    ],
  },
  {
    id: 364,
    alpha2: "ir",
    alpha3: "irn",
    country: "Iran, Islamic Republic of",
    timeZones: [
      { timeZone: "Iran Standard Time", name: "(GMT+03:30) Tehran", tzCode: "IRST", utc: "+03:30" },
    ],
  },
  {
    id: 368,
    alpha2: "iq",
    alpha3: "irq",
    country: "Iraq",
    timeZones: [
      {
        timeZone: "Arabian Standard Time",
        name: "(GMT+03:00) Baghdad",
        tzCode: "AST",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 372,
    alpha2: "ie",
    alpha3: "irl",
    country: "Ireland",
    timeZones: [
      { timeZone: "Greenwich Mean Time", name: "(GMT+00:00) Dublin", tzCode: "GMT", utc: "+00:00" },
    ],
  },
  {
    id: 376,
    alpha2: "il",
    alpha3: "isr",
    country: "Israel",
    timeZones: [
      {
        timeZone: "Israel Standard Time",
        name: "(GMT+02:00) Jerusalem",
        tzCode: "IST",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 380,
    alpha2: "it",
    alpha3: "ita",
    country: "Italy",
    timeZones: [
      { timeZone: "Central European Time", name: "(GMT+01:00) Rome", tzCode: "CET", utc: "+01:00" },
    ],
  },
  {
    id: 388,
    alpha2: "jm",
    alpha3: "jam",
    country: "Jamaica",
    timeZones: [
      {
        timeZone: "Eastern Standard Time",
        name: "(GMT-05:00) Kingston",
        tzCode: "EST",
        utc: "-05:00",
      },
    ],
  },
  {
    id: 392,
    alpha2: "jp",
    alpha3: "jpn",
    country: "Japan",
    timeZones: [
      { timeZone: "Japan Standard Time", name: "(GMT+09:00) Tokyo", tzCode: "JST", utc: "+09:00" },
    ],
  },
  {
    id: 400,
    alpha2: "jo",
    alpha3: "jor",
    country: "Jordan",
    timeZones: [
      {
        timeZone: "Arabian Standard Time",
        name: "(GMT+03:00) Amman",
        tzCode: "AST",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 398,
    alpha2: "kz",
    alpha3: "kaz",
    country: "Kazakhstan",
    timeZones: [
      { timeZone: "West Kazakhstan Time", name: "(GMT+05:00) Oral", tzCode: "AQTT", utc: "+05:00" },
      {
        timeZone: "East Kazakhstan Time",
        name: "(GMT+06:00) Almaty",
        tzCode: "ALMT",
        utc: "+06:00",
      },
    ],
  },
  {
    id: 404,
    alpha2: "ke",
    alpha3: "ken",
    country: "Kenya",
    timeZones: [
      { timeZone: "East Africa Time", name: "(GMT+03:00) Nairobi", tzCode: "EAT", utc: "+03:00" },
    ],
  },
  {
    id: 296,
    alpha2: "ki",
    alpha3: "kir",
    country: "Kiribati",
    timeZones: [
      {
        timeZone: "Gilbert Island Time",
        name: "(GMT+12:00) Tarawa",
        tzCode: "GILT",
        utc: "+12:00",
      },
      {
        timeZone: "Phoenix Island Time",
        name: "(GMT+13:00) Phoenix Islands",
        tzCode: "PHOT",
        utc: "+13:00",
      },
      {
        timeZone: "Line Island Time",
        name: "(GMT+14:00) Kiritimati",
        tzCode: "LINT",
        utc: "+14:00",
      },
    ],
  },
  {
    id: 408,
    alpha2: "kp",
    alpha3: "prk",
    country: "Korea, Democratic People's Republic of",
    timeZones: [
      {
        timeZone: "Korea Standard Time",
        name: "(GMT+09:00) Pyongyang",
        tzCode: "KST",
        utc: "+09:00",
      },
    ],
  },
  {
    id: 410,
    alpha2: "kr",
    alpha3: "kor",
    country: "Korea, Republic of",
    timeZones: [
      { timeZone: "Korea Standard Time", name: "(GMT+09:00) Seoul", tzCode: "KST", utc: "+09:00" },
    ],
  },
  {
    id: 638,
    alpha2: "xk",
    alpha3: "xxk",
    country: "Kosovo",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Pristina",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 414,
    alpha2: "kw",
    alpha3: "kwt",
    country: "Kuwait",
    timeZones: [
      {
        timeZone: "Arabian Standard Time",
        name: "(GMT+03:00) Kuwait City",
        tzCode: "AST",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 417,
    alpha2: "kg",
    alpha3: "kgz",
    country: "Kyrgyzstan",
    timeZones: [
      { timeZone: "Kyrgyzstan Time", name: "(GMT+06:00) Bishkek", tzCode: "KGT", utc: "+06:00" },
    ],
  },
  {
    id: 418,
    alpha2: "la",
    alpha3: "lao",
    country: "Lao People's Democratic Republic",
    timeZones: [
      { timeZone: "Indochina Time", name: "(GMT+07:00) Vientiane", tzCode: "ICT", utc: "+07:00" },
    ],
  },
  {
    id: 428,
    alpha2: "lv",
    alpha3: "lva",
    country: "Latvia",
    timeZones: [
      { timeZone: "Eastern European Time", name: "(GMT+02:00) Riga", tzCode: "EET", utc: "+02:00" },
    ],
  },
  {
    id: 422,
    alpha2: "lb",
    alpha3: "lbn",
    country: "Lebanon",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Beirut",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 426,
    alpha2: "ls",
    alpha3: "lso",
    country: "Lesotho",
    timeZones: [
      {
        timeZone: "South Africa Standard Time",
        name: "(GMT+02:00) Maseru",
        tzCode: "SAST",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 430,
    alpha2: "lr",
    alpha3: "lbr",
    country: "Liberia",
    timeZones: [
      {
        timeZone: "Greenwich Mean Time",
        name: "(GMT+00:00) Monrovia",
        tzCode: "GMT",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 434,
    alpha2: "ly",
    alpha3: "lby",
    country: "Libya",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Tripoli",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 438,
    alpha2: "li",
    alpha3: "lie",
    country: "Liechtenstein",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Vaduz",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 440,
    alpha2: "lt",
    alpha3: "ltu",
    country: "Lithuania",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Vilnius",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 442,
    alpha2: "lu",
    alpha3: "lux",
    country: "Luxembourg",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Luxembourg",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 450,
    alpha2: "mg",
    alpha3: "mdg",
    country: "Madagascar",
    timeZones: [
      {
        timeZone: "East Africa Time",
        name: "(GMT+03:00) Antananarivo",
        tzCode: "EAT",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 454,
    alpha2: "mw",
    alpha3: "mwi",
    country: "Malawi",
    timeZones: [
      {
        timeZone: "Central Africa Time",
        name: "(GMT+02:00) Lilongwe",
        tzCode: "CAT",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 458,
    alpha2: "my",
    alpha3: "mys",
    country: "Malaysia",
    timeZones: [
      { timeZone: "Malaysia Time", name: "(GMT+08:00) Kuala Lumpur", tzCode: "MYT", utc: "+08:00" },
    ],
  },
  {
    id: 462,
    alpha2: "mv",
    alpha3: "mdv",
    country: "Maldives",
    timeZones: [
      { timeZone: "Maldives Time", name: "(GMT+05:00) Male", tzCode: "MVT", utc: "+05:00" },
    ],
  },
  {
    id: 466,
    alpha2: "ml",
    alpha3: "mli",
    country: "Mali",
    timeZones: [
      { timeZone: "Greenwich Mean Time", name: "(GMT+00:00) Bamako", tzCode: "GMT", utc: "+00:00" },
    ],
  },
  {
    id: 470,
    alpha2: "mt",
    alpha3: "mlt",
    country: "Malta",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Valletta",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 584,
    alpha2: "mh",
    alpha3: "mhl",
    country: "Marshall Islands",
    timeZones: [
      {
        timeZone: "Marshall Islands Time",
        name: "(GMT+12:00) Majuro",
        tzCode: "MHT",
        utc: "+12:00",
      },
    ],
  },
  {
    id: 478,
    alpha2: "mr",
    alpha3: "mrt",
    country: "Mauritania",
    timeZones: [
      {
        timeZone: "Greenwich Mean Time",
        name: "(GMT+00:00) Nouakchott",
        tzCode: "GMT",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 480,
    alpha2: "mu",
    alpha3: "mus",
    country: "Mauritius",
    timeZones: [
      { timeZone: "Mauritius Time", name: "(GMT+04:00) Port Louis", tzCode: "MUT", utc: "+04:00" },
    ],
  },
  {
    id: 484,
    alpha2: "mx",
    alpha3: "mex",
    country: "Mexico",
    timeZones: [
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) Mexico City",
        tzCode: "CST",
        utc: "-06:00",
      },
      {
        timeZone: "Mountain Standard Time",
        name: "(GMT-07:00) Chihuahua",
        tzCode: "MST",
        utc: "-07:00",
      },
      {
        timeZone: "Pacific Standard Time",
        name: "(GMT-08:00) Tijuana",
        tzCode: "PST",
        utc: "-08:00",
      },
    ],
  },
  {
    id: 583,
    alpha2: "fm",
    alpha3: "fsm",
    country: "Micronesia, Federated States of",
    timeZones: [
      { timeZone: "Chuuk Time", name: "(GMT+10:00) Chuuk", tzCode: "CHUT", utc: "+10:00" },
      { timeZone: "Pohnpei Time", name: "(GMT+11:00) Pohnpei", tzCode: "PONT", utc: "+11:00" },
      { timeZone: "Kosrae Time", name: "(GMT+11:00) Kosrae", tzCode: "KOST", utc: "+11:00" },
    ],
  },
  {
    id: 498,
    alpha2: "md",
    alpha3: "mda",
    country: "Moldova, Republic of",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Chisinau",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 492,
    alpha2: "mc",
    alpha3: "mco",
    country: "Monaco",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Monaco",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 496,
    alpha2: "mn",
    alpha3: "mng",
    country: "Mongolia",
    timeZones: [
      {
        timeZone: "Ulaanbaatar Time",
        name: "(GMT+08:00) Ulaanbaatar",
        tzCode: "ULAT",
        utc: "+08:00",
      },
      { timeZone: "Khovd Time", name: "(GMT+07:00) Khovd", tzCode: "HOVT", utc: "+07:00" },
    ],
  },
  {
    id: 499,
    alpha2: "me",
    alpha3: "mne",
    country: "Montenegro",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Podgorica",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 504,
    alpha2: "ma",
    alpha3: "mar",
    country: "Morocco",
    timeZones: [
      {
        timeZone: "Western European Time",
        name: "(GMT+00:00) Casablanca",
        tzCode: "WET",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 508,
    alpha2: "mz",
    alpha3: "moz",
    country: "Mozambique",
    timeZones: [
      { timeZone: "Central Africa Time", name: "(GMT+02:00) Maputo", tzCode: "CAT", utc: "+02:00" },
    ],
  },
  {
    id: 104,
    alpha2: "mm",
    alpha3: "mmr",
    country: "Myanmar",
    timeZones: [
      { timeZone: "Myanmar Time", name: "(GMT+06:30) Yangon", tzCode: "MMT", utc: "+06:30" },
    ],
  },
  {
    id: 516,
    alpha2: "na",
    alpha3: "nam",
    country: "Namibia",
    timeZones: [
      {
        timeZone: "Central Africa Time",
        name: "(GMT+02:00) Windhoek",
        tzCode: "CAT",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 520,
    alpha2: "nr",
    alpha3: "nru",
    country: "Nauru",
    timeZones: [
      { timeZone: "Nauru Time", name: "(GMT+12:00) Yaren", tzCode: "NRT", utc: "+12:00" },
    ],
  },
  {
    id: 524,
    alpha2: "np",
    alpha3: "npl",
    country: "Nepal",
    timeZones: [
      { timeZone: "Nepal Time", name: "(GMT+05:45) Kathmandu", tzCode: "NPT", utc: "+05:45" },
    ],
  },
  {
    id: 528,
    alpha2: "nl",
    alpha3: "nld",
    country: "Netherlands",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Amsterdam",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 554,
    alpha2: "nz",
    alpha3: "nzl",
    country: "New Zealand",
    timeZones: [
      {
        timeZone: "New Zealand Time",
        name: "(GMT+12:00) Wellington",
        tzCode: "NZT",
        utc: "+12:00",
      },
    ],
  },
  {
    id: 558,
    alpha2: "ni",
    alpha3: "nic",
    country: "Nicaragua",
    timeZones: [
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) Managua",
        tzCode: "CST",
        utc: "-06:00",
      },
    ],
  },
  {
    id: 562,
    alpha2: "ne",
    alpha3: "ner",
    country: "Niger",
    timeZones: [
      { timeZone: "West Africa Time", name: "(GMT+01:00) Niamey", tzCode: "WAT", utc: "+01:00" },
    ],
  },
  {
    id: 566,
    alpha2: "ng",
    alpha3: "nga",
    country: "Nigeria",
    timeZones: [
      { timeZone: "West Africa Time", name: "(GMT+01:00) Lagos", tzCode: "WAT", utc: "+01:00" },
    ],
  },
  {
    id: 807,
    alpha2: "mk",
    alpha3: "mkd",
    country: "North Macedonia",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Skopje",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 578,
    alpha2: "no",
    alpha3: "nor",
    country: "Norway",
    timeZones: [
      { timeZone: "Central European Time", name: "(GMT+01:00) Oslo", tzCode: "CET", utc: "+01:00" },
    ],
  },
  {
    id: 512,
    alpha2: "om",
    alpha3: "omn",
    country: "Oman",
    timeZones: [
      { timeZone: "Gulf Standard Time", name: "(GMT+04:00) Muscat", tzCode: "GST", utc: "+04:00" },
    ],
  },
  {
    id: 586,
    alpha2: "pk",
    alpha3: "pak",
    country: "Pakistan",
    timeZones: [
      {
        timeZone: "Pakistan Standard Time",
        name: "(GMT+05:00) Islamabad",
        tzCode: "PKT",
        utc: "+05:00",
      },
    ],
  },
  {
    id: 585,
    alpha2: "pw",
    alpha3: "plw",
    country: "Palau",
    timeZones: [
      { timeZone: "Palau Time", name: "(GMT+09:00) Ngerulmud", tzCode: "PWT", utc: "+09:00" },
    ],
  },
  {
    id: 275,
    alpha2: "ps",
    alpha3: "pse",
    country: "Palestine, State of",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Ramallah",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 591,
    alpha2: "pa",
    alpha3: "pan",
    country: "Panama",
    timeZones: [
      {
        timeZone: "Eastern Standard Time",
        name: "(GMT-05:00) Panama City",
        tzCode: "EST",
        utc: "-05:00",
      },
    ],
  },
  {
    id: 598,
    alpha2: "pg",
    alpha3: "png",
    country: "Papua New Guinea",
    timeZones: [
      {
        timeZone: "Papua New Guinea Time",
        name: "(GMT+10:00) Port Moresby",
        tzCode: "PGT",
        utc: "+10:00",
      },
    ],
  },
  {
    id: 600,
    alpha2: "py",
    alpha3: "pry",
    country: "Paraguay",
    timeZones: [
      { timeZone: "Paraguay Time", name: "(GMT-04:00) Asuncion", tzCode: "PYT", utc: "-04:00" },
    ],
  },
  {
    id: 604,
    alpha2: "pe",
    alpha3: "per",
    country: "Peru",
    timeZones: [{ timeZone: "Peru Time", name: "(GMT-05:00) Lima", tzCode: "PET", utc: "-05:00" }],
  },
  {
    id: 608,
    alpha2: "ph",
    alpha3: "phl",
    country: "Philippines",
    timeZones: [
      { timeZone: "Philippine Time", name: "(GMT+08:00) Manila", tzCode: "PHT", utc: "+08:00" },
    ],
  },
  {
    id: 616,
    alpha2: "pl",
    alpha3: "pol",
    country: "Poland",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Warsaw",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 620,
    alpha2: "pt",
    alpha3: "prt",
    country: "Portugal",
    timeZones: [
      {
        timeZone: "Western European Time",
        name: "(GMT+00:00) Lisbon",
        tzCode: "WET",
        utc: "+00:00",
      },
      { timeZone: "Azores Time", name: "(GMT-01:00) Azores", tzCode: "AZOT", utc: "-01:00" },
    ],
  },
  {
    id: 634,
    alpha2: "qa",
    alpha3: "qat",
    country: "Qatar",
    timeZones: [
      { timeZone: "Arabian Standard Time", name: "(GMT+03:00) Doha", tzCode: "AST", utc: "+03:00" },
    ],
  },
  {
    id: 642,
    alpha2: "ro",
    alpha3: "rou",
    country: "Romania",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Bucharest",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 643,
    alpha2: "ru",
    alpha3: "rus",
    country: "Russian Federation",
    timeZones: [
      {
        timeZone: "Moscow Standard Time",
        name: "(GMT+03:00) Moscow",
        tzCode: "MSK",
        utc: "+03:00",
      },
      {
        timeZone: "Yekaterinburg Time",
        name: "(GMT+05:00) Yekaterinburg",
        tzCode: "YEKT",
        utc: "+05:00",
      },
      { timeZone: "Omsk Time", name: "(GMT+06:00) Omsk", tzCode: "OMST", utc: "+06:00" },
      {
        timeZone: "Krasnoyarsk Time",
        name: "(GMT+07:00) Krasnoyarsk",
        tzCode: "KRAT",
        utc: "+07:00",
      },
      { timeZone: "Irkutsk Time", name: "(GMT+08:00) Irkutsk", tzCode: "IRKT", utc: "+08:00" },
      { timeZone: "Yakutsk Time", name: "(GMT+09:00) Yakutsk", tzCode: "YAKT", utc: "+09:00" },
      {
        timeZone: "Vladivostok Time",
        name: "(GMT+10:00) Vladivostok",
        tzCode: "VLAT",
        utc: "+10:00",
      },
      { timeZone: "Magadan Time", name: "(GMT+11:00) Magadan", tzCode: "MAGT", utc: "+11:00" },
      { timeZone: "Kamchatka Time", name: "(GMT+12:00) Kamchatka", tzCode: "PETT", utc: "+12:00" },
    ],
  },
  {
    id: 646,
    alpha2: "rw",
    alpha3: "rwa",
    country: "Rwanda",
    timeZones: [
      { timeZone: "Central Africa Time", name: "(GMT+02:00) Kigali", tzCode: "CAT", utc: "+02:00" },
    ],
  },
  {
    id: 659,
    alpha2: "kn",
    alpha3: "kna",
    country: "Saint Kitts and Nevis",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Basseterre",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 662,
    alpha2: "lc",
    alpha3: "lca",
    country: "Saint Lucia",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Castries",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 670,
    alpha2: "vc",
    alpha3: "vct",
    country: "Saint Vincent and the Grenadines",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Kingstown",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 882,
    alpha2: "ws",
    alpha3: "wsm",
    country: "Samoa",
    timeZones: [
      { timeZone: "West Samoa Time", name: "(GMT+13:00) Apia", tzCode: "WST", utc: "+13:00" },
    ],
  },
  {
    id: 674,
    alpha2: "sm",
    alpha3: "smr",
    country: "San Marino",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) San Marino",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 678,
    alpha2: "st",
    alpha3: "stp",
    country: "Sao Tome and Principe",
    timeZones: [
      {
        timeZone: "Greenwich Mean Time",
        name: "(GMT+00:00) Sao Tome",
        tzCode: "GMT",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 682,
    alpha2: "sa",
    alpha3: "sau",
    country: "Saudi Arabia",
    timeZones: [
      {
        timeZone: "Arabian Standard Time",
        name: "(GMT+03:00) Riyadh",
        tzCode: "AST",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 686,
    alpha2: "sn",
    alpha3: "sen",
    country: "Senegal",
    timeZones: [
      { timeZone: "Greenwich Mean Time", name: "(GMT+00:00) Dakar", tzCode: "GMT", utc: "+00:00" },
    ],
  },
  {
    id: 688,
    alpha2: "rs",
    alpha3: "srb",
    country: "Serbia",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Belgrade",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 690,
    alpha2: "sc",
    alpha3: "syc",
    country: "Seychelles",
    timeZones: [
      { timeZone: "Seychelles Time", name: "(GMT+04:00) Victoria", tzCode: "SCT", utc: "+04:00" },
    ],
  },
  {
    id: 694,
    alpha2: "sl",
    alpha3: "sle",
    country: "Sierra Leone",
    timeZones: [
      {
        timeZone: "Greenwich Mean Time",
        name: "(GMT+00:00) Freetown",
        tzCode: "GMT",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 702,
    alpha2: "sg",
    alpha3: "sgp",
    country: "Singapore",
    timeZones: [
      { timeZone: "Singapore Time", name: "(GMT+08:00) Singapore", tzCode: "SGT", utc: "+08:00" },
    ],
  },
  {
    id: 703,
    alpha2: "sk",
    alpha3: "svk",
    country: "Slovakia",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Bratislava",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 705,
    alpha2: "si",
    alpha3: "svn",
    country: "Slovenia",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Ljubljana",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 90,
    alpha2: "sb",
    alpha3: "slb",
    country: "Solomon Islands",
    timeZones: [
      {
        timeZone: "Solomon Islands Time",
        name: "(GMT+11:00) Honiara",
        tzCode: "SBT",
        utc: "+11:00",
      },
    ],
  },
  {
    id: 706,
    alpha2: "so",
    alpha3: "som",
    country: "Somalia",
    timeZones: [
      { timeZone: "East Africa Time", name: "(GMT+03:00) Mogadishu", tzCode: "EAT", utc: "+03:00" },
    ],
  },
  {
    id: 710,
    alpha2: "za",
    alpha3: "zaf",
    country: "South Africa",
    timeZones: [
      {
        timeZone: "South Africa Standard Time",
        name: "(GMT+02:00) Pretoria",
        tzCode: "SAST",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 728,
    alpha2: "ss",
    alpha3: "ssd",
    country: "South Sudan",
    timeZones: [
      { timeZone: "Central Africa Time", name: "(GMT+02:00) Juba", tzCode: "CAT", utc: "+02:00" },
    ],
  },
  {
    id: 724,
    alpha2: "es",
    alpha3: "esp",
    country: "Spain",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Madrid",
        tzCode: "CET",
        utc: "+01:00",
      },
      {
        timeZone: "Western European Time",
        name: "(GMT+00:00) Canary Islands",
        tzCode: "WET",
        utc: "+00:00",
      },
    ],
  },
  {
    id: 144,
    alpha2: "lk",
    alpha3: "lka",
    country: "Sri Lanka",
    timeZones: [
      { timeZone: "Sri Lanka Time", name: "(GMT+05:30) Colombo", tzCode: "SLT", utc: "+05:30" },
    ],
  },
  {
    id: 729,
    alpha2: "sd",
    alpha3: "sdn",
    country: "Sudan",
    timeZones: [
      {
        timeZone: "Central Africa Time",
        name: "(GMT+02:00) Khartoum",
        tzCode: "CAT",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 740,
    alpha2: "sr",
    alpha3: "sur",
    country: "Suriname",
    timeZones: [
      { timeZone: "Suriname Time", name: "(GMT-03:00) Paramaribo", tzCode: "SRT", utc: "-03:00" },
    ],
  },
  {
    id: 752,
    alpha2: "se",
    alpha3: "swe",
    country: "Sweden",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Stockholm",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 756,
    alpha2: "ch",
    alpha3: "che",
    country: "Switzerland",
    timeZones: [
      { timeZone: "Central European Time", name: "(GMT+01:00) Bern", tzCode: "CET", utc: "+01:00" },
    ],
  },
  {
    id: 760,
    alpha2: "sy",
    alpha3: "syr",
    country: "Syrian Arab Republic",
    timeZones: [
      {
        timeZone: "Eastern European Time",
        name: "(GMT+02:00) Damascus",
        tzCode: "EET",
        utc: "+02:00",
      },
    ],
  },
  {
    id: 762,
    alpha2: "tj",
    alpha3: "tjk",
    country: "Tajikistan",
    timeZones: [
      { timeZone: "Tajikistan Time", name: "(GMT+05:00) Dushanbe", tzCode: "TJT", utc: "+05:00" },
    ],
  },
  {
    id: 834,
    alpha2: "tz",
    alpha3: "tza",
    country: "Tanzania, United Republic of",
    timeZones: [
      {
        timeZone: "East Africa Time",
        name: "(GMT+03:00) Dar es Salaam",
        tzCode: "EAT",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 764,
    alpha2: "th",
    alpha3: "tha",
    country: "Thailand",
    timeZones: [
      { timeZone: "Indochina Time", name: "(GMT+07:00) Bangkok", tzCode: "ICT", utc: "+07:00" },
    ],
  },
  {
    id: 626,
    alpha2: "tl",
    alpha3: "tls",
    country: "Timor-Leste",
    timeZones: [
      { timeZone: "East Timor Time", name: "(GMT+09:00) Dili", tzCode: "TLT", utc: "+09:00" },
    ],
  },
  {
    id: 768,
    alpha2: "tg",
    alpha3: "tgo",
    country: "Togo",
    timeZones: [
      { timeZone: "Greenwich Mean Time", name: "(GMT+00:00) Lome", tzCode: "GMT", utc: "+00:00" },
    ],
  },
  {
    id: 776,
    alpha2: "to",
    alpha3: "ton",
    country: "Tonga",
    timeZones: [
      { timeZone: "Tonga Time", name: "(GMT+13:00) Nuku'alofa", tzCode: "TOT", utc: "+13:00" },
    ],
  },
  {
    id: 780,
    alpha2: "tt",
    alpha3: "tto",
    country: "Trinidad and Tobago",
    timeZones: [
      {
        timeZone: "Atlantic Standard Time",
        name: "(GMT-04:00) Port of Spain",
        tzCode: "AST",
        utc: "-04:00",
      },
    ],
  },
  {
    id: 788,
    alpha2: "tn",
    alpha3: "tun",
    country: "Tunisia",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Tunis",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 792,
    alpha2: "tr",
    alpha3: "tur",
    country: "Türkiye",
    timeZones: [
      { timeZone: "Turkey Time", name: "(GMT+03:00) Istanbul", tzCode: "TRT", utc: "+03:00" },
    ],
  },
  {
    id: 795,
    alpha2: "tm",
    alpha3: "tkm",
    country: "Turkmenistan",
    timeZones: [
      { timeZone: "Turkmenistan Time", name: "(GMT+05:00) Ashgabat", tzCode: "TMT", utc: "+05:00" },
    ],
  },
  {
    id: 798,
    alpha2: "tv",
    alpha3: "tuv",
    country: "Tuvalu",
    timeZones: [
      { timeZone: "Tuvalu Time", name: "(GMT+12:00) Funafuti", tzCode: "TVT", utc: "+12:00" },
    ],
  },
  {
    id: 800,
    alpha2: "ug",
    alpha3: "uga",
    country: "Uganda",
    timeZones: [
      { timeZone: "East Africa Time", name: "(GMT+03:00) Kampala", tzCode: "EAT", utc: "+03:00" },
    ],
  },
  {
    id: 804,
    alpha2: "ua",
    alpha3: "ukr",
    country: "Ukraine",
    timeZones: [
      { timeZone: "Eastern European Time", name: "(GMT+02:00) Kyiv", tzCode: "EET", utc: "+02:00" },
    ],
  },
  {
    id: 784,
    alpha2: "ae",
    alpha3: "are",
    country: "United Arab Emirates",
    timeZones: [
      {
        timeZone: "Gulf Standard Time",
        name: "(GMT+04:00) Abu Dhabi",
        tzCode: "GST",
        utc: "+04:00",
      },
    ],
  },
  {
    id: 826,
    alpha2: "gb",
    alpha3: "gbr",
    country: "United Kingdom",
    timeZones: [
      { timeZone: "Greenwich Mean Time", name: "(GMT+00:00) London", tzCode: "GMT", utc: "+00:00" },
      { timeZone: "British Summer Time", name: "(GMT+01:00) London", tzCode: "BST", utc: "+01:00" },
    ],
  },
  {
    id: 840,
    alpha2: "us",
    alpha3: "usa",
    country: "United States",
    timeZones: [
      {
        timeZone: "Eastern Standard Time",
        name: "(GMT-05:00) New York",
        tzCode: "EST",
        utc: "-05:00",
      },
      {
        timeZone: "Central Standard Time",
        name: "(GMT-06:00) Chicago",
        tzCode: "CST",
        utc: "-06:00",
      },
      {
        timeZone: "Mountain Standard Time",
        name: "(GMT-07:00) Denver",
        tzCode: "MST",
        utc: "-07:00",
      },
      {
        timeZone: "Pacific Standard Time",
        name: "(GMT-08:00) Los Angeles",
        tzCode: "PST",
        utc: "-08:00",
      },
      {
        timeZone: "Alaska Standard Time",
        name: "(GMT-09:00) Anchorage",
        tzCode: "AKST",
        utc: "-09:00",
      },
      {
        timeZone: "Hawaii-Aleutian Standard Time",
        name: "(GMT-10:00) Honolulu",
        tzCode: "HST",
        utc: "-10:00",
      },
    ],
  },
  {
    id: 858,
    alpha2: "uy",
    alpha3: "ury",
    country: "Uruguay",
    timeZones: [
      { timeZone: "Uruguay Time", name: "(GMT-03:00) Montevideo", tzCode: "UYT", utc: "-03:00" },
    ],
  },
  {
    id: 860,
    alpha2: "uz",
    alpha3: "uzb",
    country: "Uzbekistan",
    timeZones: [
      { timeZone: "Uzbekistan Time", name: "(GMT+05:00) Tashkent", tzCode: "UZT", utc: "+05:00" },
    ],
  },
  {
    id: 548,
    alpha2: "vu",
    alpha3: "vut",
    country: "Vanuatu",
    timeZones: [
      { timeZone: "Vanuatu Time", name: "(GMT+11:00) Port Vila", tzCode: "VUT", utc: "+11:00" },
    ],
  },
  {
    id: 862,
    alpha2: "ve",
    alpha3: "ven",
    country: "Venezuela, Bolivarian Republic of",
    timeZones: [
      { timeZone: "Venezuela Time", name: "(GMT-04:00) Caracas", tzCode: "VET", utc: "-04:00" },
    ],
  },
  {
    id: 336,
    alpha2: "va",
    alpha3: "vat",
    country: "Holy See (Vatican City State)",
    timeZones: [
      {
        timeZone: "Central European Time",
        name: "(GMT+01:00) Vatican City",
        tzCode: "CET",
        utc: "+01:00",
      },
    ],
  },
  {
    id: 704,
    alpha2: "vn",
    alpha3: "vnm",
    country: "Viet Nam",
    timeZones: [
      { timeZone: "Indochina Time", name: "(GMT+07:00) Hanoi", tzCode: "ICT", utc: "+07:00" },
    ],
  },
  {
    id: 887,
    alpha2: "ye",
    alpha3: "yem",
    country: "Yemen",
    timeZones: [
      {
        timeZone: "Arabian Standard Time",
        name: "(GMT+03:00) Sana'a",
        tzCode: "AST",
        utc: "+03:00",
      },
    ],
  },
  {
    id: 894,
    alpha2: "zm",
    alpha3: "zmb",
    country: "Zambia",
    timeZones: [
      { timeZone: "Central Africa Time", name: "(GMT+02:00) Lusaka", tzCode: "CAT", utc: "+02:00" },
    ],
  },
  {
    id: 716,
    alpha2: "zw",
    alpha3: "zwe",
    country: "Zimbabwe",
    timeZones: [
      { timeZone: "Central Africa Time", name: "(GMT+02:00) Harare", tzCode: "CAT", utc: "+02:00" },
    ],
  },
];
