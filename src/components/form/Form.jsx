import {useState, useContext} from "react";
import Input from "../input/Input";
import {AlertContext} from "../../context/alert/alertContext";
import {FirebaseContext} from "../../context/firebase/firebaseContext";

const Form = () => {

    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            firebase.addNote(value.trim())
                .then(() => {
                    alert.show('Task was created!', 'success');
                })
                .catch(() => {
                    alert.show('Something goes wrong!', 'danger');
                })
            setValue('');
        } else {
            alert.show(`Filed shouldn't be empty text`);
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="input-group">
                <Input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className={'form-control'}
                    placeholder={'Complete name of task'}
                    type={'text'}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="submit">add task</button>
                </div>

            </div>
        </form>
    );
};

export default Form;