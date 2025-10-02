import './Card_list.css';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';

function Icon({icon}){
    switch(icon){
        case 'Plástico':
            return(<LiquorOutlinedIcon className="card-icon"/>);
        case 'Papel':
            return(<DescriptionOutlinedIcon className="card-icon"/>);
        case 'Electrónico':
            return(<ChangeHistoryOutlinedIcon className="card-icon"/>)  
    }
}



function Card(item){
    return(
        <div className='container_record'>
            <div className='data-left'>
                <div className="icon_circle">
                    <Icon icon={item.material}/>
                </div>

                <div>
                    <div>
                        {item.material}  
                    </div>
                    <div>
                        {item.peso}
                    </div>
                </div>
            </div>

            <div className='data-right'>
                <div  className="puntos_circle">
                    {item.puntos}  
                </div>
                <div>
                    {item.fecha}
                </div>
            </div>
        </div>
    );
}


function Card_List({data}){
    return(
        <div className='container_list_record'>
            {
                data.map((item, index)=>(
                    <Card key={index} {...item}/>
                ))
            }
        </div>
    );
}

export default Card_List;