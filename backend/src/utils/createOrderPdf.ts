import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";
import { RealOrderType } from "../types/Type";

const createPdf = async (order: any) => {
  const existingPdfBytes = fs.readFileSync(
    path.join(__dirname, "../tmpfiles/file.pdf")
  ); // load PDF

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  firstPage.drawText(order._id.toString(), {
    x: 74,
    y: 619,
    size: 10,
    font,
    color: rgb(0, 0, 0),
  });
  firstPage.drawText(order.orderBy?.firstName, {
    x: 110,
    y: 596,
    size: 10,
    font,
    color: rgb(0, 0, 0),
  });
  firstPage.drawText(order.orderBy?.phone.toString(), {
    x: 78,
    y: 574,
    size: 10,
    font,
    color: rgb(0, 0, 0),
  });
  firstPage.drawText(order.orderBy?.email, {
    x: 310,
    y: 575,
    size: 10,
    font,
    color: rgb(0, 0, 0),
  });
  firstPage.drawText(new Date().toDateString(), {
    x: 56,
    y: 552,
    size: 10,
    font,
    color: rgb(0, 0, 0),
  });

  let cordY = 482;
  order?.products?.map((product: any) => {
    firstPage.drawText(product.productId.name, {
      x: 95,
      y: cordY,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(
      product.productId._id.toString().slice(0, 8).toUpperCase(),
      {
        x: 36,
        y: cordY,
        size: 10,
        font,
        color: rgb(0, 0, 0),
      }
    );
    firstPage.drawText(product.quantity.toString(), {
      x: 450,
      y: cordY,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });

    cordY = cordY - 13;
  });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.join(__dirname, "../tmpfiles/edited.pdf"), pdfBytes);
};

export default createPdf;
