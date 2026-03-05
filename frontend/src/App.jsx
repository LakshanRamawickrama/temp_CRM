import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/health/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
                setError(error.message)
                setLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <h1>React + Django</h1>
            <div className="card">
                {loading && <p>Connecting to backend...</p>}
                {error && <p className="error">Error: {error}</p>}
                {data && (
                    <div className="success">
                        <h2>Backend Response:</h2>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                        <p className="status-msg">{data.message}</p>
                    </div>
                )}
            </div>
            {!loading && !data && !error && <p>No data received.</p>}
        </div>
    )
}

export default App
