export type TAddress = {
  addressLine: string;
  city: string;
  state: string;
  country: string;
};

export type TCoords = { lat: number; lng: number };

export type TTimeZone = {
  timeZone: string;
  name: string;
  tzCode: string;
  utc: string;
  country: string;
};

export type TSupportContact = {
  staffName: string;
  email: string;
  phone: string;
};

export type TFee = {
  value: number;
  type: "amount" | "percentage";
  note?: string;
};

export type TOperationalHours = Record<TWeekDay, TOperationalDay>;

export type TWeekDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TOperationalDay = {
  isOpen: boolean;
  isOpen24hrs?: boolean;
  opening?: number;
  closing?: number;
};

export type TCurrency = { country: string; name: string; cc: string };
