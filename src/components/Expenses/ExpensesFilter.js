

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    // 
    const handleChange = (event) => {
        // console.log();
        props.onFilterSelect(event.target.value)
    }
    return (
        <div className='expenses-filter'>
            <select className='' onChange={handleChange}> <option value="">None</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default ExpensesFilter;