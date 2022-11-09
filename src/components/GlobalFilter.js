import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)

    const keyupHandler = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400)

    //Herover i keyupHandler forsinker useAsyncDebounce onChange-eventet med 400 ms efter sidste keyup-event, 
    //så der ikke sker en masse rodede ændringer i tabellen, inden den ønskede rendering vises

    return (
        <span>
            <label>Search: {'  '}<input type="text" value={value || ''} onChange={e => {
                setValue(e.target.value)
                keyupHandler(e.target.value)
            }}/></label>
            
        </span>
    )

}
export default GlobalFilter;


//Giver det mening at have global filtrering hos klienten, if not then what?