export interface UserProfileInfo{
    Id:string;
    Username:string;
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

export interface CreateUserInfo{
    Name:string;
    Username:string;
    Email:string;
    Password:string;
    AccountType: string;
    Experience: string
}