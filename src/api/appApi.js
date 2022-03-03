import {instance} from './config';

const API_KEY = 'd9771f2d45926c6d1c8ef68af2ec4d0a'
const CITY = 'Minsk'

export const appApi = {
    getWeather() {
        return instance.get(`data/2.5/weather?q=${CITY}&APPID=${API_KEY}&units=metric`)
    },
}