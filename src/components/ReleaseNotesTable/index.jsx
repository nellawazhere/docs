import React, { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ReleaseNotesTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = Object.values(item).some(value =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesType = !typeFilter || item.type === typeFilter;
      const matchesCategory = !categoryFilter || item.category === categoryFilter;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [data, searchTerm, typeFilter, categoryFilter]);

  const types = [...new Set(data.map(item => item.type))].sort();
  const categories = [...new Set(data.map(item => item.category))].sort();

  const getTypeBadgeClass = (type) => {
    return type === 'Fixed' 
      ? 'inline-block text-sm text-blue-500 font-bold' 
      : 'inline-block text-sm text-blue-500 font-bold';
  };

  return (
    <div className="my-8 p-4 bg-surface rounded-lg shadow-sm w-full max-w-none">
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search release notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-md text-base bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          aria-label="Search release notes"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 pr-8 border border-gray-300 rounded-md text-base bg-background text-foreground cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27%236B7280%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M8 10.5l-4-4h8l-4 4z%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
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
          className="px-4 py-2 pr-8 border border-gray-300 rounded-md text-base bg-background text-foreground cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27%236B7280%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M8 10.5l-4-4h8l-4 4z%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 mb-4">
          <thead>
            <tr>
              <th className="whitespace-nowrap w-[100px] bg-[#b21700] font-semibold text-white sticky top-0 z-10 p-4 pl-5 text-left">Type</th>
              <th className="whitespace-nowrap w-[180px] align-middle bg-[#b21700] font-semibold text-white sticky top-0 z-10 p-4 text-left">Category</th>
              <th className="bg-[#b21700] font-semibold text-white sticky top-0 z-10 p-4 text-left">Description</th>
              <th className="bg-[#b21700] font-semibold text-white sticky top-0 z-10 p-4 pr-5 text-left">Release Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="whitespace-nowrap p-4 pl-5 border-b border-gray-200">
                  <span className={getTypeBadgeClass(item.type)}>
                    {item.type}
                  </span>
                </td>
                <td className="whitespace-nowrap align-middle p-4 border-b border-gray-200">
                  <span className="text-xs font-bold text-white align-middle bg-[#b21700] border border-[#bebebe] border-opacity-30 rounded-md p-1 inline whitespace-nowrap">
                    {item.category}
                  </span>
                </td>
                <td className="p-4 border-b border-gray-200 prose prose-ul:list-disc prose-ul:pl-5 prose-ul:my-2 prose-li:my-1 prose-li:list-item prose-p:my-2 prose-strong:font-semibold">
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                </td>
                <td className="p-4 pr-5 border-b border-gray-200 text-xs italic text-[#a3a4a6] whitespace-nowrap">{item.releasedate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
