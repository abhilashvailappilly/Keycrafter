export interface PasswordDataInterface {
    id:string,
    password:string,
    userId:string
    timestamp: {
        seconds: number;
        nanoseconds: number;
    };
}