import WeatherConditions from '../utils/WeatherConditions.js';

class DynamicBackground {
    #weatherConditions;
    #basePath;
    #extension;

    constructor() {
        this.#weatherConditions = WeatherConditions;
        this.#basePath          = 'public/img/background/';
        this.#extension        = '.jpg';
    }
    getPictureName(weatherIcon) {
        
        let pictureName = Object.keys(this.#weatherConditions).find(key => 
            this.#weatherConditions[key].includes(weatherIcon));

            if(pictureName === undefined) {
                pictureName = "default";
            }
        
        return pictureName;
    }
    createBackgroundPath(pictureName) {

        return `${this.#basePath}${pictureName}${this.#extension}`;
    }
    changeBackground(weatherIcon) {
        let pictureName = this.getPictureName(weatherIcon);
        const path      = this.createBackgroundPath(pictureName);

        document.body.style.backgroundImage = `url(${path})`;
    }
}

export default DynamicBackground;