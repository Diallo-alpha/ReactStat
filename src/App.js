import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'GOMYCODE',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://via.placeholder.com/150',
      profession: 'DEVELOPPEMENT',
    },
    show: false,
    interval: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ interval: this.state.interval + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  profilAffi = () => {
    this.setState({ show: !this.state.show })
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, interval } = this.state;

    return (
      <div>
        <button onClick={this.profilAffi}>Afficher le profil</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt="person" />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Component mounted {interval} seconds ago.</p>
      </div>
    );
  }
}

export default App;

