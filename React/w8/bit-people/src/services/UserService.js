import User from '../entities/User';

class UserService {
    fetchUser() {
        return fetch('https://randomuser.me/api/?results=15')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                // console.log(result);
                const userList = result.results;
                // console.log(userList);
                return userList;
            })
            .then((usersFromApi) => {
                return usersFromApi.map((user) => {
                    return new User(user);
                });
            });
    }
}

export const userService = new UserService();