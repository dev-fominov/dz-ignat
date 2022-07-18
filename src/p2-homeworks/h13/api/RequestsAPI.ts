import axios from "axios"

const instance = axios.create({
	baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

// type RequestsType = {
// 	success: boolean
// }

export const requestsAPI = {
	requests(success: boolean) {
		return instance.post(`auth/test`, { success })
	},
}