async function fetchPosts() {
  const posts = await fetch('http://localhost:3000/posts', {
    method: 'GET',
    mode: 'cors',
  });
  
  return posts
};

export {fetchPosts};