export interface WeatherData {
  city: string;
  country: string;
  dateTime: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  windDescription: string;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  humidity: number;
  uvIndex: number;
  dewPoint: number;
  visibility: number;
  isDay: boolean;
}

export const weather: WeatherData = {
  city: 'London',
  country: 'GB',
  dateTime: 'Nov 6, 12:04pm',
  temperature: 16,
  feelsLike: 16,
  condition: 'Overcast clouds. Light air',
  windDescription: 'SSW',
  windSpeed: 1.5,
  windDirection: 'SSW',
  pressure: 1005,
  humidity: 85,
  uvIndex: 0,
  dewPoint: 14,
  visibility: 10.0,
  isDay: true
};
