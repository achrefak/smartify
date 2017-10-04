export function likeTrack(state = [], action) {
    switch (action.type) {

        case 'likeTrack':
            return [...state,
            action.objTrack]

        case 'dislikeTrack':
            { return state.filter(obj => obj.id !== action.objTrack.id); }

        case 'showLikeTrack':
            { return state }

        case 'likeDislikeList':
            { return state.filter(obj => obj.id !== action.objTrack.id); }



        default:
            return state
    }
};