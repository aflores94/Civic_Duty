async function printData() {
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    try {
        users = await fetch(endpoint).then(res => res.json());
        console.log(users);
    } catch (err) {
        console.log(err);
    }
}