import { useState } from "react";
import axios from "axios";

function FileUpload({ handleUrls }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      handleUrls(response.data.urls);
    } catch (error) {
      console.log(error);
      alert("Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="mb-3">Upload Excel or CSV File</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          className="form-control mb-3"
          accept=".xlsx,.xls,.csv"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="btn btn-dark" type="submit">
          {loading ? "Uploading..." : "Upload File"}
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
