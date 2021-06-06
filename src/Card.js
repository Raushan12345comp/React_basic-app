import React from 'react'

const Card = ({tittle="Raushan", ButtonText="Click Me", description="Learn React JS"}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
                <img
                  src="Images/20191006_184206.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{tittle}</h5>
                  <p className="card-text">
                    {description}
                  </p>
                  <a href="#" className="btn btn-success">
                    {ButtonText}
                  </a>
                </div>
              </div>
    )
}

export default Card
