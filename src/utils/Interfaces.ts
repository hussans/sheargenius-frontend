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
    id: number;
    userId: number;
    publisherName: string;
    date: string;
    caption: string;
    image: string;
    likes: number;
    category: string;
    isPublished: boolean;
    isDeleted: boolean;
    comments: ICommentInfo[]
}

export interface ICommentInfo{
    id: number
    username: string
    comment: string
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

export interface IHaircutInterface {
    id: number;
    name: string;
    description: string;
    photo1: string;
    photo2: string;
    video: { src: string };
    howTo: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
  }