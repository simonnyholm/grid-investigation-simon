import { FC, useState } from 'react';
import Table from 'react-bootstrap/Table';
import oldData from './data.json';
import RowGroup from './RowGroup';
import { useReactTable, createColumnHelper, getCoreRowModel, getExpandedRowModel, getGroupedRowModel, GroupingState, flexRender } from '@tanstack/react-table';

// This is the only important part!
const data = oldData.flatMap((transactionGroup) => transactionGroup.transactions);
// Important part ending

type RowType = typeof data[0];
const columnHelper = createColumnHelper<RowType>();
const columns = [
  columnHelper.accessor("patient.name", {
    header: "Borger",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("supplier.name", {
    header: "Leverandør",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Ydelse",
    cell: info => info.getValue()
  }),
  columnHelper.accessor("amount", {
    header: "Beløb",
    cell: info => info.getValue(),
    aggregationFn: "sum"
  }),
];

interface RawTableExampleProps {}

export const ReactTable: FC = () => {
  const [grouping, setGrouping] = useState<GroupingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      grouping,
    },
    onGroupingChange: setGrouping,
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  return (
    <Table>
      <thead>
        { table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            { headerGroup.headers.map(header => (
              <th key={header.id}>
                <button onClick={header.column.getToggleGroupingHandler()}>asdf</button>
                { header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        { table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                { flexRender(cell.column.columnDef.cell, cell.getContext()) }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const RawTableExample: FC<RawTableExampleProps> = () => (
    <Table>
    <thead>
      <tr>
        <th style={{ width: 1 }}>&nbsp;</th>
        <th>Borger</th>
        <th>Ydelse</th>
        <th>Beløb</th>
      </tr>
    </thead>
    <tbody>
      { oldData.map((citizen) => {
        return (
          <RowGroup key={citizen.id} citizen={citizen} />
        );
      })}
    </tbody>
  </Table>
);

export default RawTableExample;