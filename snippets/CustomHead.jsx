export default function CustomHead() {
  return (
    <>
      <link rel="stylesheet" href="/custom.css" />
      <style jsx global>{`
        /* Fallback styles in case the external CSS doesn't load */
        html, body {
          font-size: 14px;
        }
        
        p, li, td, th {
          font-size: 0.9rem !important;
          line-height: 1.4 !important;
        }
        
        h1 { font-size: 1.8rem !important; }
        h2 { font-size: 1.5rem !important; }
        h3 { font-size: 1.3rem !important; }
        h4, h5, h6 { font-size: 1.1rem !important; }
        
        code, pre { font-size: 0.85rem !important; }
        
        .sidebar-item { font-size: 0.9rem !important; }
        
        /* Reduce spacing */
        p, ul, ol, pre, blockquote {
          margin-top: 0.8em !important;
          margin-bottom: 0.8em !important;
        }
      `}</style>
    </>
  );
}
