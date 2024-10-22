export type Login ={
    uuid: string;
}

export type Name ={
    first: string;
    last: string;
}

export type User ={
    login: Login;
    name: Name;
    email: string;

}

export type UserProps = {
    name: Name;
    email: string;
}