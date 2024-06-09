import axios from "axios";
import { toast } from "sonner";

export function fetchPersonalTables(page = 1, amount = 4) {
    axios.post(`api/tables/personal?page=${page}&amount=${amount}`)
        .then(response => {
            return response.data.data
        })
        .catch(error => {
            console.log('%cERROR: ', 'color: tomato; font-weight: bold;', error)
            toast.error('User data cannot be retrieved')
        })
}