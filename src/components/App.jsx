import { getImages } from './service/API';
import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

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
        .then(({ hits, total_hits, totalHits }) => {
          if (hits.length === 0) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: page < Math.ceil(total_hits / totalHits),
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
  render() {
    return <>
      <Searchbar onFormSubmit={this.onFormSubmit} />
      <ImageGallery photos={this.state.images } />
    </>
  }
}
