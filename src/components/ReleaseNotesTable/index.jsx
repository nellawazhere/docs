import React, { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Add custom styles for search terms
const customStyles = `
  .search-term {
    bg-gray-100 text-red-600 font-mono text-sm font-normal px-0.5 py-px rounded inline-block whitespace-nowrap
  }
`;

export default function ReleaseNotesTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Helper function to strip HTML and markdown tags
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

  return (
    <>
      <style>{customStyles}</style>
    <div className="my-8 p-4 bg-surface rounded-lg shadow-sm w-full max-w-none">
      <div className="flex flex-wrap gap-4 mb-6">
      <input
  type="text"
  placeholder="Search release notes..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-md text-base bg-background text-foreground placeholder-gray-400 dark:placeholder-gray-350 focus:outline-none dark:focus:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/60"
  aria-label="Search release notes"
/>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 pr-8 border border-gray-300 dark:border-0 rounded-md text-base bg-background text-foreground cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27%236B7280%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M8 10.5l-4-4h8l-4 4z%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
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
          className="px-4 py-2 pr-8 border border-gray-300 dark:border-0 rounded-md text-base bg-background text-foreground cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27%236B7280%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M8 10.5l-4-4h8l-4 4z%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="w-full overflow-auto" style={{ maxHeight: '500px' }}>
        <table style={{ borderWidth: '.5px' }} className="w-full border-separate border-spacing-0 mb-4">
          <thead>
            <tr>
              <th className="whitespace-nowrap w-[100px] bg-[#b21700] dark:bg-[#8e1500] border-[#b21700] dark:border-[#8e1500] font-semibold text-white sticky top-0 z-10 p-4 pl-5 text-left">Type</th>
              <th className="whitespace-nowrap w-[180px] align-middle bg-[#b21700] dark:bg-[#8e1500] border-[#b21700] dark:border-[#8e1500] font-semibold text-white sticky top-0 z-10 p-4 text-left">Category</th>
              <th className="bg-[#b21700] dark:bg-[#8e1500] border-[#b21700] dark:border-[#8e1500] font-semibold text-white sticky top-0 z-10 p-4 text-left">Description</th>
              <th className="bg-[#b21700] dark:bg-[#8e1500] border-[#b21700] dark:border-[#8e1500] font-semibold text-white sticky top-0 z-10 p-4 pr-5 text-left">Release Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-red-100/20 dark:hover:bg-gray-900">
                <td 
                style={{ borderWidth: '0.5px' }}
                className="whitespace-nowrap p-4 pl-5 border-b border-gray-200 dark:border-gray-800">
                  <span className={getTypeBadgeClass(item.type)}>
                    {item.type}
                  </span>
                </td>
               
                <td  
                style={{ borderWidth: '0.5px' }}
                className="whitespace-nowrap align-middle p-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-xs font-bold text-[#a10202] dark:text-white align-middle bg-red-100 dark:bg-[#ac1b1b] border border-[#bebebe] border-opacity-30 rounded-xl px-2 p-1 inline whitespace-nowrap">
                    {item.category}
                  </span>
                </td>
                <td 
                style={{ borderWidth: '0.5px' }}
                className="p-4 border-b-[0.5px] border-gray-200 dark:border-gray-800 dark:text-white prose prose-ul:list-disc prose-ul:pl-5 prose-ul:my-2 prose-li:my-1 prose-li:list-item prose-p:my-2 prose-strong:font-semibold">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{item.description}</ReactMarkdown>
                </td>
                <td 
                style={{ borderWidth: '0.5px', minWidth: '100px' }}
                className="p-4 pr-5 border-b-[0.5px] border-gray-200 dark:border-gray-800 text-base text-gray-400 dark:text-gray-300 whitespace-nowrap">{item.releasedate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
