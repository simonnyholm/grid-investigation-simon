import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { RiFileSearchLine } from "react-icons/ri";
import { RiFileSearchFill } from "react-icons/ri";

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column

    const [value, setValue] = useState(filterValue)

    const [filterModal, setFilterModal] = useState(false);
    const [filterUsed, setFilterUsed] = useState(false);
    const [filterInput, setFilterInput] = useState(false);


    function toggleFilterModal() {
        setFilterModal(!filterModal);
        setFilterUsed(true)
    }

    const keyupHandler = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400)

    //Herover i keyupHandler forsinker useAsyncDebounce onChange-eventet med 400 ms efter sidste keyup-event, 
    //så der ikke sker en masse rodede ændringer i tabellen, inden den ønskede rendering vises

    //Herunder returneres et button-tag med et state, som renderer en modal med et input-tag og en gennemsigtig baggrund
    //Styling er inline-styling. Hvordan spiller styling i forhold til bootstrap?

    return (
        <>
        <button type='button' style={{position: "relative"}} onClick={toggleFilterModal}>{!filterInput.length < 1 ? <RiFileSearchFill/> : <RiFileSearchLine/>}</button>
        {filterModal &&
        <>
        <div onClick={toggleFilterModal} style={{background: "transparent", zIndex: "1", position: "absolute", left: "0", right: "0", top: "0", bottom: "0"}}></div>
        <div style={{border: "2px solid black", padding: "10px", position: "absolute", backgroundColor: "white", marginLeft: "-97px", marginTop: "-110px", zIndex: "2"}}>
            <label>
            Search:
            <br/>
            <input style={{width: "100px"}} type="text" value={value || ''} onChange={(e) => {
                setValue(e.target.value)
                keyupHandler(e.target.value)
                setFilterInput(e.target.value)
            }}/>
            </label>
        </div>
        </>
        
        }
        </>
    )
}

export default ColumnFilter;