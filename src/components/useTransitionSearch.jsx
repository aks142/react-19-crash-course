import { useState, useTransition } from "react"
import { cars } from "../utils/cars"

const UseTransitionSearch = () => {

    // High priority value
    const [ query, setQuery ] = useState("")

    // Low priority deffered value
    const [ filtered, setFiltered ] = useState([])

    const [ isPending, startTransition ] = useTransition()

    const handleChange = e => {
        const val = e?.target?.value

        // Urgent update handled immediately
        setQuery(val)

        startTransition(() => {
            const results = cars.filter(car => car.includes(val))
            setFiltered(results)
        })
    }

    return (
        <>
            <div>
                <input type={"text"} onChange={handleChange} value={query} />
                {isPending && <p>Updating list...</p>}
                <ul>
                    {
                        filtered.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default UseTransitionSearch
