import s from './App.module.css'
import {InputComponent} from '../components/inputComponent';
import {Notes} from '../components/notes';


export const App = () => (
    <div className={s.App}>
        <Notes/>
        <InputComponent/>
    </div>
);


