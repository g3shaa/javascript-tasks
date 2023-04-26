class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    async sendEmail(subject, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Sending email to ${this.email}:`);
                console.log(`Subject: ${subject}`);
                console.log(`Body: ${body}`);
                resolve();
            }, 1000);
        });
    }
}

module.exports = User;