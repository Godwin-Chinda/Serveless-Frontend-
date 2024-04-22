export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Invalid request method" });
  }

  const formData = req.body;
  // Process and handle the form data (e.g., store it in a database, send email, etc.)
  // For this demo, we'll simply log the form data
  console.log(formData);
  res.status(200).json({ message: "Form submitted successfully" });
}
