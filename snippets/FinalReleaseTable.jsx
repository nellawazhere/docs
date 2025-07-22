export default function FinalReleaseTable() {
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
      description: "The Requested Reports page is a searchable and filterable grid with new informative columns. The filtering options allow specifications for file type, user-specified name, status, timeframe, file size range, failure reason, and report generator. Project admins can download and view other users' requested reports.",
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

  // Get unique categories and years for display
  const categories = [...new Set(releaseNotes.map(item => item.category))].sort();
  const years = [...new Set(releaseNotes.map(item => item.releasedate.split(' ')[0]))].sort().reverse();

  return (
    <div style={{ 
      margin: '2rem 0', 
      padding: '1.5rem', 
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e0e0e0'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ 
          margin: '0 0 0.5rem 0', 
          fontSize: '1.5rem', 
          fontWeight: '600',
          color: '#1a1a1a'
        }}>
          Release Notes ({releaseNotes.length} items)
        </h3>
        <p style={{ 
          margin: '0', 
          color: '#666', 
          fontSize: '0.9rem' 
        }}>
          Latest updates and improvements to Broadstripes. Use <strong>Ctrl+F</strong> (or Cmd+F on Mac) to search for specific features, categories, or keywords.
        </p>
      </div>

      {/* Search Instructions */}
      <div style={{ 
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f0f9ff',
        borderRadius: '6px',
        border: '1px solid #0ea5e9'
      }}>
        <div style={{ 
          fontSize: '0.875rem',
          color: '#0c4a6e',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px'
        }}>
          <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>🔍</span>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '4px' }}>
              How to Search & Filter:
            </div>
            <div style={{ lineHeight: '1.5' }}>
              • <strong>Search:</strong> Press <kbd style={{ 
                padding: '2px 6px', 
                backgroundColor: '#e0e7ff', 
                borderRadius: '3px', 
                fontSize: '0.8rem',
                border: '1px solid #c7d2fe'
              }}>Ctrl+F</kbd> and type keywords like "email", "call center", "2024", etc.<br/>
              • <strong>Categories:</strong> {categories.join(', ')}<br/>
              • <strong>Years:</strong> {years.join(', ')}<br/>
              • <strong>Types:</strong> "New/Improved", "Fixed"
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div style={{ 
        width: '100%', 
        overflowX: 'auto',
        maxHeight: '700px',
        overflowY: 'auto',
        border: '1px solid #ddd',
        borderRadius: '6px',
        backgroundColor: '#ffffff'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          fontSize: '0.9rem'
        }}>
          {/* Table Header */}
          <thead>
            <tr style={{ backgroundColor: '#2563eb' }}>
              <th style={{
                padding: '12px 16px',
                textAlign: 'left',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.875rem',
                borderBottom: '2px solid #1d4ed8',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                minWidth: '100px'
              }}>
                Type
              </th>
              <th style={{
                padding: '12px 16px',
                textAlign: 'left',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.875rem',
                borderBottom: '2px solid #1d4ed8',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                minWidth: '150px'
              }}>
                Category
              </th>
              <th style={{
                padding: '12px 16px',
                textAlign: 'left',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.875rem',
                borderBottom: '2px solid #1d4ed8',
                position: 'sticky',
                top: '0',
                zIndex: '10'
              }}>
                Description
              </th>
              <th style={{
                padding: '12px 16px',
                textAlign: 'left',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.875rem',
                borderBottom: '2px solid #1d4ed8',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                minWidth: '120px'
              }}>
                Release Date
              </th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {releaseNotes.map((item, index) => (
              <tr key={index} style={{
                backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <td style={{
                  padding: '12px 16px',
                  verticalAlign: 'top',
                  borderRight: '1px solid #e5e7eb'
                }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backgroundColor: item.type === 'Fixed' ? '#dbeafe' : '#f3e8ff',
                    color: item.type === 'Fixed' ? '#1e40af' : '#7c3aed',
                    border: `1px solid ${item.type === 'Fixed' ? '#93c5fd' : '#c4b5fd'}`,
                    display: 'inline-block',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.type}
                  </span>
                </td>
                <td style={{
                  padding: '12px 16px',
                  verticalAlign: 'top',
                  borderRight: '1px solid #e5e7eb'
                }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backgroundColor: '#fef3c7',
                    color: '#d97706',
                    border: '1px solid #fbbf24',
                    display: 'inline-block',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.category}
                  </span>
                </td>
                <td style={{
                  padding: '12px 16px',
                  lineHeight: '1.5',
                  verticalAlign: 'top',
                  borderRight: '1px solid #e5e7eb'
                }}>
                  <span dangerouslySetInnerHTML={{ 
                    __html: item.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }} />
                </td>
                <td style={{
                  padding: '12px 16px',
                  verticalAlign: 'top',
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap'
                }}>
                  {item.releasedate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Statistics */}
      <div style={{ 
        marginTop: '1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        fontSize: '0.875rem'
      }}>
        <div style={{ 
          padding: '0.75rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '4px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontWeight: '600', color: '#374151' }}>By Type:</div>
          <div style={{ color: '#6b7280', marginTop: '4px' }}>
            New/Improved: {releaseNotes.filter(item => item.type === 'New/Improved').length} • 
            Fixed: {releaseNotes.filter(item => item.type === 'Fixed').length}
          </div>
        </div>
        <div style={{ 
          padding: '0.75rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '4px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontWeight: '600', color: '#374151' }}>By Year:</div>
          <div style={{ color: '#6b7280', marginTop: '4px' }}>
            {years.map(year => 
              `${year}: ${releaseNotes.filter(item => item.releasedate.startsWith(year)).length}`
            ).join(' • ')}
          </div>
        </div>
      </div>
    </div>
  );
}
