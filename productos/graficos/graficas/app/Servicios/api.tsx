
import axios from "axios";
const API_URL="http://localhost:5000"

export const fetchSumaSalario = async () => {
    const response= await axios.get(`${API_URL}/sum-salary-by-depto`)
   return response.data

}

export const fetchCantidadJobs = async () => {
    const response= await axios.get(`${API_URL}/count-by-deparment-job`)
   return response.data

}


export const fetchProductsByCurrency = async () => {
    const response = await axios.get(`${API_URL}/count-products-by-currency`)
    return response.data
}

export const fetchTotalProductsByType = async () => {
    const response = await axios.get(`${API_URL}/total-products-by-type`)
    return response.data
}

export const fetchProductsSummaryByLine = async () => {
    const response = await axios.get(`${API_URL}/products-summary-by-line`)
    return response.data
}