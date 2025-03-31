export interface IUserProfileInfo{
    Id:string;
    Username:string;
    Salt:string;
    Hash:string;
    AccountType:string;
    Name:string;
    Bio:string;
    Email:string;
    ShopName:string;
    Address:string;
    City:string;
    State:string;
    Zip:string;
    Pfp:string;
    IsDeleted:boolean
}

export interface IPostItems{
    Id: number;
    UserId: number;
    PublisherName: string;
    Date: string;
    Caption: string;
    Image: string;
    Likes: number;
    Category: string;
    IsPublished: boolean;
    IsDeleted: boolean;
    Comments: ICommentInfo[]
}

export interface ICommentInfo{
    Id: number
    Username: string
    Comment: string
}

export interface IUserInfo {
    username: string
    password: string
}

export interface INewUser{
    Id: number;
    Username: string;
    Password:string;
    AccountType: string;
    Name: string;
    Bio: string;
    Email: string;
    ShopName: string;
    Address: string;
    City: string;
    State: string;
    ZIP: string;
    Pfp: string;
    IsDeleted: boolean;
}

export interface IUserData {
    id: number
    username: string
}

export interface IToken {
    token: string
}
