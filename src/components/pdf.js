function ReactPDF() {
    const imageKitURL = ' https://ik.imagekit.io/kwmvfjr0r';
    const pdf = `${imageKitURL}/test_files/file-example_PDF_1MB.pdf`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
            <div>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                    Previous
                </button>
                <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                    Next
                </button>
            </div>
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </>
    );
}