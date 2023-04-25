import axios from 'axios'

const API_URL = 'https://mern-app-proyect-production.up.railway.app'

export const getPostsRequests = async () => await axios.get(`${API_URL}/posts`)

export const createPostRequest = async (post) => {
    const form = new FormData()

    for (let key in post) {
        form.append(key, post[key])
    }

    return await axios.post(`${API_URL}/posts`, form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}


export const deletePostRequest = async (id) => await axios.delete('/posts/'+ id)

export const getPostRequest = async id => await axios.get('/posts/'+ id)

export const updatePostRequest = async (id, newFields) => await axios.put(`/posts/${id}`, newFields)