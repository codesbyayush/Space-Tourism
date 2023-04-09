export default async function data() {
    const response = await fetch('../data.json')
    return await response.json()
  }