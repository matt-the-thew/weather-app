import { log } from "console";
import { logger } from "../utils/logger.js";

export default class Geolocator {
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      logger.warn("Location services not supported");
    }
  }

  showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    logger.info(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        logger.error("User denied geolocation request.");
        break;
      case error.POSITION_UNAVAILABLE:
        logger.error("Location information is not available.");
        break;
      case error.TIMEOUT:
        logger.error("Request to user timed out.");
        break;
      case error.UNKNOWN_ERROR:
        logger.error("An unknown error occured.");
        break;
    }
  }
}
