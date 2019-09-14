import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4613a83512d24e98bcc70740e8e1c98a09e907b4dbde4a364f02623453ea1cab'
    }
})