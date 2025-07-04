export default function Todo({task, isDone}){
    return(
        <li>{isDone ? 'Finish' : 'Work on'}: {task}</li>
    )
}