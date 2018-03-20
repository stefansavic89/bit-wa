class User {
    constructor(user) {
        this.id = user.login.username;
        this.photo = user.picture.medium;
        this.firstName = user.name.first;
        this.email = user.email;
    }
}

export default User;