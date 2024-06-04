import { VscCoffee } from "react-icons/vsc";

export const Posts = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}>
        <VscCoffee />
        Traer datos
    </button>
}