import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
    };
  }

  async componentDidMount() {
    const fetchData = await fetch(
      "https://api.github.com/users/maryamshahnawaz"
    );
    const jsonData = await fetchData.json();
    console.log(jsonData);
    this.setState({
      userData: jsonData,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.userData);
  }

  componentWillUnmount() {}
  render() {
    let name1, avatar_url1;
    if (this.state.userData) {
      const { name, avatar_url } = this.state.userData;
      name1 = name;
      avatar_url1 = avatar_url;
    }
    return (
      <div>
        <h1>About us</h1>
        <UserClass name={name1} avatar_url={avatar_url1} />
      </div>
    );
  }
}
export default About;

/**
 * About
 * // complete the render phase in batch
 *
 *  Parent Constructor
 *  Parent render
 *
 *  First UserClass constructor
 *  First UserClass render
 *
 *  Second UserClass constructor
 *  Second UserClass render
 *
 * // render DOM => Shimmer / Skeleton
 *
 *  // complete the commit cycle in batch
 *
 *  First UserClass componentDidmount
 *  Second UserClass componentDidmount
 *
 *
 *
 *
 */
