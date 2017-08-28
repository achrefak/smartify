import React, {Component} from 'react';

import Artist from './artistComponent';
import Album from './albumComponent';
import Track from './trackComponent';



class SearchResult extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        return <div className="col-md-12 col-sm-12 col-xs-12">{
this.props.srResult && this.props.srType === 'artist'?
            (this.props.srResult).map((data, key) => {
                return <Artist key={key} objArtist={data}/>
            }) :
    this.props.srResult && this.props.srType === 'album'?
        (this.props.srResult).map((data, key) => {
            return <Album key={key} varAlbums={data}/>
        })
        :

                this.props.srResult && this.props.srType === 'track'?
                    (this.props.srResult).map((data, key) => {
                        return <Track key={key} varTracks={data}/>
                    }):null

        }
        </div>
    }

}



export default SearchResult