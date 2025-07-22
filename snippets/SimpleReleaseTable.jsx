export default function SimpleReleaseTable({ data }) {
  // Embedded release notes data
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
    }
  ];

  // Use embedded data instead of props
  const dataToUse = releaseNotes;
  
  if (!dataToUse || !Array.isArray(dataToUse)) {
    return <div>No release notes data available</div>;
  }

  return (
    <div style={{ 
      margin: '2rem 0', 
      padding: '1rem', 
      backgroundColor: 'var(--ifm-background-surface-color, #ffffff)',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      width: '100%'
    }}>
      <h3>Release Notes ({dataToUse.length} items)</h3>
      
      <div style={{ 
        width: '100%', 
        overflowX: 'auto',
        maxHeight: '600px',
        overflowY: 'auto'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          marginBottom: '1rem'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{
                padding: '0.75rem',
                textAlign: 'left',
                borderBottom: '2px solid #ddd',
                fontWeight: 'bold'
              }}>Type</th>
              <th style={{
                padding: '0.75rem',
                textAlign: 'left',
                borderBottom: '2px solid #ddd',
                fontWeight: 'bold'
              }}>Category</th>
              <th style={{
                padding: '0.75rem',
                textAlign: 'left',
                borderBottom: '2px solid #ddd',
                fontWeight: 'bold'
              }}>Description</th>
              <th style={{
                padding: '0.75rem',
                textAlign: 'left',
                borderBottom: '2px solid #ddd',
                fontWeight: 'bold'
              }}>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {dataToUse.map((item, index) => (
              <tr key={index} style={{
                borderBottom: '1px solid #eee'
              }}>
                <td style={{
                  padding: '0.75rem',
                  verticalAlign: 'top',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    backgroundColor: item.type === 'Fixed' ? '#e3f2fd' : '#f3e5f5',
                    color: item.type === 'Fixed' ? '#1976d2' : '#7b1fa2'
                  }}>
                    {item.type}
                  </span>
                </td>
                <td style={{
                  padding: '0.75rem',
                  verticalAlign: 'top',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    backgroundColor: '#fff3e0',
                    color: '#f57c00',
                    border: '1px solid #ffcc02'
                  }}>
                    {item.category}
                  </span>
                </td>
                <td style={{
                  padding: '0.75rem',
                  verticalAlign: 'top',
                  lineHeight: '1.5'
                }}>
                  {item.description}
                </td>
                <td style={{
                  padding: '0.75rem',
                  verticalAlign: 'top',
                  whiteSpace: 'nowrap',
                  color: '#666'
                }}>
                  {item.releasedate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
