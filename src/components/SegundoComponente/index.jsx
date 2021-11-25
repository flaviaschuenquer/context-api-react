import React, {useContext} from 'react';
import {DataContext} from '../../Context/data';

function SegundoComponente(){ 
    const {state} = useContext(DataContext)    
    return <h1>{state.nome}</h1>
}
export default SegundoComponente;