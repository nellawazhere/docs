export default function EnhancedReleaseTable() {
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
    }
  ];

  // State management using simple variables and re-rendering
  const [searchTerm, setSearchTerm] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState('');
  const [categoryFilter, setCategoryFilter] = React.useState('');

  // Helper function to strip HTML and markdown tags for search
  const stripTags = (text) => {
    if (typeof text !== 'string') return '';
    
    // Remove HTML tags and markdown formatting
    return text
      .replace(/<[^>]*>/g, '')
      .replace(/\*\*|__/g, '') // Bold
      .replace(/\*|_/g, '')     // Italic
      .replace(/~~|\^/g, '')    // Strikethrough
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Links
      .replace(/#{1,6}\s/g, '') // Headers
      .replace(/`{1,3}/g, '')    // Code blocks
      .replace(/\n/g, ' ')      // Newlines
      .replace(/\s+/g, ' ')     // Extra whitespace
      .trim();
  };

  // Filter data based on search and filters
  const filteredData = releaseNotes.filter(item => {
    // Search filter
    let matchesSearch = true;
    if (searchTerm.trim()) {
      const searchTermLower = searchTerm.toLowerCase();
      matchesSearch = Object.entries(item).some(([key, value]) => {
        if (typeof value === 'string') {
          const strippedValue = stripTags(value).toLowerCase();
          return strippedValue.includes(searchTermLower);
        }
        return false;
      });
    }
    
    // Type and category filters
    const matchesType = !typeFilter || item.type === typeFilter;
    const matchesCategory = !categoryFilter || item.category === categoryFilter;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  // Get unique types and categories for filter dropdowns
  const types = [...new Set(releaseNotes.map(item => item.type))].sort();
  const categories = [...new Set(releaseNotes.map(item => item.category))].sort();

  // Function to render markdown-like formatting
  const renderDescription = (text) => {
    if (!text) return '';
    
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
      {/* Search and Filter Controls */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '1rem', 
        marginBottom: '1.5rem' 
      }}>
        <input
          type="text"
          placeholder="Search release notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: '1',
            minWidth: '200px',
            padding: '0.5rem 1rem',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '6px',
            fontSize: '1rem',
            backgroundColor: 'var(--ifm-background-color)',
            color: 'var(--ifm-font-color-base)'
          }}
          aria-label="Search release notes"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          style={{
            padding: '0.5rem 2rem 0.5rem 1rem',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '6px',
            fontSize: '1rem',
            backgroundColor: 'var(--ifm-background-color)',
            color: 'var(--ifm-font-color-base)',
            cursor: 'pointer'
          }}
          aria-label="Filter by type"
        >
          <option value="">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{
            padding: '0.5rem 2rem 0.5rem 1rem',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '6px',
            fontSize: '1rem',
            backgroundColor: 'var(--ifm-background-color)',
            color: 'var(--ifm-font-color-base)',
            cursor: 'pointer'
          }}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div style={{ marginBottom: '1rem', color: 'var(--ifm-color-emphasis-600)' }}>
        Showing {filteredData.length} of {releaseNotes.length} release notes
      </div>

      {/* Table */}
      <div style={{ 
        width: '100%', 
        overflowX: 'auto',
        maxHeight: '600px',
        overflowY: 'auto'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'separate',
          borderSpacing: '0',
          marginBottom: '1rem'
        }}>
          <thead>
            <tr>
              <th style={{
                whiteSpace: 'nowrap',
                width: '100px',
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                fontWeight: '600',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                padding: '1rem',
                textAlign: 'left',
                border: '1px solid var(--ifm-color-primary)'
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
                border: '1px solid var(--ifm-color-primary)'
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
                border: '1px solid var(--ifm-color-primary)'
              }}>Description</th>
              <th style={{
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                fontWeight: '600',
                position: 'sticky',
                top: '0',
                zIndex: '10',
                padding: '1rem',
                textAlign: 'left',
                border: '1px solid var(--ifm-color-primary)'
              }}>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} style={{
                borderBottom: '1px solid #eee'
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
                    color: item.type === 'Fixed' ? '#1976d2' : '#7b1fa2'
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
                    border: '1px solid #ffcc02'
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
                  minWidth: '100px'
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
