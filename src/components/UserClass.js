import React from "react";
import Shimmer from "./Shimmer";
import UserContext from "../context/UserContext";


class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
    // console.log("Contructor called.");
  }

  async componentDidMount() {
    const api = await fetch(`https://api.github.com/users/neerajrajak`);
    const userData = await api.json();
    // console.log("componetDidMount Called.. :", userData);
    this.setState({
      userInfo: userData,
    });
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate called..");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount called..");
  }

  render() {
    // console.log("Render called.");
    if (this.state?.userInfo) {
      const { name, location, bio, avatar_url } = this.state?.userInfo;
      return (
        <div className="flex rounded overflow-hidden shadow-lg mx-auto w-[80%] h-[50%]">
          <img
            className="w-fit h-80"
            src={avatar_url}
            alt="Neeraj Rajak"
          />
          <div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              <UserContext.Consumer>
                {
                  ({ loggedInUser })=> loggedInUser
                }
              </UserContext.Consumer>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
          </div>
        </div>
      );
    } else {
      return <Shimmer />;
    }
  }
}

export default UserClass;
