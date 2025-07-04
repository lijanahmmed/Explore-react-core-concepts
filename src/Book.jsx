import './Book.css'

export default function Book({book}){
    const {name, price} = book;
    return(
        <div className='book'>
            <h4>Name : {name}</h4>
            <h5>Price : {price}</h5>
        </div>
    )
}