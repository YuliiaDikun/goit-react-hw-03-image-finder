import { Component } from 'react';
export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  inputChange = event => {
    this.setState({ searchValue: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchValue);
    event.target.reset();
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
          />
        </form>
      </header>
    );
  }
}
