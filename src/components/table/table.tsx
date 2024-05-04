import React from 'react';
import TableHead from './tableHead';
import TableBody from './tableBody';
import { TableColumnInterface } from './types/TableColumnsInteface';

type TableType = {
  columns: TableColumnInterface;
  data: any[];
  onClick: (arg: any) => void;
};

const Table = ({ columns, data, onClick }: TableType) => {
  return (
    <table className="table table-primary">
      <TableHead columns={columns} onClick={onClick} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
