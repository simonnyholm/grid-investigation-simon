const CounterDiv = () => {

    return (
        <div className="counterDiv">{rows.length} rækker er vist. {rows.selectedFlatRows && rows.selectedFlatRows.length()}</div>
    )
}

//export default CounterDiv