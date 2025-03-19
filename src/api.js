import axios from 'axios'

export async function getPosts() {
  try {
    let response = ''

    await axios.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
      response = res.data
    })

    return response
  } catch (error) {
    console.error('Error on try get posts:', error)
  }
}
