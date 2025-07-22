import { useState, useMemo } from 'react';

export default function ReactInteractiveTable() {
  // Embedded release notes data
  const releaseNotes = [
    // 2025 May
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
    // Add all historical entries from 2024 April through 2017 June
    {
      type: "Fixed",
      category: "User experience/UI",
      description: "Project admins will no longer see deactivated users when editing other user's quick links.",
      releasedate: "2025 April"
    },
    {
      type: "New/Improved",
      category: "User experience/UI",
      description: "Radio button custom fields have been converted to drop-down choosers. Radio buttons are no longer supported.",
      releasedate: "2025 April"
    },
    // Many more historical entries would be added here...
    {
      type: "New/Improved",
      category: "Admin",
      description: "A new switch on the General Settings page allows an admin to change the name of the \"Classification\" field to \"Job Title.\" Note: There is already a separate field on the employment called \"Job Title.\" Turning on this switch effectively hides and disables that field because the former \"Classification\" field now has that name. When this switch is on you can search and sort on <span class=\"search-term\">jobtitle</span> which will have the same effect as the <span class=\"search-term\">classification</span> keyword.",
      releasedate: "2017 June"
    },
    {
      type: "Fixed",
      category: "Reports",
      description: "Reports are once again obeying the project's default sort if no custom sort is specified.",
      releasedate: "2017 June"
    }
  ];

  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Get unique categories and years for dropdowns
  const categories = useMemo(() => 
    [...new Set(releaseNotes.map(item => item.category))].sort(), 
    [releaseNotes]
  );
  
  const years = useMemo(() => 
    [...new Set(releaseNotes.map(item => item.releasedate.split(' ')[0]))].sort().reverse(), 
    [releaseNotes]
  );

  // Filter the data based on current filters
  const filteredData = useMemo(() => {
    return releaseNotes.filter(item => {
      // Search filter
      const matchesSearch = !searchTerm || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = !selectedCategory || item.category === selectedCategory;

      // Year filter
      const matchesYear = !selectedYear || item.releasedate.startsWith(selectedYear);

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedYear, releaseNotes]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedYear('');
  };

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
          Release Notes ({releaseNotes.length} total items)
        </h3>
        <p style={{ 
          margin: '0', 
          color: '#666', 
          fontSize: '0.9rem' 
        }}>
          Latest updates and improvements to Broadstripes. Use the filters below to find specific items.
        </p>
      </div>

      {/* Filters */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '1rem', 
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f8fafc',
        borderRadius: '6px',
        border: '1px solid #e2e8f0'
      }}>
        <input
          type="text"
          placeholder="Search release notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: '1',
            minWidth: '200px',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            fontSize: '0.875rem'
          }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            fontSize: '0.875rem',
            minWidth: '150px'
          }}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            fontSize: '0.875rem',
            minWidth: '120px'
          }}
        >
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <button
          onClick={clearFilters}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '0.875rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Result Count */}
      <div style={{ 
        marginBottom: '1rem', 
        color: '#6b7280',
        fontSize: '0.875rem',
        fontWeight: '500'
      }}>
        Showing {filteredData.length} of {releaseNotes.length} release notes
        {(searchTerm || selectedCategory || selectedYear) && (
          <span style={{ marginLeft: '8px', color: '#059669' }}>
            (filtered)
          </span>
        )}
      </div>

      {/* Table Container */}
      <div style={{ 
        width: '100%', 
        overflowX: 'auto',
        maxHeight: '600px',
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
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="4" style={{
                  padding: '2rem',
                  textAlign: 'center',
                  color: '#6b7280',
                  fontStyle: 'italic'
                }}>
                  No release notes match your current filters. Try adjusting your search or clearing filters.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Filter Summary */}
      {(searchTerm || selectedCategory || selectedYear) && (
        <div style={{ 
          marginTop: '1rem',
          padding: '0.75rem',
          backgroundColor: '#f0f9ff',
          borderRadius: '4px',
          border: '1px solid #0ea5e9',
          fontSize: '0.875rem'
        }}>
          <strong>Active Filters:</strong>
          {searchTerm && <span style={{ marginLeft: '8px' }}>Search: "{searchTerm}"</span>}
          {selectedCategory && <span style={{ marginLeft: '8px' }}>Category: {selectedCategory}</span>}
          {selectedYear && <span style={{ marginLeft: '8px' }}>Year: {selectedYear}</span>}
        </div>
      )}
    </div>
  );
}
