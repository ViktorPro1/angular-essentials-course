import { Component, signal } from '@angular/core';
import { weather, WeatherData } from '../data/weather';

@Component({
  selector: 'app-weather-card',
  imports: [],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css'
})
export class WeatherCard {
  weather = signal<WeatherData>(weather);
}
