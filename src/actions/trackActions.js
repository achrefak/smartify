export function likeTrack(objTrack) {
    return {
        type: 'likeTrack',

        objTrack,

    }
};

export function dislikeTrack(objTrack) {
    return {
        type: 'dislikeTrack',

        objTrack,

    }
};

export function showLikeTrack(objTrack) {
    return {
        type: 'showLikeTrack',

        objTrack,

    }
};
export function likeDislikeList(objTrack) {
    return {
        type: 'likeDislikeList',

        objTrack,

    }
};