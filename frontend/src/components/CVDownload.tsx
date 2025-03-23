import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

type CVData = {
  name: string;
  email: string;
  experiences: string;
  education: string;
};

type CVDownloadProps = {
  data: CVData;
};

const CVDownload = ({ data }: CVDownloadProps) => {
  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]);

    const { width, height } = page.getSize();
    const fontSize = 12;

    page.drawText(`Namn: ${data.name}`, {
      x: 50,
      y: height - 50,
      size: fontSize,
      color: rgb(0, 0, 0),
    });
    page.drawText(`Email: ${data.email}`, {
      x: 50,
      y: height - 80,
      size: fontSize,
    });
    page.drawText("Erfarenheter:", {
      x: 50,
      y: height - 120,
      size: fontSize + 2,
    });
    page.drawText(data.experiences, {
      x: 50,
      y: height - 140,
      size: fontSize,
      maxWidth: 500,
    });
    page.drawText("Utbildning:", {
      x: 50,
      y: height - 200,
      size: fontSize + 2,
    });
    page.drawText(data.education, {
      x: 50,
      y: height - 220,
      size: fontSize,
      maxWidth: 500,
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, "cv.pdf");
  };

  return <button onClick={generatePDF}>Ladda ner CV som PDF</button>;
};

export default CVDownload;
