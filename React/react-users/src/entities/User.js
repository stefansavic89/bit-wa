
import FormatName from '../app/Shared/Utils/FormatName';



class User {
    constructor(user) {
        this.gender = user.gender; 
        this.name = FormatName(user.name.first + " " +  user.name.last);
        this.email = this.getEmail(user.email);
        this.date = this.getDate(user.dob);
        this.photo = user.picture.large;

    }

    getEmail(email) {
        const end = (email.split("@")[1]);
        const start = `${email.substring(0,3)}`;
        const mid = `${(email.split("@")[0]).substr(-3)}`;
        const hidden = `${start}...${mid}@${end}`;
        
        return hidden;
    }

    getDate(date) {
        const dob = new Date(date);
        const year = dob.getFullYear();
        const month = dob.getMonth();
        const day = dob.getDate();

        return `${day+1}.${month+1}.${year}`;
    }
}

export default User;