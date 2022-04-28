import { useEffect, useState } from "react"

const useEvent = id => {
    const [event, setEvent] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/volunteer/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])
    return [event, setEvent];
}

export default useEvent;