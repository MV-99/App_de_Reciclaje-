import Card_List from "./Card_List";
import data from '@data/data_record_materials.json';
import '@styles/Record_list.css';


function Record(){
    return(
        <div className="record">
            <h3>Historial de reciclaje</h3>
            <p>Tus Ultimos registros de materiales reciclados</p>
            <Card_List data={data} />
        </div>
    )
}

export default Record;