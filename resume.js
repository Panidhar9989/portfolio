document.getElementById("resumeDownloadBtn").addEventListener("click", function () {

  const message = document.getElementById("downloadMessage");

  message.textContent = "⬇️ Downloading resume...";
  message.style.color = "#38bdf8";

  fetch("./resume.pdf")
    .then(response => {
      if (!response.ok) {
        throw new Error("Resume not found");
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      a.click();
      window.URL.revokeObjectURL(url);

      message.textContent = "✅ Resume Downloaded!";
    })
    .catch(error => {
      message.textContent = "❌ Error downloading resume";
      message.style.color = "red";
    });

});
