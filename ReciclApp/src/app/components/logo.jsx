import RecyclingIcon from '@mui/icons-material/Recycling';

export default function Circulo({size = 75, color = 'green'}){
    return(
         <div
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '-10px',
                marginTop: '40px'


            }}
        >
            <RecyclingIcon style={{ color: 'white', fontSize: size * 0.6 }} />
        </div>
    );

}