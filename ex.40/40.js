// : { artist: string, title: string, tracks?: number }
function make_album(artist, title, tracks) {
    var album = {};
    if (tracks === undefined) {
        album = { artist: artist, title: title };
    }
    else {
        album = { artist: artist, title: title, tracks: tracks };
    }
    return album;
}
// Making three dictionaries representing different albums
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12);
var album3 = make_album("Artist3", "Album3");
console.log(album1);
console.log(album2);
console.log(album3);
