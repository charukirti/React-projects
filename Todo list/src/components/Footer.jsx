export default function Footer ({tasks}){
    return (
        <footer>
            <p className="total__items">
                Total Tasks <span>{tasks.length}</span>
            </p>
            <button className="btn__clear--item">Clear Tasks</button>
        </footer>
    )
}

