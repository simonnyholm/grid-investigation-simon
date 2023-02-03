import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { RiFileSearchLine } from "react-icons/ri";
import { RiFileSearchFill } from "react-icons/ri";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiChevronUpCircle } from "react-icons/bi"
import { HiOutlineFilter } from "react-icons/hi"
import { HiFilter } from "react-icons/hi"

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column

    const [value, setValue] = useState(filterValue)

    const [filterModal, setFilterModal] = useState(false);

    const [filterInput, setFilterInput] = useState(false);


    function toggleFilterModal() {
        setFilterModal(!filterModal);
    }

    const keyupHandler = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400)

    // Herover i keyupHandler forsinker useAsyncDebounce onChange-eventet med 400 ms efter sidste keyup-event, 
    // så der ikke sker en masse rodede ændringer i tabellen, inden den ønskede rendering vises

    // Herunder returneres et button-tag med et state, som renderer en modal med et input-tag og en gennemsigtig baggrund
    // Hvordan fjerner vi aíndhold i FilterInput, mens vi samtidig sikrer os, at den renderer påny?
    // pr

    return (
        <>
        <button type='button' className='columnFilter__filterBtn theadBtn' style={{position: "relative"}} onClick={toggleFilterModal}>{!filterInput.length < 1 ? <HiFilter size={14}/> : <HiOutlineFilter size={14}/>}</button>
        {filterModal &&
        <>
        <div className='transparentBg' onClick={toggleFilterModal}></div>
        <div className='filterModal'>

            
            <label alt="Søg" title="Søg">
                
            <input className='filterModalInput' placeholder='Søg' type="text" value={value || ''} onChange={(e) => {
                setValue(e.target.value)
                keyupHandler(e.target.value)
                setFilterInput(e.target.value)
            }}/>
            </label>
            {/* <div className='closeFilterModal' onClick={(e) => setFilterInput(null)}><RiCloseCircleLine/></div> */}
            <button className='closeFilterModal' onClick={toggleFilterModal}><BiChevronUpCircle/></button>
        </div>
        </>
        
        }
        </>
    )
}

export default ColumnFilter;