import React from 'react';
import { TableColumnInterface } from './types/TableColumnsInteface';
import ArrowUpDown from '../icons/arrowUpDown';

type TableHeadTypes = {
  columns: TableColumnInterface;
  onClick: (arg: any) => void;
};

const TableHead = ({ columns, onClick }: TableHeadTypes) => {
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column, i) => (
          <th
            key={i}
            onClick={() =>
              columns[column].iter ? onClick(columns[column].iter) : undefined
            }
          >
            {columns[column].name} {columns[column].iter ? <ArrowUpDown /> : ''}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
