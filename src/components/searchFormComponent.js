import React, { Component } from 'react';
import { search } from '../lib/SpotifyUtil';
import SearchResult from './searchResultComponent';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_text: '',
            search_type: 'artist',
            search_result: undefined,
        }
    }
    doSearch(e) {
        search(this.state.search_text, this.state.search_type).then(
            this.state.search_text === '' ? alert('veuillez remplissez le champ ') :
                json => {
                    this.state.search_type === 'artist' ? this.setState({ search_result: json.artists.items })
                        : this.state.search_type === 'album' ? this.setState({ search_result: json.albums.items })
                            : this.setState({ search_result: json.tracks.items })
                })
    };
    render() {
        return (
            <div className="form-group">
                <input type='text' className="form-control" placeholder="What are you searching for ?" required="true" onChange={e => this.setState({ search_text: e.target.value })} value={this.state.search_text} /><br />
                <div className="col-md-4 col-sm-4 col-xs-4">
                    <label className="custom-control custom-radio">
                        <input checked={this.state.search_type === 'artist'} onChange={e => this.setState({ search_type: 'artist', search_result: undefined })} id="radio1" name="radio" type="radio" className="custom-control-input" />
                        <span className="custom-control-indicator"> </span>
                        <span className="custom-control-Michaedescription">Artist</span>
                    </label>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                    <label className="custom-control custom-radio">
                        <input checked={this.state.search_type === 'album'} onChange={e => this.setState({ search_type: 'album', search_result: undefined })} id="radio1" name="radio" type="radio" className="custom-control-input" />
                        <span className="custom-control-indicator"> </span>
                        <span className="custom-control-description">Album</span>
                    </label>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                    <label className="custom-control custom-radio">
                        <input checked={this.state.search_type === 'track'} onChange={e => this.setState({ search_type: 'track', search_result: undefined })} id="radio1" name="radio" type="radio" className="custom-control-input" />
                        <span className="custom-control-indicator"> </span>
                        <span className="custom-control-description">Track</span>
                    </label>
                </div>
                <br />
                <br />
                <div className="col-md-7 col-sm-19 col-xs-6">
                    {this.state.search_result ? this.state.search_result[0].id : null}
                    <Link to={this.state.search_type+"/142"}>
                        <button
                            className="btn btn-primary btn-block"
                            style={{ margin: "0 90px" }}
                            onClick={e => this.doSearch()}>
                            Search
                  </button>
                    </Link>
                </div>
                <br />
                <br />
                {
                    this.state.search_result ?
                        <SearchResult srType={this.state.search_type} srResult={this.state.search_result} />
                        : null
                }
            </div>

        );
    }
}
export default withRouter(SearchForm)

