import React, { Component } from 'react';
import { getAlbumsByArtist } from '../lib/SpotifyUtil';
import Album from "./albumComponent";

class Artist extends Component {


    constructor(props) {

        super(props);
        this.state = {

           albums: undefined,
            currentAlbumList: 'none' ,

        };

// albums relative to artist

        getAlbumsByArtist(this.props.objArtist.id).then(


        json => {
            this.setState({albums: json.items})
        }
        );



        }


    render() {

        let manageVisibility = () =>
        { this.setState({currentAlbumList: this.state.currentAlbumList === 'none' ? 'block' : 'none'})


        };



        return <div className="col-md-12 col-sm-12 col-xs-12" >
            <div className="panel panel-default">
                <div className="panel-body">
                    <img style={{width: '100%'}} className="img img-rounded" src={this.props.objArtist.images.length > 0 ? this.props.objArtist.images[0].url : "http://via.placeholder.com/60x50"} alt="" />
                    <br/>
                    <br/>

                </div>
                <div className="panel-footer">


                        {this.props.objArtist.name}: {'Followers: ' + this.props.objArtist.followers.total + ' - Popularity: ' + this.props.objArtist.popularity}
                            <br/>
                            <input type="button" className="btn btn-primary" onClick={manageVisibility} name="seeAlbum" value="seeAlbum"/>

                        <span style={{display: this.state.currentAlbumList}}/>
                            {
                                this.state.albums && (this.state.currentAlbumList === 'block') ?

                                    this.state.albums.map((data, key) => {
                                        return <Album key={key} varAlbums={data}/>
                                    })
                                    : null



                            }






                </div>
            </div>


        </div>

    }
}


export default Artist  ;
