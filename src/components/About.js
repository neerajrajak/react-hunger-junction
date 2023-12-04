import React from "react";
import UserClass from "./UserClass";

const USERS = [
  {
    name: "Neeraj",
    location: "Thane, Maharashtra",
    contact: "neerajrajak@mail.com",
  },
  {
    name: "Kunal",
    location: "Sion, Mumbai",
    contact: "kunalnaik@mail.com",
  },
];

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("About constructor called.");
  }

  componentDidMount() {
    // console.log("About componentDidMount called.");
  }

  render() {
    // console.log("About render called.");
    return (
      <div className="flex-col justify-center">
        <h2 className="text-center text-3xl my-3 font-bold">About Us</h2>
        <UserClass userDetails={USERS[0]}></UserClass>
      </div>
    );
  }
}

// const About = () => {

//   return (
//     <div>
//       <h2>About Us</h2>
//       <div className="usercard-holder">
//         {users.map((user, index) => (
//           <UserClass userDetails={user} key={index}></UserClass>
//         ))}
//       </div>
//     </div>
//   );
// };

export default About;
