export interface CityWeather {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  humidity: number;
}

export const weatherList: CityWeather[] = [
  { city: 'London', country: 'GB', temperature: 16, condition: 'Overcast clouds', humidity: 85 },
  { city: 'Kyiv', country: 'UA', temperature: 22, condition: 'Clear sky', humidity: 60 },
  { city: 'Paris', country: 'FR', temperature: 19, condition: 'Light rain', humidity: 78 },
  { city: 'Berlin', country: 'DE', temperature: 17, condition: 'Cloudy', humidity: 70 }
];
