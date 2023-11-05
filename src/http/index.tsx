
export const getMenu = async () =>{
    const response = await fetch('https://api.sampleapis.com/coffee/iced')
    const data = await response.json()
    return data
}
