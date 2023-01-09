// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return { title: data.at(-1).title, body: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// lastPost.then(last => console.log(last)); 

const last = await lastPost;
console.log('Using Await Method.....');
console.log(last);