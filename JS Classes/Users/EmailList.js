const User = require('./User');

class EmailList {
    constructor() {
        this.users = [];
    }

    addUser(name, email) {
        const user = new User(name, email);
        this.users.push(user);
    }

    async sendEmailToAll(subject, body) {
        console.log(`Sending email to all users:`);
        for (const user of this.users) {
            await user.sendEmail(subject, body);
        }
        console.log(`Emails sent successfully.`);
    }
}

module.exports = EmailList;