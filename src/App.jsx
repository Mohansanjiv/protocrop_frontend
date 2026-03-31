import { useState } from "react";
import FileUpload from "./components/FileUpload";
import WebsiteViewer from "./components/WebsiteViewer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUrls = (data) => {
    setUrls(data);
    setCurrentIndex(0);
  };

  const nextWebsite = () => {
    if (currentIndex < urls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevWebsite = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
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

            <WebsiteViewer url={urls[currentIndex]} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
