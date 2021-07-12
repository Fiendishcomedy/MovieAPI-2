const express = require("express");
const bodyParser = require('body-parser');
const uuid = require('uuid');
const app = express()

app.use(morgan('common'));



app.use(bodyParser.json());

let movies = [
    {
        title: 'Pulp Fiction',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        genre: {
            name: 'Crime',
            description: 'Crime fiction, detective story, murder mystery, mystery novel, and police novel are terms used to describe narratives that centre on criminal acts and especially on the investigation, either by an amateur or a professional detective, of a serious crime, generally a murder.'
        },
        director: {
            name: 'Quentin Tarantino ',
            bio: "In January of 1992, first-time writer-director Tarantino's Reservoir Dogs (1992) appeared at the Sundance Film Festival. The film garnered critical acclaim and the director became a legend immediately.",
            birth: 'March 27, 1963',
            death: '-'
        },
    },

    {
        title: 'Scream',
        description: 'A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.',
        genre: {
            name: 'Horror',
            description: 'A motion picture which entertains by horrifying or frightening the audience.'
        },
        director: {
            name: 'Wes Craven ',
            bio: 'Wes Craven has become synonymous with genre bending and innovative horror, challenging audiences with his bold vision. Wesley Earl Craven was born in Cleveland, Ohio, to Caroline (Miller) and Paul Eugene Craven.',
            birth: 'August 2, 1939',
            death: 'August 30, 2015'
        },
    },
    {
        title: 'Death Proof',
        description: 'Two separate sets of voluptuous women are stalked at different times by a scarred stuntman who uses his "death proof" cars to execute his murderous plans.',
        genre: {
            name: 'Thriller',
            description: 'A work of fiction or drama designed to hold the interest by the use of a high degree of intrigue, adventure, or suspense.'
        },
        director: {
            name: ' Quentin Tarantino',
            bio: "In January of 1992, first-time writer-director Tarantino's Reservoir Dogs (1992) appeared at the Sundance Film Festival. The film garnered critical acclaim and the director became a legend immediately.",
            birth: 'March 27, 1963',
            death: '-'
        },
    },
    {
        title: 'Fight Club',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        genre: {
            name: 'Drama',
            description: 'In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
        },
        director: {
            name: 'David Fincher ',
            bio: 'David Fincher was born in 1962 in Denver, Colorado, and was raised in Marin County, California. When he was 18 years old he went to work for John Korty at Korty Films in Mill Valley. He subsequently worked at ILM (Industrial Light and Magic) from 1981-1983.',
            birth: 'August 28, 1962',
            death: '-'
        },
    },
    {
        title: 'Space Jam',
        description: 'In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.',
        genre: {
            name: 'Animation',
            description: ' A film produced by photographing a series of gradually changing drawings, etc, which give the illusion of movement when the series is projected rapidly.'
        },
        director: {
            name: 'Malcom D. Lee',
            bio: 'Malcolm D. Lee was born on January 11, 1970 in the USA. He is a director and producer, known for Girls Trip (2017), The Best Man Holiday (2013) and The Best Man (1999).',
            birth: 'January 11, 1970',
            death: '-'
        },
    },
    {
        title: 'Evil Dead II',
        description: 'The lone survivor of an onslaught of flesh-possessing spirits holes up in a cabin with a group of strangers while the demons continue their attack.',
        genre: {
            name: 'Horror',
            description: 'A motion picture which entertains by horrifying or frightening the audience.'
        },
        director: {
            name: 'Sam Raimi ',
            bio: 'Highly inventive U.S. film director/producer/writer/actor Sam Raimi first came to the attention of film fans with the savage, yet darkly humorous, low-budget horror film, The Evil Dead (1981).',
            birth: 'October 23, 1959',
            death: '-'
        },
    },

    {
        title: 'Kong: Skull Island',
        description: 'After the Vietnam war, a team of scientists explores an uncharted island in the Pacific, venturing into the domain of the mighty Kong, and must fight to escape a primal Eden.',
        genre: {
            name: 'Action',
            description: 'A film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases.'
        },
        director: {
            name: 'Jordan Vogt-Roberts',
            bio: 'Jordan Vogt-Roberts is a director and producer, known for The Kings of Summer (2013), Kong: Skull Island (2017) and Successful Alcoholics (2010).',
            birth: ' September 22, 1984',
            death: '-'
        },
    },


];



// Gets the list of data about ALL movies.
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Gets the data about a single movie title, by name

app.get('/movies/:title', (req, res) => {
    res.json(movies.find((movie) => { return movie.title === req.params.title }));
});

// Gets all movies by genre. 
app.get('/movies/genre/:name', (req, res) => {
    res.json(movies.filter((movie) => { return movie.genre.name === req.params.name }));
});


//Gets data about the genre filter by name.
app.get('/genre/:name', (req, res) => {
    res.json(movies.find((movie) => { return movie.genre.name === req.params.name }));
});


// Adds data for a new movie to our list of movies.
app.post('/movies', (req, res) => {
    let newMovie = req.body;

    if (!newMovie.name) {
        const message = 'Missing name in request body';
        res.status(400).send(message);
    } else {
        newMovie.id = uuid.v4();
        movies.push(newMovie);
        res.status(201).send(newMovie);
    }
});


// Deletes a movie from our movie list by ID. help with this one. need help with the id. if we are going to use or not.
app.delete('/movies/:id', (req, res) => {
    let movies = movies.find((movies) => { return movies.id === req.params.id });

    if (movie) {
        movies = movies.filter((obj) => { return obj.id !== req.params.id });
        res.status(201).send('Movie ' + req.params.id + ' was deleted!');
    }
});


// Update the "description" of a movie by movie name/class name/ genre name. help with this one.
app.put('/movies/:title/:class/:grade', (req, res) => {
    let movies = moviess.find((movie) => { return movie.title === req.params.title });

    if (movie) {
        student.classes[req.params.class] = parseInt(req.params.grade);
        res.status(201).send('Movie ' + req.params.name + ' was assigned a grade of ' + req.params.grade + ' in ' + req.params.class);
    } else {
        res.status(404).send('Movie with the title ' + req.params.name + ' was not found!');
    }
});


app.listen(6969, () => {
    console.log("listening on port 6969!")
});
