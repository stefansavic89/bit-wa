class User {
    constructor(user) {
        this.gender = user.gender; 
        this.name = `${user.name.first} ${user.name.last}`;
        this.email = user.email;
        this.date = user.dob;
        this.photo = user.picture.large;

    }

    getEmail(email) {
        const end = (this.email.split("@")[1]);
        const start = `${this.email.substring(0,3)}`;
        const mid = `${(this.email.split("@")[0]).substr(-3)}`;
        const hidden = `${start}...${mid}@${end}`;
        
        return hidden;
    }

    getDate() {
        const dob = new Date(this.date);
        const year = dob.getFullYear();
        const month = dob.getMonth();
        const day = dob.getDate();

        return `${day+1}.${month+1}.${year}`;
    }
}

export default User;