export default function Player({player}){
    const {name, age} = player
    return(
        <div className="book">
            <h4>Name : {name}</h4>
            <h5>Age : {age}</h5>
        </div>
    )
}