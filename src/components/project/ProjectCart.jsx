
const ProjectCart = ({ name, imageUrl, description, tehnologies, url, gitHub, active, setActive }) => {

    return (
        <div className='project__cart__wrapper'>

            <h2 className='project__cart__name' >
                {name}
            </h2>

            <img className='project__cart__img' src={imageUrl} alt={'project'} />

            <div className='project__cart__description'>
                {description}
            </div>
            <div className='project__cart__description'>
            Полный стек: {tehnologies}
            </div>
            <div className="project_cart_bottoms" >

            <button className='project_cart_bottom_gitHub' onClick={() => gitHub ? document.location.href=gitHub : setActive(true)}>gitHub</button>
            <button className='project_cart_bottom_site' onClick={() => url ? document.location.href=url : setActive(true)}>Сайт</button>
           
            </div>
        </div>
          
    )

}

export default ProjectCart