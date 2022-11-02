import Button from 'react-bootstrap/Button';
import { FC, useState } from 'react';

interface RowGroupProps {
    citizen: any;
}

const RowGroup: FC<RowGroupProps> = ({ citizen }) => {
    const [showTransactions, setShowTransactions] = useState(false);

    function toggleShowTransactions() {
        setShowTransactions(!showTransactions);
    }

    return (
        <>
            <tr className='table-primary'>
                <td><Button variant='primary' size='sm' onClick={toggleShowTransactions}>&gt;</Button></td>
                <td>{ citizen.patient.name }</td>
                <td>&nbsp;</td>
                <td>{ citizen.amount }</td>
            </tr>
            { showTransactions && citizen.transactions.map((transaction: any) => {
                return (
                    <tr key={transaction.id}>
                        <td>&nbsp;</td>
                        <td>{ transaction.patient.name }</td>
                        <td>{ transaction.supplier.name }</td>
                        <td>{ transaction.amount }</td>
                    </tr>
                );
            })}
        </>
    )
};

export default RowGroup;
