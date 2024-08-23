const fs = require('fs')
const path = require('path')


const dataFilePath = path.join(__dirname, '../../../data/data.json')


function readData() {
    const data = fs.readFileSync(dataFilePath)
    return JSON.parse(data)
}


function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2))
}


const getUsers = () => {
    return readData()
}


const addUser = (user) => {
    const data = readData()
    data.push(user)
    writeData(data)
    return user
}


const updateUser = (id, updatedData) => {
    const data = readData()
    const index = data.findIndex(user => user.id === id)

    if (index === -1) {
        throw new Error('User not found')
    }


    const updatedUser = { ...data[index], ...updatedData }
    data[index] = updatedUser
    writeData(data)

    return updatedUser
}


const deleteUser = (id) => {
    const data = readData()
    const filteredData = data.filter(user => user.id !== id)

    if (data.length === filteredData.length) {
        throw new Error('User not found')
    }

    writeData(filteredData)
}

module.exports = { getUsers, addUser, updateUser, deleteUser }
