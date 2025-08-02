// Given Promise-based code:
//Ex1
async function getUserById(userId) {
  try {
    const response = await $.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

//Ex2
// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  try{
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      if(!userResponse.ok){
        throw new Error("User not found");
      }
      const user = await userResponse.json()
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      if(!postsResponse.ok){
        throw new Error("User doesn't have any posts");
      }
      const posts = postsResponse.json();

      return {user,posts};
  }catch(error){
        console.error("Error geting user and paosts: ",error.message)
  }
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
}


//Ex3
 async 
