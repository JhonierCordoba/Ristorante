import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle  } from "reactstrap";
import DishDetail from "./dishDetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null,
        selectedComment: null
    }
    this.onDishSelect = this.onDishSelect.bind(this);
    this.renderDish = this.renderDish.bind(this);
    this.renderCommments = this.renderComments.bind(this);
  }

  onDishSelect(dish, dishComments) {
    this.setState({
      selectedDish: dish,
      selectedComment: dishComments
    })
    console.log(dish, dishComments);
  }

  renderDish(dish) {
    if(dish != null) {
      console.log(dish);
      return(
        <DishDetail dish={this.state.selectedDish} />
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  renderComments(dishComments) {
    
    if(dishComments !== null) {     
      return (
        <DishDetail comments={this.state.comments} />
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  render() {
    const menu = this.props && this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish, dish.comments)}>
            <CardImg width="100%"  src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    })
    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div>
          {this.renderDish(this.state.selectedDish)}
          {this.renderComments(this.state.selectedComment)}
        </div>
      </div>
    )
  }
}

export default Menu;