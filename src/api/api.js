const baseURL = 'https://www.reddit.com';

const getPosts = async () => {
const posts = await fetch(`${baseURL}/subbredit.json`);
const postsJson = await posts.json();
return postsJson.data.children.map((post) => post.data);
 }; 

 export default getPosts