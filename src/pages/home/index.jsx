
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";

function Home (){

const Navigate = useNavigate();

return (
    <div> 
        <h1>Aula de React com Vite JS</h1>

        <button
            onClick={() =>Navigate('/exemplo/1')}
            >
                Exemplo 1
        </button>

    </div>
)
}

export default Home;
