import { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { likeTrack } from '../actions/trackActions';
import { dislikeTrack } from '../actions/trackActions';
import { likeDislikeList} from '../actions/trackActions';
const style = {
    label: {
        top: -40,
        position: 'relative',
        left: 160,
    },
};
class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: undefined,
        };
    }
    likeDislike(data) {
        let arrExist = this.props.redux.likeTrack.filter(obj => obj.id === this.props.varTracks.id)
        arrExist.length === 0 ? this.props.likeTrack(data) : this.props.dislikeTrack(data);
    }
    likeDislikeLabel(data) {
        let arrExist = this.props.redux.likeTrack.filter(obj => obj.id === this.props.varTracks.id)
        let status;
        arrExist.length === 0 ? status = 'Like' : status = 'Dislike';
        return status
    }
    likeDislikeList(data) {
        let arrExist = this.props.redux.likeTrack.filter(obj => obj.id === this.props.varTracks.id)
        arrExist.length === 0 ? this.props.likeTrack(data) : this.props.dislikeTrack(data);
    }

    render() {
        return<div>
        
        <div className="card" style={{ width: "20 rem" }}>
            <br />
            <br />
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-10 col-sm-10 col-xs-10">
                    {this.props.varTracks.name}             
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                    <button
                    style={{  borderRadius: "50px" }}
                        className={this.likeDislikeLabel(this.props.varTracks) === 'Like' ? 'btn btn-default' : 'btn btn-danger'}
                        onClick={e => this.likeDislike(this.props.varTracks)}>                   
                        <i className={this.likeDislikeLabel(this.props.varTracks) === 'Like' ? 'fa fa-heart-o' : 'fa fa-heart'}></i>                    
                    </button>
                </div>
            </div>           
        </div>
        <div id="myModall" className="modal fade" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title"> List of Favorite Users </h4>
                </div>
                {this.props.redux.likeTrack.length > 0 ? this.props.redux.likeTrack.map((data, key) => {
                    return (<div key={key} className="media">
                        <div className="media-left">                           
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading"> {data.name} </h3>
                        </div>
                        <div className="media-right">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={e => this.likeDislikeList(data)}>                               
                                <i className="fa fa-close"></i>                               
                            </button>
                        </div>
                    </div>
                    )
                }) : null
                }                  
                <div className="modal-body">
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
    }
}
const mapStateToProps = (state, ownProps) => ({ redux: state });
const mapDispatchToProps = { likeTrack, dislikeTrack }
const TrackContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Track)
export default TrackContainer;