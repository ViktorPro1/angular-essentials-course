import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { WeatherCard } from './practice-2/weather-card/weather-card';
import { CityWeatherList } from './practice-2/city-weather-list/city-weather-list';
import { ProductCatalog } from './practice-2/product-catalog/product-catalog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, WeatherCard, CityWeatherList, ProductCatalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('samples');
}
