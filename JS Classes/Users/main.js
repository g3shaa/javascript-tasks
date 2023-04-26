const EmailList = require('./EmailList');

async function main() {
    const emailList = new EmailList();
    emailList.addUser('Geshata', 'geshata@discord.com');
    emailList.addUser('Alex', 'alex@discord.com');
    emailList.addUser('Icaka', 'icaka@discord.com');
    await emailList.sendEmailToAll('Important Announcement', 'GESHATA E BOG');
}

main();