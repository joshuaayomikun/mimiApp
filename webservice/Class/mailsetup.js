
const MailClass = class{
    constructor(service = "gmail", user="joshuaayomikun@gmail.com", pass="toyinakande2"){
        this.service = service
        this.auth = {
            user:user, pass:pass
        }
    }
}
module.exports.MailClass