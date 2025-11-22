function Note ({title,body}) {

    return(
        
<article class="note">
                <h3>{title}</h3>
                <p>
                    {body}
                </p>
            </article>
    )
}

export default Note