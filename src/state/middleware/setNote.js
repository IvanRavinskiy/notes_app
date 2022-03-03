import {appApi} from '../../api';
import {addNote} from '../actions/actions';

export const setNote = (id, value, date) => dispatch => {
    appApi.getWeather()
        .then(res => {
            const iconCode = res.data.weather[0].icon
            const temp = res.data.main.temp
            dispatch(addNote(id, value, date, temp, iconCode))
        })
        .catch((e) => {
            alert('Error, try later')
            throw new Error(e);
        })
}