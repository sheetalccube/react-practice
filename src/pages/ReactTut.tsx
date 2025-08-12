function ReactTut() {
  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "var(--COLOR-BG)",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "var(--COLOR-TEXT)",
    lineHeight: 1.6,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  };

  const headingStyle= {
    color: "var(--COLOR-PRIMARY)",
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "10px",
  };

  const highlightStyle = {
    backgroundColor: "var(--COLOR-GRAY-200)",
    color: "var(--COLOR-PRIMARY)",
    padding: "3px 6px",
    borderRadius: "4px",
    fontWeight: 500,
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}> Protected Page</div>
      This page is accessible only to{" "}
      <span style={highlightStyle}>authenticated users</span>. Access is
      controlled through an <strong>Auth Guard</strong> mechanism, which verifies
      the user’s login status before rendering the component. If the user is not
      authenticated, they are redirected to the login page. This ensures that all
      sensitive content and actions remain secure.
    </div>
  );
}

export default ReactTut;
