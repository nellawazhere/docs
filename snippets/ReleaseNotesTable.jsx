

export default function ReleaseNotesTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Helper function to strip HTML and markdown tags for search
  const stripTags = (text) => {
    if (typeof text !== 'string') return '';
    
    // Remove HTML tags
    const withoutHtml = text.replace(/<[^>]*>/g, '');
    
    // Remove markdown formatting
    return withoutHtml
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

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return data.filter(item => {
        const matchesType = !typeFilter || item.type === typeFilter;
        const matchesCategory = !categoryFilter || item.category === categoryFilter;
        return matchesType && matchesCategory;
      });
    }
    
    const searchTermLower = searchTerm.toLowerCase();
    
    return data.filter(item => {
      // Create a stripped version of each value for searching
      const matchesSearch = Object.entries(item).some(([key, value]) => {
        // Only search in text fields
        if (typeof value === 'string') {
          const strippedValue = stripTags(value).toLowerCase();
          return strippedValue.includes(searchTermLower);
        }
        return false;
      });
      
      const matchesType = !typeFilter || item.type === typeFilter;
      const matchesCategory = !categoryFilter || item.category === categoryFilter;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [data, searchTerm, typeFilter, categoryFilter]);

  const types = [...new Set(data.map(item => item.type))].sort();
  const categories = [...new Set(data.map(item => item.category))].sort();

  const getTypeBadgeClass = (type) => {
    return type === 'Fixed' 
      ? 'inline-block text-sm text-blue-700 dark:text-blue-400 font-bold' 
      : 'inline-block text-sm text-blue-700 dark:text-blue-400 font-bold';
  };

  // Function to render markdown-like formatting
  const renderDescription = (text) => {
    if (!text) return '';
    
    // Convert **bold** to <strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert newlines to <br>
    formatted = formatted.replace(/\\n/g, '<br>');
    
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
        Showing {filteredData.length} of {data.length} release notes
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
                '&:hover': {
                  backgroundColor: 'var(--ifm-hover-overlay)'
                }
              }}>
                <td style={{
                  whiteSpace: 'nowrap',
                  padding: '1rem',
                  borderBottom: '1px solid var(--ifm-color-emphasis-200)',
                  verticalAlign: 'top'
                }}>
                  <span className={getTypeBadgeClass(item.type)}>
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
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: 'var(--ifm-color-primary)',
                    backgroundColor: 'var(--ifm-color-primary-lightest)',
                    border: '1px solid var(--ifm-color-primary-light)',
                    borderRadius: '12px',
                    padding: '0.25rem 0.5rem',
                    display: 'inline-block',
                    whiteSpace: 'nowrap'
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
