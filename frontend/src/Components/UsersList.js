/* import React, { useContext, useEffect } from "react";
import UserContext from "../Context/User/UserContext";

const UsersList = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.getProducts();
  }, []);

  console.log(userContext.products, 'userContext.products')
  return (
    <div className="list-group h-100">
      {userContext.products.length
        ? userContext.products.map((user) => (
            <a
              key={user.id}
              href="#!"
              onClick={() => userContext.getProfile(user.id)}
              className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
            >
              <img src={user.avatar} alt="" className="img-fluid mr-4 rounded-circle" width="70" />
              <p>{user.name + " " + user.price}</p>
            </a>
          ))
        : null}
    </div>
  );
};

export default UsersList; */