import { useState } from 'react';
import Player from './Player';

export default function Players({players}){
    const [player, setPlayer] = useState(11);

    const handleAddPlayer = () =>{
        const newPlayer = player + 1;
        setPlayer(newPlayer)
    }
    const handleRemovePlayer = () =>{
        const newPlayer = player - 1;
        setPlayer(newPlayer)
    }

    return(
        <div className='device'>
            <h3>There are some players</h3>
            <h4>Total player : {player}</h4>
            <button onClick={handleAddPlayer}>Add player</button>
            <button onClick={handleRemovePlayer}>Remove player</button>
            {
               players.map(player => <Player player={player}></Player>)
            }

        </div>
    )
}