import axios from "axios";

const url = "http://localhost:5000/post";

const fetchPosts = () => axios.get(url);
