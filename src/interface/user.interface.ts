export interface User {
    user_id: number;
    user_name: string;
    password: string;
    email: string;
    reg_date: Date;
    upt_date: Date;
}

export interface UserRegister {
    username: string;
    password: string;
    email: string;
    address: string;
}

export interface UserLoginRequest {
    username: string;
    password: string;
}