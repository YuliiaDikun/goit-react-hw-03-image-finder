import { getImages } from './service/API';
import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

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
      this.setState({ isLoading: true });
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
  onImageClick = largeImg => {
    this.setState({ largeImgUrl: largeImg });
  };
  render() {
    const { query, error, images, isEmpty, showBtn, largeImgUrl, isLoading } = this.state;
    const hasLargeImgUrl = largeImgUrl.length > 0;
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        {isEmpty && <p>Nothing find for this {query}.</p>}
        {error && <p>Something wrong! {error}</p>}
        {isLoading && <Loader/> }
        {images?.length > 0 && (
          <ImageGallery photos={images} onImageClick={this.onImageClick} />
        )}

        {showBtn && <Button onBtnClick={this.onBtnClick} />}
        {hasLargeImgUrl && <Modal largeImgUrl={largeImgUrl} onImageClick={this.onImageClick} />}
      </>
    );
  }
}
