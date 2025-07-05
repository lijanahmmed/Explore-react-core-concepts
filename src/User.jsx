export default function User({user}){
    const {name, email, phone, company} = user;
    return(
        <div className="student">
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <h5>Company: {company.name}</h5>
        </div>
    )
}