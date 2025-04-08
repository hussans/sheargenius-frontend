export interface IUserProfileInfo {
    id: number;
    username: string;
    salt: string;
    hash: string;
    date: string;
    accountType: string;
    name: string;
    rating: number;
    ratingCount: number;
    followers: string[];
    following: string[];
    followerCount: number;
    followingCount: number;
    securityQuestion: string;
    securityAnswer: string;
    bio: string;
    email: string;
    shopName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    pfp: string;
    isDeleted: boolean;
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

export interface INewUser {
    id: number;
    username: string;
    password: string;
    accountType: string;
    date: string;
    name: string;
    rating: number;
    ratingCount: number;
    followers: string[];
    following: string[];
    followerCount: number;
    followingCount: number;
    securityQuestion: string;
    securityAnswer: string;
    bio: string;
    email: string;
    shopName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    pfp: string;
    isDeleted: boolean;
}


export interface IUserData {
    id: number
    username: string
}

export interface IToken {
    token: string
}
