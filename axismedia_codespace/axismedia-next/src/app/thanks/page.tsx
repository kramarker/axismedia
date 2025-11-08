export default function Thanks() {
  return (
    <main className="section">
      <div className="container card" style={{ textAlign: "center", padding: "48px" }}>
        <h1>Thanks — we’ll get back to you shortly</h1>
        <p className="muted" style={{ marginTop: "16px" }}>
          We’ve received your message and will reply within 24 hours.
        </p>
        <a href="/" className="btn btn-primary" style={{ marginTop: "24px" }}>
          Return to home
        </a>
      </div>
    </main>
  );
}
