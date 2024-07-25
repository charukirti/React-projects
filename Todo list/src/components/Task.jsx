import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"

export default function Task ({task}){
    return (
        <div className="task__list--item">
            <p className="task__name">{task.taskName}</p>

            <div className="btn__container">
            <FontAwesomeIcon icon={faCircleCheck} className="btn__container--complete"/>
            <FontAwesomeIcon icon={faPenToSquare} className="btn__container--edit"/>
            <FontAwesomeIcon icon={faTrashCan} className="btn__container--delete"/>
            </div>
        </div>
    )
}

