const Notes = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  
    return (
      <div className="note-menu">
        <div className="menu-header">
          <h1>myNotes</h1>
          <button onClick={onAddNote}>ADD</button>
        </div>
        <div className="menu-notes">
          {sortedNotes.map(({ id, title, body, lastModified }) => (
            <div
              className={`menu-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}>
              <div className="menu-note-header">
                <strong>{title}</strong>
                <button onClick={() => onDeleteNote(id)}>X</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-small">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Notes;