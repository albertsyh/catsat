const CatThumb = ({ cats, onToggle, view, close }) => {
    return(

        <>
            {cats.map((cats) => (
                
                <div class="moreContainer" key={(cats.id).toString()} style = { { backgroundColor: cats.background_color }}>

                    <div className="row catDetails">

                        <div className="col-12 catThumbnail text-end pt-2" style={{ backgroundImage: "url(" + cats.image_url + ")"}}>

                            <button onClick = {close}>x</button>

                        </div>

                        <div className="col-6 offset-1 p-1" >

                            <h4>{cats.name}</h4>

                            <h6>{cats.age} years old</h6>

                        </div>

                        <div className="col-4">

                            <button className = {cats.liked ? "liked" : ""} onClick = {() => onToggle(cats.id)}><i className = {cats.liked ? "fas fa-heart likedHeart" : "far fa-heart"}  style = {{color: "#F46D5C"}}></i>{cats.liked ? " Liked" : " Like"}</button>

                        </div>

                        <div className="col-10 offset-1 p-1">
                            <p>{cats.description}</p>
                        </div>

                        <div className="col-10 offset-1 pt-2 ownerDetails mb-2">
                            <h5>Owned by {cats.owner.name}</h5>

                            <table className="table table-borderless">

                                <tbody>

                                    <tr>
                                        <th scope="row">Phone</th>
                                        <td>{cats.owner.phone}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{cats.owner.email}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Location</th>
                                        <td>{cats.owner.address}</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>
            ))}

        </>

        

    )
}

export default CatThumb