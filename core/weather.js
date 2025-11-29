import { logger } from "../utils/logger";

/**
 * Class handling OpenWeatherMapAPI calls
 */
class Weather {
  /**
   * Create recognized client
   * @param {string} API_KEY - private key for OWM auth
   */
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
    this.WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather";
    this.FORECAST_URL = "http://api.openweathermap.org/data/2.5/forecast";
  }
  /**
   * Error handling for longitude latitude input
   * @param {number} lat - latitude
   * @param {number} lon - longitude
   * @returns {boolean} valid coordinates
   */
  _isLatitudeLongitudeError({ lat, lon }) {
    if (lat === null || lon === null) {
      return SyntaxError(
        "Latitude and Longitude are both required for getCurrentWeather()"
      );
    }
    if (lat < -90 || lat > 90) {
      return RangeError("RANGE_ERROR:Latitude must be between -90 and 90");
    }
    if (lon < -180 || lat > 180) {
      return RangeError("Longitude must be between -180 and 180");
    }
    if (typeof lon != Number || typeof lat != Number) {
      return TypeError("Latitude and Longitude must both be Numbers");
    } else {
      return False;
    }
  }
  /**
   * Fetch JSON OpenWeatherMap current weather + stats
   * @param {number} lat - User latitude
   * @param {number} lon - User longitude
   * @returns {json} Weather API response
   */
  async getCurrentWeather({ lat, lon }) {
    //clean location input
    if (this._isLatitudeLongitudeError(lat, lon)) {
      return logger.error(this._isLatitudeLongitudeError(lat, lon));
    }

    //fetch JSON
    try {
      const response = await fetch(
        this.WEATHER_URL + `?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`
      );
      if (!response.ok) {
        return logger.error(`ERROR:Response status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return logger.error(`${error}`);
    }
  }
  /**
   * Fetch JSON OpenWeatherMap forecast
   * @param {number} lat - User latitude
   * @param {number} lon - User longitude
   * @returns {json} forecast
   */
  async getForecast({ lat, lon }) {
    if (this._isLatitudeLongitudeError(lat, lon)) {
      return logger.error(this._isLatitudeLongitudeError(lat, lon));
    }

    try {
      const response = await fetch(
        this.FORECAST_URL + `?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`
      );
      if (!response.ok) {
        return logger.error(`ERROR:Response status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return logger.error(`${error}`);
    }
  }
}
