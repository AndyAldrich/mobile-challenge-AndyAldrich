import { SearchBar } from 'react-native-elements';
import React from 'react';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search by Name or ID"
        onChangeText={this.updateSearch}
        value={search}
        inputContainerStyle={{ backgroundColor: 'white' }}
        leftIconContainerStyle={{ backgroundColor: 'white' }}
        inputStyle={{ backgroundColor: 'white' }}
        containerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-around',
          //borderWidth: 1,
          borderRadius: 10,
          shadowColor: '#7f5df0',
          shadowoOffset: {width: 0, height: 10},
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
      />
    );
  }
}