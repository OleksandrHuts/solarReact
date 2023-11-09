import { useParams } from "react-router-dom"

export default function Movie() {
    const params = useParams();

    return (
        <div className="container">
            <h1>Movie #{params.id}</h1>
        </div>
    )
}