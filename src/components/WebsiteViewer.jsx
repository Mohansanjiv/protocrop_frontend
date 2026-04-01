import { useEffect, useState } from "react";

function WebsiteViewer({ url }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const correctedUrl = url.startsWith("http")
    ? url.replace("https://www.https//", "https://")
    : `https://${url}`;

  return (
    <div className="website-container">
      <h5 className="mb-3">Current Website:</h5>

      <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
        <a href={correctedUrl} target="_blank" rel="noreferrer">
          {correctedUrl}
        </a>

        <a
          href={correctedUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm"
        >
          Open in New Tab
        </a>
      </div>

      <div
        className="border rounded overflow-hidden bg-light position-relative"
        style={{ width: "100%", height: "600px" }}
      >
        {isLoading && !hasError && (
          <div className="d-flex justify-content-center align-items-center h-100 position-absolute top-0 start-0 w-100 bg-white">
            <div className="text-center">
              <div className="spinner-border text-primary mb-3" role="status" />
              <p className="text-muted">Loading website preview...</p>
            </div>
          </div>
        )}

        {!hasError && (
          <iframe
            src={correctedUrl}
            title="Website Preview"
            width="100%"
            height="100%"
            style={{
              border: "none",
              visibility: isLoading ? "hidden" : "visible",
            }}
            onLoad={() => {
              setIsLoading(false);
              setHasError(false);
            }}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}

        {hasError && (
          <div className="d-flex justify-content-center align-items-center h-100 bg-light">
            <div
              className="card shadow-lg border-0 text-center p-4"
              style={{
                maxWidth: "500px",
                width: "100%",
                borderRadius: "20px",
              }}
            >
              <div className="mb-4">
                <div
                  className="bg-danger bg-opacity-10 text-danger rounded-circle d-inline-flex justify-content-center align-items-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    fontSize: "32px",
                  }}
                >
                  ⚠️
                </div>
              </div>

              <h3 className="fw-bold mb-3">Preview Not Available</h3>

              <p className="text-muted mb-4">
                This website cannot be displayed inside the app because it
                blocks iframe access for security reasons.
              </p>

              <div className="bg-light border rounded p-3 text-start mb-4">
                <h6 className="fw-semibold mb-2">Suggestions:</h6>
                <ul className="mb-0 ps-3 text-muted">
                  <li>Open the website in a new browser tab</li>
                  <li>Check if the URL is correct</li>
                  <li>Try another website that supports iframe preview</li>
                </ul>
              </div>

              <a
                href={correctedUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-4"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WebsiteViewer;
