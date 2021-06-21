const Cat = ({ cat, onToggle, view, viewMore }) => {
    return(

        <div className="col-6" key={(cat.id).toString()}>

            <div className="row">

                <div className="col-11 mx-auto cats"  style = { { backgroundColor: cat.background_color }}>

                    <div className="row catThumbnail" style={{ backgroundImage: "url(" + cat.image_url + ")"}} onClick = {() => view(cat.id)}>

                    </div>
                    
                    <div className="row">

                        <div className = "col-6 offset-1 catInfo"  onClick = {view}>

                            <h6>{cat.name}</h6>

                            <p className="owner">Owned by {cat.owner.name}</p>

                        </div>

                        <div className = "heart col-4 d-flex my-auto text-center">

                            <button onClick = {() => onToggle(cat.id)}><i className = {cat.liked ? "fas fa-heart" : "far fa-heart"}  style = {{color: "#F46D5C"}}></i></button>

                        </div>

                    </div>

                </div>

            </div>

            

        </div>

    )
}

export default Cat