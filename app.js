document.getElementById("generateBtn").addEventListener("click", () => {
  const text = document.getElementById("textInput").value;

  if (!text) {
    alert("Please enter text or a URL");
    return;
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

  document.getElementById("qrImage").src = qrUrl;
});
