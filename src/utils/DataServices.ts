import {
  HaircutInterface,
  INewUser,
  IPostItems,
  IUserInfo,
  IUserProfileInfo,
} from "./Interfaces";

const url = "https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/";
// this variable will be used in our getPost by user id fetch when we set them up

let userData: IUserProfileInfo;
let profileData: INewUser;

// Create account fetch
export const createAccount = async (user: INewUser) => {
  const res = await fetch(`${url}User/CreateUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  // if our response is not ok, we will run this block
  if (!res.ok) {
    const data = await res.json();
    const message = data.message;
    console.log(message);
    return data.success;
  }

  const data = await res.json();
  return data.success;
};

// Edit account fetch
export const editAccount = async (newUser: IUserProfileInfo) => {
  const res = await fetch(`${url}User/EditAccount`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  // if our response is not ok, we will run this block
  if (!res.ok) {
    const data = await res.json();
    const message = data.message;
    console.log(message);
    return data.success;
  }

  const data = await res.json();
  return data.success;
};

//Login fetch
export const login = async (user: IUserInfo) => {
  const res = await fetch(`${url}User/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    const data = await res.json();
    const message = data.message;
    console.log(message);
    return null;
  }

  const data = await res.json();
  return data;
};
//get Logged in data fetch
export const getLoggedInUserData = async (username: string) => {
  const res = await fetch(`${url}/User/GetUserInfoByUsername/${username}`);
  if (!res.ok) {
    const data = await res.json();
    const message = data.message;
    console.log(message);
    return null;
  }
  userData = await res.json();
  //we are going to use this data inside of a variable we will make a separate function for implementation
  return userData;
};

//get Profile Info in data fetch
export const getProfileUserData = async (username: string) => {
  try{
  const res = await fetch(`${url}/User/GetProfileInfoByUsername/${username.toLowerCase()}`);

  if (!res.ok) {
    const data = await res.json();
    const message = data.message;
    console.error(message);
    return null;
  }
  profileData = await res.json();
  // console.log(profileData)
  //we are going to use this data inside of a variable we will make a separate function for implementation
  return profileData;
}
catch(error) {
  console.error("Error fetching profile user data:", error as Error); // Handle network errors
    return null;
}
};

//get the user's data
export const loggedInData = () => {
  return userData;
};

//we are checking if the token is in our storage (see if were logged in)
export const checkToken = () => {
  let result = false;

  if (typeof window !== "undefined" ) {
    const LSData = sessionStorage.getItem("AccountInfo");
    if (LSData != null) result = true;
  }
  return result;
};

//format the days date when creating new User
export function getFormattedDate(): string {
  const today = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  return `${month} ${day}, ${year}`;
}

// --------------POST ENDPOINTS----------------

export const getAllPosts = async (token: string) => {
  const res = await fetch(`${url}Post/GetAllPosts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    const message = errorData.message;
    console.log(message);
    return [];
  }

  const data = await res.json();
  return data;
};

export const getPostItemsByUserId = async (userId: number, token: string) => {
  const res = await fetch(`${url}Post/GetPostsByUserId/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    const message = errorData.message;
    console.log(message);
    return [];
  }

  const data = await res.json();
  return data;
};

export const addPostItem = async (post: IPostItems, token: string) => {
  const res = await fetch(`${url}Post/AddPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(post),
  });
  if (!res.ok) {
    const errorData = await res.json();
    const message = errorData.message;
    console.log(message);
    return false;
  }
  const data = await res.json();
  //returns true and successfully added post to backend
  return data.success;
};

export const updatePostItem = async (post: IPostItems, token: string) => {
  const res = await fetch(`${url}Post/EditPost`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(post),
  });
  if (!res.ok) {
    const errorData = await res.json();
    const message = errorData.message;
    console.log(message);
    return false;
  }
  const data = await res.json();
  //returns true and successfully added post to backend
  return data.success;
};

export const fetchHaircut = async (cut: string) => {
  const response = await fetch("/Haircuts.json");
  const data = await response.json();

  const foundHaircut: HaircutInterface = data.haircuts.find(
    (h: HaircutInterface) => h.name.toLowerCase() === cut.toLowerCase()
  );
  return foundHaircut;
};

let category:string;
export const setCategory = (cat: string) => {
  category = cat;
  localStorage.setItem("searchQuery",category)
  return category;
};
export const getCategory = () => {
  return localStorage.getItem("searchQuery") as string
};
