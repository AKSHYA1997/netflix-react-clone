import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// so whenever we have instance.get('/foobar'), teh request url will become
// https://api.themoviedb.org/3/foobar

export default instance;
