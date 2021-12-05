const Notes = ({notes, deleteNote}) => {

    return (
        <ul className="list-group">
            {notes.map(note => (
                <li
                    key={note.id}
                    className={"list-group-item d-flex justify-content-between align-items-center"}
                >
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
            ))}
        </ul>
    );
};

export default Notes;