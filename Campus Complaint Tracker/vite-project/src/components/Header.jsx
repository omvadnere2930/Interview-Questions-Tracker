function Header({ search, setSearch, onAdd }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">IQ</div>

        <div>
          <h1>Interview Questions Tracker</h1>
          <p>Practice • Track • Improve</p>
        </div>
      </div>

      <div className="header-right">
        <div className="header-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="add-btn" onClick={onAdd}>
          + Add Question
        </button>

        <div className="profile">
          <div className="avatar">OM</div>

          <div className="profile-info">
            <strong>Student</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;