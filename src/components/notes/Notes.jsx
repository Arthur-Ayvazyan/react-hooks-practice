import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Notes = ({notes, deleteNote}) => {

    return (
        <TransitionGroup component={"ul"} className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >
                    <li className={"list-group-item d-flex justify-content-between align-items-center"}>
                        <div>
                            <strong className={'me-2'}>{note.title}</strong>
                            <small>{new Date().toLocaleDateString()}</small>
                        </div>
                        <button
                            type="button"
                            className={"btn btn-outline-danger"}
                            onClick={() => deleteNote(note.id)}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Notes;