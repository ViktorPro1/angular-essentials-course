import { Component, signal } from '@angular/core';
import { weatherList, CityWeather } from '../data/weather-list';

@Component({
  selector: 'app-city-weather-list',
  imports: [],
  templateUrl: './city-weather-list.html',
  styleUrl: './city-weather-list.css'
})
export class CityWeatherList {
  cities = signal<CityWeather[]>(weatherList);
}
