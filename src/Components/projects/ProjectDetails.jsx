import React from 'react'


const ProjectDetails= (props)=>{
     const id = props.match.params.id
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias, reprehenderit ratione quam assumenda nisi aliquam fugiat ab. Quisquam, laudantium eaque recusandae eligendi unde mollitia harum non reprehenderit qui iusto?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Yasir Khan</div>
                    <div>2cnd September ,2am</div>
                </div>
            </div>
        </div>
    )

}



export default ProjectDetails