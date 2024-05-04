import React, { ReactElement } from 'react';
import { TableColumnInterface } from './types/TableColumnsInteface';
import Check from '../icons/check';
import X from '../icons/x';

type TableBodyType = {
  columns: TableColumnInterface;
  data: any[];
};

const TableBody = ({ columns, data }: TableBodyType) => {
  const renderContent = (element: any, column: any): ReactElement => {
    const content = element[column];

    if (typeof content === 'string') {
      return <span>{content}</span>;
    }
    if (Array.isArray(content)) {
      if (content[0].includes('http')) {
        return <img src={content[0]} height={50} />;
      }
      return (
        <div className="d-flex flex-column">
          {content.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
        </div>
      );
    }
    if (typeof content === 'boolean') {
      return (
        <div className="d-flex align-items-center justify-content-center">
          {content ? <Check /> : <X />}
        </div>
      );
    }

    return <span>{content}</span>;
  };
  return (
    <tbody>
      {data.map((element, index) => (
        <tr key={index}>
          {Object.keys(columns).map((column, index) => (
            <td key={index}>{renderContent(element, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
