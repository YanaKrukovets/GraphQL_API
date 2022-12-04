const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            return UserList; 
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        },
    },
    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2022);
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.lenth];
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },

        createUser: (parent, args) => {
           const {id, newUsername} = args.input;
           let userUpdated;

           UserList.forEach((user) => {
            if (user.id === id) {
                user.username = newUsername;
                userUpdated = user;
            }
            
           }) ;
           return userUpdated;
        },

        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user.id === Number(id)));
            return null;
        }
    },
}

module.exports  = { resolvers }