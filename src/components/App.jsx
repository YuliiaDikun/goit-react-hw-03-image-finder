import { getImages } from './service/API';
import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImgUrl: '',
    page: 1,
    showBtn: false,
    error: null,
    isEmpty: false,
    isLoading: false,
  };
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      getImages(query, page)
        .then(({ hits, total, totalHits }) => {
          if (hits.length === 0) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: page < Math.ceil(total / totalHits),
          }));
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  onFormSubmit = query => {
    this.setState({
      query,
      images: [],
      largeImgUrl: '',
      page: 1,
      showBtn: false,
      error: null,
      isEmpty: false,
      isLoading: false,
    });
  };
  onBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        {this.state.isEmpty && <p>Nothing find for this {this.state.query}.</p>}
        {this.state.error && <p>Something wrong! {this.state.error}</p>}
        <ImageGallery photos={this.state.images} />
        {this.state.showBtn && <Button onBtnClick={this.onBtnClick} />}
      </>
    );
  }
}
