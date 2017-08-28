import React, { Component } from 'react';
import Track from './trackComponent';
import { getSongsByAlbum } from '../lib/SpotifyUtil';
const styles = {
    label: {

        position: 'relative',

    },


};

const style = {
    label: {
        top: -40,
        position: 'relative',
        left:160,
    },


};



class Album extends Component {
    constructor(props) {

        super(props);
        this.state = { tracks: undefined,
            currentTrackList:'none',



        };

// albums relative to artist

        this.actionButton = () => {

            getSongsByAlbum(this.props.varAlbums.id).then(json=>
                {
                    this.setState({tracks: json.tracks.items});



                }
            );

        }


    }

    render() {

        let manageVisibility = () =>
        { this.setState({currentTrackList: this.state.currentTrackList === 'none' ? 'block' : 'none'})


        };

        return <div className="col-md-12 col-sm-12 col-xs-12"  style={{position:"realtive",bottom:"-20px"}}>












            <div className="panel panel-default">
            <div className="media">
                <div className="media-left">

                        <img className="media-object" src={this.props.varAlbums.images.length > 0 ? this.props.varAlbums.images[0].url : "http://via.placeholder.com/600x500"}
                             width="100" height="100" alt="" />

                </div>
                <div className="media-body">
                    <h4 className="media-heading">

                       {this.props.varAlbums.name}

<br/><br/><br/>
                         {this.props.varAlbums.artists[0].name  ? this.props.varAlbums.artists[0].name : null}

                        <br/>
                        <br/>



                    </h4>


                    {
                        this.state.tracks ? this.state.tracks.map((data, key) => {

                            return <Track key={key} varTracks={data}/>}): null
                    }


                </div>

                <br/>
                <input type="button" className="btn btn-primary" onClick={this.actionButton} name="seeTracks" value="seeTracks" style={{ position:"relative",bottom:"15px"}}/>
                <br/>
            <div/>
             </div>
            </div>






        </div>


    }
}


export default Album  ;
