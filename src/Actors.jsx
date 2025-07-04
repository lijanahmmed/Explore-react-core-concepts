import Actor from './Actor';
import './Actor.css'

export default function Actors({actors}){
    return(
        <div className='actor'>
            <h3>There are some actors</h3>
            
            {
                actors.map(actor => <Actor name={actor}></Actor>)
            }
        </div>
    )
}