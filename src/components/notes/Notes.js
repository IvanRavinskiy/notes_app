import {useSelector} from 'react-redux';
import s from './Notes.module.css'
import {Note} from '../note';
import {getNotes} from '../../state/selectors/getNotes';
import {memo} from 'react';

export const Notes = memo(() => {
    const notes = useSelector(getNotes)

    const selectClass = notes.length === 0 ? '' : s.notes

    return (
        <div className={selectClass}>
            {notes.map(({id, date, note, temp, iconCode}) => (
                <Note key={id} id={id} title={note} date={date} temp={temp} icon={iconCode}/>
            ))}
        </div>
    );
});

