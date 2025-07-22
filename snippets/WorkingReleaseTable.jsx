export default function WorkingReleaseTable() {
  // Embedded release notes data - expanded with more entries
  const releaseNotes = [
    {
      type: "New/Improved",
      category: "Call center",
      description: "The Call Center script language supports an SMS MESSAGE instruction that allows pre-scripted one-off messages to be sent to call recipients by callers",
      releasedate: "2025 May"
    },
    {
      type: "Fixed",
      category: "Call center",
      description: "Bad phone numbers were not being indicated as bad in the Call center header. This has been corrected.",
      releasedate: "2025 May"
    },
    {
      type: "New/Improved",
      category: "SMS",
      description: "Scheduled SMS jobs are visible on the Sent text page before the scheduled time.",
      releasedate: "2025 May"
    },
    {
      type: "New/Improved",
      category: "User experience/UI",
      description: "The All project settings page is accessible in the Settings menu.",
      releasedate: "2025 May"
    },
    {
      type: "New/Improved",
      category: "Performance",
      description: "Adjustments were made to the Call Center to improve performance/load times of large call pools.",
      releasedate: "2025 May"
    },
    {
      type: "New/Improved",
      category: "Contact timeline",
      description: "The email events history has been restored in the contact timeline.",
      releasedate: "2025 April"
    },
    {
      type: "New/Improved",
      category: "User experience/UI",
      description: "The Your Leaders tab of the homepage includes the employer of the leader.",
      releasedate: "2025 April"
    },
    {
      type: "New/Improved",
      category: "Data import",
      description: "The data import details section of a completed import now indicates the matching configuration used such as Fuzzy matching.",
      releasedate: "2025 April"
    },
    {
      type: "New/Improved",
      category: "Search",
      description: "For any custom field of the date type, a new search keyword will be available that is composed of the field's name with the word 'anniversary' appended. The search results will be contacts whose field value falls on or within the specified date or date range in any year.",
      releasedate: "2025 February"
    },
    {
      type: "New/Improved",
      category: "Email",
      description: "Users sending bulk email can choose the 'reply-to' address for an outgoing email as well as the 'From' address.",
      releasedate: "2024 November"
    },
    {
      type: "Fixed",
      category: "Search results/layout",
      description: "The Employee status field was not available as an option in the search layout dialog box. That has been corrected.",
      releasedate: "2024 June"
    },
    {
      type: "New/Improved",
      category: "User Experience/UI",
      description: "Project admins can indicate that specific organization contact types are not visible in the shop structure.",
      releasedate: "2024 April"
    },
    {
      type: "New/Improved",
      category: "Email",
      description: "Users can add attachments (up to 10MB) to bulk emails via the bulk email panel.",
      releasedate: "2024 January"
    },
    {
      type: "New/Improved",
      category: "User Experience/UI",
      description: "Text messages and emails can be scheduled to be sent at a later time or date. **Recipients will be determined by the search results generated at the time of scheduling.**",
      releasedate: "2023 September"
    },
    {
      type: "Fixed",
      category: "Search",
      description: "Search results for \"date called\" were returning values in UTC. Search results now return values with respect to Eastern time.",
      releasedate: "2023 June"
    },
    {
      type: "New/Improved",
      category: "Reports",
      description: "The Requested Reports page is a searchable and filterable grid with new informative columns. The filtering options allow the following specifications: the file type of the report(XLSX, CSV, PDF, ZIP) indicated by corresponding icon, the user-specified name and/or filename of the report, the status of the report, the timeframe for which the grid displays reports, the range of file size(in bytes), the reason for failure status if applicable, the user who generated the report. In addition, project admins can download and view other users' requested reports on this page. Reports will not be marked as downloaded when downloaded by the project admin.",
      releasedate: "2023 March"
    },
    {
      type: "New/Improved",
      category: "Public forms",
      description: "A \"On the PDF, hide fields left blank\" checkbox in the form editor allows PDFs to be generated without blank fields.",
      releasedate: "2023 February"
    },
    {
      type: "New/Improved",
      category: "Matching and Merging",
      description: "A public form that matches an existing record in Broadstripes will no longer create a \"matched and merged\" timeline item.",
      releasedate: "2022 December"
    },
    {
      type: "New/Improved",
      category: "Email",
      description: "A mass email recipient will receive multiple emails if multiple addresses are opted-in. Previously recipients would only receive communications to their primary email address.",
      releasedate: "2022 August"
    },
    {
      type: "New/Improved",
      category: "Email",
      description: "If a project-wide email address has been specified in outgoing email settings it will be the default \"From\" email address in the drop-down menu for bulk emails rather than the user's account email address.",
      releasedate: "2022 June"
    }
  ];

  // Function to render markdown-like formatting
  const renderDescription = (text) => {
    if (!text) return text;
    
    // Convert **bold** to <strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  return (
    <div style={{ 
      margin: '2rem 0', 
      padding: '1rem', 
      backgroundColor: 'var(--ifm-background-surface-color, #ffffff)',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: 'none'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: '600' }}>
          Release Notes ({releaseNotes.length} items)
        </h3>
        <p style={{ margin: '0', color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem' }}>
          Latest updates and improvements to Broadstripes. Use your browser's search (Ctrl+F) to find specific items.
        </p>
      </div>

      {/* Table */}
      <div style={{ 
        width: '100%', 
        overflowX: 'auto',
        maxHeight: '700px',
        overflowY: 'auto',
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: '8px'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'separate',
          borderSpacing: '0',
          marginBottom: '0'
        }}>
          <thead>
            <tr>
              <th style={{
                whiteSpace: 'nowrap',
                width: '120px',
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                fontWeight: '600',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                padding: '1rem',
                textAlign: 'left',
                borderBottom: '2px solid var(--ifm-color-primary-dark)'
              }}>Type</th>
              <th style={{
                whiteSpace: 'nowrap',
                width: '180px',
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                fontWeight: '600',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                padding: '1rem',
                textAlign: 'left',
                borderBottom: '2px solid var(--ifm-color-primary-dark)'
              }}>Category</th>
              <th style={{
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                fontWeight: '600',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                padding: '1rem',
                textAlign: 'left',
                borderBottom: '2px solid var(--ifm-color-primary-dark)'
              }}>Description</th>
              <th style={{
                whiteSpace: 'nowrap',
                width: '120px',
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                fontWeight: '600',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                padding: '1rem',
                textAlign: 'left',
                borderBottom: '2px solid var(--ifm-color-primary-dark)'
              }}>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {releaseNotes.map((item, index) => (
              <tr key={index} style={{
                backgroundColor: index % 2 === 0 ? 'var(--ifm-background-color)' : 'var(--ifm-color-emphasis-100)',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ifm-hover-overlay)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'var(--ifm-background-color)' : 'var(--ifm-color-emphasis-100)';
              }}>
                <td style={{
                  whiteSpace: 'nowrap',
                  padding: '1rem',
                  borderBottom: '1px solid var(--ifm-color-emphasis-200)',
                  verticalAlign: 'top'
                }}>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    backgroundColor: item.type === 'Fixed' ? '#e3f2fd' : '#f3e5f5',
                    color: item.type === 'Fixed' ? '#1976d2' : '#7b1fa2',
                    border: `1px solid ${item.type === 'Fixed' ? '#bbdefb' : '#e1bee7'}`,
                    display: 'inline-block'
                  }}>
                    {item.type}
                  </span>
                </td>
                <td style={{
                  whiteSpace: 'nowrap',
                  padding: '1rem',
                  borderBottom: '1px solid var(--ifm-color-emphasis-200)',
                  verticalAlign: 'top'
                }}>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    backgroundColor: '#fff3e0',
                    color: '#f57c00',
                    border: '1px solid #ffcc02',
                    display: 'inline-block'
                  }}>
                    {item.category}
                  </span>
                </td>
                <td style={{
                  padding: '1rem',
                  borderBottom: '1px solid var(--ifm-color-emphasis-200)',
                  lineHeight: '1.5',
                  verticalAlign: 'top'
                }}>
                  {renderDescription(item.description)}
                </td>
                <td style={{
                  padding: '1rem',
                  borderBottom: '1px solid var(--ifm-color-emphasis-200)',
                  color: 'var(--ifm-color-emphasis-600)',
                  whiteSpace: 'nowrap',
                  verticalAlign: 'top',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {item.releasedate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer note */}
      <div style={{ 
        marginTop: '1rem', 
        padding: '0.75rem', 
        backgroundColor: 'var(--ifm-color-emphasis-100)', 
        borderRadius: '4px',
        fontSize: '0.875rem',
        color: 'var(--ifm-color-emphasis-700)'
      }}>
        💡 <strong>Tip:</strong> Use your browser's search function (Ctrl+F or Cmd+F) to quickly find specific features, categories, or keywords in the release notes.
      </div>
    </div>
  );
}
