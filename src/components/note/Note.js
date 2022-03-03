import s from './Note.module.css'
import {useDispatch} from 'react-redux';
import {deleteNote} from '../../state/actions/actions';
import {memo} from 'react';


export const Note = memo(({title, id, date, temp, icon}) => {
    const dispatch = useDispatch()

    const onDeleteNoteClick = () => {
        dispatch(deleteNote(id))
    }

    const formatTemp = Math.round(temp) > 0 ? `+${Math.round(temp)}` : Math.round(temp)
    const formatTime = `${date.getHours()} : ${('0' + date.getMinutes()).slice(-2)}`
    const formatDate = date.toLocaleDateString("en-US", {day: 'numeric'}) + " " +
        date.toLocaleDateString("en-US", {month: 'short'}) + " " +
        date.toLocaleDateString("en-US", {year: 'numeric'})

    return (
        <div className={s.note}>
            <div className={s.title}>{title}</div>
            <div className={s.data}>
                <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={'icon_weather'}/>
                <div>{formatTemp} °C</div>
                <div>{formatDate}</div>
                <div>{formatTime}</div>
            </div>
            <button onClick={onDeleteNoteClick} className={s.btn}>✖</button>
        </div>
    );
});
