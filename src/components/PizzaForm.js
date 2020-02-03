import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" onChange={props.handleChange} className="form-control" placeholder="Pizza Topping" value={props.topping}/>
        </div>
        <div className="col">
          <select value={props.size} className="form-control" name="size" onChange={props.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" onChange={props.handleChange} checked={props.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" onChange={props.handleChange} checked={!props.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>props.changePie(props.pizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
