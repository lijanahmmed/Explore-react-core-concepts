export default function Post({ post }) {
    const { id, title, body } = post;

    return (
        <div className="device">
            <h5>{id}. {title}</h5>
            <p>{body}</p>
        </div>
    )
}