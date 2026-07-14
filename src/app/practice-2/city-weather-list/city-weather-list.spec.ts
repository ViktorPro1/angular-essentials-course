import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherList } from './city-weather-list';

describe('CityWeatherList', () => {
  let component: CityWeatherList;
  let fixture: ComponentFixture<CityWeatherList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityWeatherList],
    }).compileComponents();

    fixture = TestBed.createComponent(CityWeatherList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
