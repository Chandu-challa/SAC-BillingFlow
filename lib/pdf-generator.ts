export async function generatePdf(
  element: HTMLElement,
  customerName: string,
  onComplete?: () => void
): Promise<void> {
  try {
    // Dynamically import the heavy PDF libraries only when this is executed
    const html2canvas = (await import("html2canvas")).default;
    const { jsPDF } = await import("jspdf");

    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width / 2, canvas.height / 2],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 2, canvas.height / 2);
    
    const fileName = `Invoice_${customerName.replace(/\s+/g, "_") || "Draft"}.pdf`;
    pdf.save(fileName);
  } catch (error) {
    console.error("Failed to generate PDF", error);
  } finally {
    if (onComplete) onComplete();
  }
}
