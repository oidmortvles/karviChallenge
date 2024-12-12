import { ReactElement } from 'react';
import styles from './ButtonFilter.module.css';

interface ButtonFilterProps{
    svg?:ReactElement<SVGElement>;
    text?:string;
    fn?: () => void;
}

const ButtonFilter : React.FC<ButtonFilterProps> = ({svg,text,fn}) =>{
    return(
        <button onClick={fn} className={styles.buttonFilter}>
            {svg && <span className={styles.icon}>{svg}</span>}
            {text}
        </button>
    )
}


export default ButtonFilter