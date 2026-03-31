import { useState } from "react";
import FileUpload from "./components/FileUpload";
import WebsiteViewer from "./components/WebsiteViewer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleUrls = (data) => {
    setUrls(data);
    setCurrentIndex(0);
    setHasError(false);
    setIsLoading(true);
  };

  const nextWebsite = () => {
    if (currentIndex < urls.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setHasError(false);
      setIsLoading(true);
    }
  };

  const prevWebsite = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setHasError(false);
      setIsLoading(true);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <FileUpload handleUrls={handleUrls} />

        {urls.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
              <button
                className="btn btn-primary"
                onClick={prevWebsite}
                disabled={currentIndex === 0}
              >
                Previous
              </button>

              <h5>
                {currentIndex + 1} / {urls.length}
              </h5>

              <button
                className="btn btn-success"
                onClick={nextWebsite}
                disabled={currentIndex === urls.length - 1}
              >
                Next
              </button>
            </div>

            <WebsiteViewer
              url={urls[currentIndex]}
              hasError={hasError}
              setHasError={setHasError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
