import CommentCard from '../CommentCard/CommentCard'
import CommentForm from '../CommentForm/CommentForm'

import './Comment.scss'


//comment area UI
const Comment = ({ selected }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
// console.log(selected)
    return (
        <section className="comment">
            <h3 className="comment__title">3 Comments</h3>
            <CommentForm
                handleSubmit={handleSubmit} />

            {selected.comments?.map(comment => {
                return <CommentCard
                    key={comment.id}
                    commentData={comment} />
            })}

        </section>
    )
}

export default Comment