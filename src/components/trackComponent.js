import React, { Component } from 'react';


class Track extends Component {
    constructor(props) {
        super(props);


        this.state={

            likedSongs:[],

        }

    }
    pushFunction(e){
         this.state.likedSongs.push(this.props.varTracks.name)


    }
    render() { return <div className="card" style={{ width:"20 rem"}}>
        <br/>
        <br/>

        <div className="col-md-12 col-sm-12 col-xs-12">

            <div className="col-md-10 col-sm-10 col-xs-10">

                {this.props.varTracks.name}

            </div>

            <div className="col-md-2 col-sm-2 col-xs-2">

                <input type="checkbox"  onChange={e => this.setState({likedSongs:(this.state.likedSongs.concat(this.props.varTracks.id))})}   value=""  />
            </div>
            {console.log(this.state.likedSongs)}


        </div>

    </div>


    }

}

export default Track  ;