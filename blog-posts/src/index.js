import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <div>
          Hello my name is Sarah, and I live in Istanbul.
        </div>
      </UserCard>
      <UserCard>
        <SingleComment 
          name="Alex" 
          date="Today at 5:00PM" 
          text="It is amazing"
        />
      </UserCard>
      <UserCard>
        <SingleComment 
          name="Jack" 
          date="Today at 6:00PM" 
          text="Great job"
        />
      </UserCard>
      <UserCard>
        <SingleComment 
          name="Sarah" 
          date="Today at 7:00PM" 
          text="Thanks..."
        />
      </UserCard>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);