export default function GlobalStyles() {
  return (
    <style jsx global>{`
      /* Base font size for the entire site */
      html, body {
        font-size: 14px;
      }
      
      /* Article content */
      article {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      
      /* Paragraph text */
      article p {
        font-size: 13px;
        line-height: 1.2;
        color: #374151;
      }
      
      /* Headings */
      article h1 {
        font-size: 24px;
      }
      
      article h2 {
        font-size: 20px;
      }
      
      article h3 {
        font-size: 18px;
      }
      
      article h4, article h5, article h6 {
        font-size: 16px;
      }
      
      article h1, article h2, article h3, article h4, article h5, article h6 {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
      }
      
      /* Links */
      article a {
        color: #1E40AF;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s ease;
      }
      
      article a:hover {
        border-bottom-color: #1E40AF;
      }
      
      /* Code blocks */
      article code {
        font-family: 'Fira Code', 'Courier New', Courier, monospace;
        font-size: 13px;
      }
      
      /* List items */
      article ul, article ol {
        font-size: 13px;
        line-height: 1.2;
      }
      
      /* Table text */
      article table {
        font-size: 13px;
      }
      
      /* Navigation sidebar */
      nav {
        font-size: 13px;
      }
      
      /* Reduce spacing between elements */
      article p, article ul, article ol, article pre, article blockquote {
        margin-top: 0.8em;
        margin-bottom: 0.8em;
      }
    `}</style>
  );
}
