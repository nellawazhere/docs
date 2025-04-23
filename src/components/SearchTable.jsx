import React from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';


export default function SearchTable({ data, columns: userColumns }) {
  const defaultColumns = React.useMemo(
    () => [
      {
        header: 'Operator',
        accessorKey: 'operator',
        cell: ({ getValue }) => (
          <span className="search-term">{getValue()}</span>
        )
      },
      {
        header: 'Type',
        accessorKey: 'type'
      },
      {
        header: 'Example',
        accessorKey: 'example',
        cell: ({ getValue }) => {
          // Display the example as plain text without trying to parse operators
          return <span>{getValue()}</span>;
        }
      }
    ],
    []
  );

  const basicSearchColumns = React.useMemo(
    () => [
      {
        header: 'Search Term',
        accessorKey: 'term',
        cell: ({ getValue }) => (
          <span className="search-term">{getValue()}</span>
        )
      },
      {
        header: 'Finds',
        accessorKey: 'finds'
      },
      {
        header: 'Details',
        accessorKey: 'details',
        cell: ({ getValue }) => {
          const value = getValue();
          if (typeof value === 'string') {
            const parts = value.split(/([=:<>!]+)/);
            return (
              <span>
                {parts.map((part, i) => {
                  if (part.match(/[=:<>!]+/)) {
                    return <span key={i} className="search-term">{part}</span>;
                  }
                  return part;
                })}
              </span>
            );
          }
          return null;
        }
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => userColumns || (data[0]?.operator ? defaultColumns : basicSearchColumns),
    [userColumns, defaultColumns, data]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSorting: true
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  <span>
                    {header.column.getIsSorted()
                      ? header.column.getIsSorted() === 'desc'
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
