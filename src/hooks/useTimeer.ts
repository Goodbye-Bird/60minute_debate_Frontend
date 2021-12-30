import { useRecoilState } from 'recoil';
import { timeData } from '../store/timerDataAtom';

export const  useTimeer = () => {
    const [timer,setTimeer] = useRecoilState(timeData);

    const currentTimer = () =>{
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,'0');
        const minutes = String(date.getMinutes()).padStart(2,'0');
        const second = String(date.getSeconds()).padStart(2,'0');
        
        const time = `${hours}:${minutes}`
        
        setTimeer((prve)=>({...prve,time:time}))
    }

    const startTimer = () => {
        setInterval(currentTimer, 500);
    }

    startTimer();
}

