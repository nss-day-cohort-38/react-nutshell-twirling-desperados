import React, { useState } from "react";
import LoginManager from "../../modules/LoginManager";

const NewUserForm = props => {
  const [newUserInfo, setNewUserInfo] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [isAvailable, setIsAvailable] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...newUserInfo };
    stateToChange[event.target.id] = event.target.value;
    setNewUserInfo(stateToChange);
  };

  const handleRegistration = event => {
    event.preventDefault();

    LoginManager.getUsers().then(arrayOfUsers => {
      const filteredUsers = arrayOfUsers.filter(
        element => element.email === newUserInfo.email
      );

      if (filteredUsers.length !== 0) {
        window.alert("This is already a registered user!");
      } else {
        if (newUserInfo.username === "" || newUserInfo.email === "" || newUserInfo.password === "") {
          window.alert("You must have a valid email and password! No blanks!");
        } else {
          LoginManager.post(newUserInfo).then(() => {
            LoginManager.getUsers().then(userArray => {
              const user = userArray.find(
                el =>
                  el.email === newUserInfo.email &&
                  el.password === newUserInfo.password
              );
              props.setAsUser(user.id);
              setIsAvailable(false);
              props.history.push("/messages");
            });
          });
        }
      }
    });
  };

  return (
    <form onSubmit={handleRegistration}>
      <fieldset>
        <h3>Add a New User</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="text"
            id="username"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputUserName">Username</label>
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email</label>

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            required=""
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button disabled={isAvailable} type="submit">
          Add User
        </button>
      </fieldset>
    </form>
  );
};

export default NewUserForm;
