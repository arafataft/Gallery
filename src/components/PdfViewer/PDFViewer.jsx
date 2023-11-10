
function PDFViewer() {
  const pdfUrl = 'https://krchowdhary.com/ai/ai14/lects/nlp-research-com-intlg-ieee.pdf';

  return (
    <div>
      <iframe
        title="PDF Viewer"
        width="100%"
        height="650px"
        src={pdfUrl}
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default PDFViewer;
