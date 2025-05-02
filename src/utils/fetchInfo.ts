export const fetchInfo = () => {
    
    const userData = localStorage.getItem("user");
  
    if (!userData) {
      throw new Error("No user found in localStorage");
    }
  
    const parsed = JSON.parse(userData);
  
    return {
      username: parsed.username || "UnknownUser", 
    };
  };
  