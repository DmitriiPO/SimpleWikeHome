import React from 'react'

const Item = (props) => {
  return (
    <div className="container py-3">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center">
          <div className="col px-3 py-3"> 
            <div className="card md-6 rounded">
              <div className="card-header px-3 py-3">
                <button type="button" className="w-100 btn btn-long btn-primary">
                  добавить в избранное
                </button>
                <p>{props.title}</p>
                <img src={props.img} alt="photo" width={"85%"} className="rounded" />
                <p>{props.discription}</p>
                <p>{props.price}</p>
                <button type="button" className="w-100 btn btn-long btn-primary">
                  добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Item