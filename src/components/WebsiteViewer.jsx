function WebsiteViewer({ url }) {
  return (
    <div className="website-container">
      <h5 className="mb-3">Current Website:</h5>

      <div className="d-flex gap-3 align-items-center mb-3">
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm"
        >
          Open in New Tab
        </a>
      </div>
    </div>
  );
}

export default WebsiteViewer;
