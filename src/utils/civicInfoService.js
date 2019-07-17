const BASE_URL = 'https://www.googleapis.com/civicinfo/v2/elections';

function getAllElections() {
    return fetch(`${BASE_URL}`, {mode: "cors"})
        .then(res => res.json());
}
