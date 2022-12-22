import css from './Searchbar.module.css';
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
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
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
