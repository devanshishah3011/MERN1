import React from "react";

//instantiated class,
//create an object of the class
//copy
//load class

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {
    //api call
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { name, avatar_url } = this.props;
    const { count, count1 } = this.state;

    return (
      <div>
        <h3>Name : {name}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
