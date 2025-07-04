import Player from './Player';

export default function Players({players}){
    return(
        <div className='device'>
            <h3>There are some players</h3>
            {
               players.map(player => <Player player={player}></Player>)
            }
        </div>
    )
}