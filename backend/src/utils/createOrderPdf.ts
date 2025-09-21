import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";
const createPdf = async () => {
  const existingPdfBytes = fs.readFileSync(
    path.join(__dirname, "../tmpfiles/file.pdf")
  ); // load PDF

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  firstPage.drawText("Added with pdf-lib!", {
    x: 50,
    y: 700,
    size: 20,
    font,
    color: rgb(1, 0, 0),
  });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.join(__dirname, "../tmpfiles/edited.pdf"), pdfBytes);
};
export default createPdf;
