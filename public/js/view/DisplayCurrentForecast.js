import DomElements       from "../other/DomElements.js";
import DatetimeConverter from '../utils/DatetimeConverter.js';

class DisplayCurrentForecast {

    displayCurrentForecast(currentWeather) {
        const domElements = new DomElements();
        const date        = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleDate();
        const time        = new DatetimeConverter(currentWeather.getCurrentTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const sunrise     = new DatetimeConverter(currentWeather.getSunriseTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const sunset      = new DatetimeConverter(currentWeather.getSunsetTimestamp(), currentWeather.getTimezone() ).toLocaleTime();
        const target      = domElements.getSectionForCurrentForecast();
        const geoCoordTarget     = domElements.getSectionForCitySelection();
        geoCoordTarget.innerHTML = "";

        target.innerHTML  = `
                            <h1>${currentWeather.getCityName()} (${currentWeather.getCountryName()})</h1>
                            <div>
                                <p>Date et heure locale</p>
                                <ul>
                                    <li>${date}</li>
                                    <li>Heure locale: ${time}</li>
                                </ul>
                            </div>
                            <p>
                                ${currentWeather.getTemperature()} °C
                            </p>

                            <div>
                            <img src="http://openweathermap.org/img/wn/${currentWeather.getWeatherIcon()}@2x.png" 
                                alt="${currentWeather.getDescription()}">
                            </div>

                            <p>
                                ${currentWeather.getDescription()}
                            </p>

                            <div>
                            <ul>
                                <li>
                                    Humidité: ${currentWeather.getHumidity()}%
                                </li>
                                <li>
                                    Vent: ${currentWeather.getWindSpeed()} km/h
                                </li>
                                <li>
                                    Lever: ${sunrise}
                                </li>
                                <li>
                                    Coucher: ${sunset}
                                </li>
                                <li>
                                    Ressenti: ${currentWeather.getFeelTemperature()} °C
                                </li>
                            </ul>
                            </div>
                        `;
    }
    displayError(error) {
        const domElements          = new DomElements();
        const spanErrorMessage     = domElements.getSpanForErrorMessage();
        spanErrorMessage.innerText = error;
    }
}

export default DisplayCurrentForecast;