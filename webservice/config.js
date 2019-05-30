const config = class {
  constructor(host = 'localhost', user = 'root', password='', database = 'mimi'){
    this.host = host
    this.user=user;
    this.password=password;
    this.database = database;
  }
};
module.exports= config;
