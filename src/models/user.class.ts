export class User {
    firstName!: string;
    lastName!: string;
    birthDate!: number;
    street!: string;
    zipCode!: number;
    city!: string;

    constructor(object?: any) {
        this.firstName = object ? object.firstName : '';
        this.lastName = object ? object.lastName : '';
        this.birthDate = object ? object.birthDate : '';
        this.street = object ? object.street : '';
        this.zipCode = object ? object.zipCode : '';
        this.city = object ? object.city : '';
    }
}