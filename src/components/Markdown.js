import ReactMarkdown from 'react-markdown';

const Markdown = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">No Active Note</div>;
  }

  return (
    <div className="markdown">
      <div className="markdown-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          type="text"
          id="body"
          value={activeNote.body.string}
          onChange={(e) => onEditField("body", e.target.value)}
        >*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*</textarea>
      </div>
      <div className="markdown-note-preview">
        <h1 className="preview-header">{activeNote.title}</h1>
        <ReactMarkdown className="preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Markdown;
