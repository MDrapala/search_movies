const request = require('request')

const theMovieDB = (name, callback) => {

    const url = 'https://api.themoviedb.org/3/search/movie?api_key=6a46855662346957d41ea78b3e983221&query=' + name + '&language=fr-FR'

    request( { url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to movies services!', undefined)
        } else if ( body.results.length === 0) {
            callback('Unable to find movie. Try another search!', undefined)
        } else {
            callback(undefined, {
                pictures: body.results[0].poster_path,
                title: body.results[0].title,
                describe: body.results[0].overview,
                language: body.results[0].original_language,
                popularity: body.results[0].popularity    
            })
        }
    } )
}

module.exports = theMovieDB