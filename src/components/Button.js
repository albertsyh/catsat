const Button = ({ allCats, likedCats, allCategory }) => {

    return(
        <div className = "row justify-content-around my-2">

            <button onClick = {allCats} className = {"col-5 category " + (allCategory ? "active" : "")}>All cats</button>

            <button onClick = {likedCats} className = {"col-5 category " + (allCategory ? " " : "active")}>Liked</button>

        </div>
    )
}

export default Button