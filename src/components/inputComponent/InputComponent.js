import s from './InputComponent.module.css'
import {memo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {v1} from 'uuid';
import {setNote} from '../../state/middleware/setNote';

const MAX_TITLE_LENGTH = 300

export const InputComponent = memo(() => {
    const dispatch = useDispatch()

    const [error, setError] = useState(false)
    const [value, setValue] = useState('')

    const date = new Date()
    const id = v1()

    const onInputValueChange = (e) => {
        if (value.length < MAX_TITLE_LENGTH) {
            setValue(e.currentTarget.value)
            setError(false)
        } else {
            setValue(e.currentTarget.value)
            setError(true)
        }
    }

    const onSetValuePress = (e) => {
        if (e.key === 'Enter' && value.length < MAX_TITLE_LENGTH) {
            dispatch(setNote(id, value, date))
            setValue('')
            setError(false)
        }
    }

    return (
        <div className={s.inputBlock}>
            Add note...
            <input value={value}
                   onChange={onInputValueChange}
                   onKeyPress={onSetValuePress}
                   autoFocus
                   className={!error ? s.input : s.errorInput}/>
            {error && <div className={s.error}>Many symbols</div>}
        </div>
    );
});

