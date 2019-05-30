export class User {
    constructor(
        public Email: string,
        public Password: string,
        public LastName: string,
        public FirstName: string,
        public MiddleName: string,
        public Passport: string = "",
        public ContentType: string = "",
        public ContentLength: number = 0,
        public RoleId: number = 2

      ) {  }
}