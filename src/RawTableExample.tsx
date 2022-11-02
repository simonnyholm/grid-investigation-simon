import { FC } from 'react';
import Table from 'react-bootstrap/Table';
import data from './data.json';
import RowGroup from './RowGroup';

interface RawTableExampleProps {}

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
      { data.map((citizen) => {
        return (
          <RowGroup key={citizen.id} citizen={citizen} />
        );
      })}
    </tbody>
  </Table>
);

export default RawTableExample;