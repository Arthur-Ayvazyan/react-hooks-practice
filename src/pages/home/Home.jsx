import Form from "../../components/form/Form";
import Notes from "../../components/notes/Notes";
import Alert from "../../components/alert/Alert";
import {useContext, useEffect} from "react";
import {FirebaseContext} from "../../context/firebase/firebaseContext";
import Loader from "../../components/loader/Loader";

const Home = () => {

    const {loading, notes, fetchNotes, deleteNote} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1 className={"mb-4"}>Organize your life</h1>
            <Alert
                alert={{text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam explicabo id ipsa.'}}
            />
            <Form/>

            <hr/>

            {loading
                ? <Loader/>
                : <Notes notes={notes} deleteNote={deleteNote}/>
            }
        </div>
    )
}

export default Home;