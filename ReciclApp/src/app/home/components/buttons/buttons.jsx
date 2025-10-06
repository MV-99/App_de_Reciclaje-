import "../../../../styles/buttons.css";
import RecyclingIcon from '@mui/icons-material/Recycling';
import TollIcon from '@mui/icons-material/Toll';

function buttons() {
    return (
        <div className="buttons">
            <button className="btn-registrar-material">
                <RecyclingIcon />
                Registrar Material
            </button>
            <button className="btn-canjear-puntos">
                <TollIcon />
                Canjear Puntos
            </button>
        </div>
    );
}

export default buttons;
