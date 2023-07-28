import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCard, fetchUsers } from "../actions/cardActions";

const Card = (props) => {
  let { user } = useParams();

  const card = useSelector((state) => {
    return state.cards.find(card => card.title === user)
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, body } = card;

  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onButtonClick = () => {
    let id = card.id;
    dispatch(deleteCard(id));
    navigate("/contact");
  }

  return users.map((user) => {
    return (
      <div 
        className="ui raised very padded text container segment"
        style={{marginTop:"80px"}}
        key={user.id}
      >
        <h3 className="ui header">
          {user.name}
        </h3>
        <p>
          {user.email}
        </p>
        <button 
        className="ui primary right floated button" 
        onClick={onButtonClick}>
          Delete
        </button>
      </div>
    )
  })
}

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.match.params.user;
  return {
    card: state.cards.find(card => card.title === title)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => { dispatch(deleteCard(id)) }
  }
}

export default Card;
