import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


export function fetch() {
    axios.get('api/me')
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data))
            // TODO: Possibly need to rework it at some point
            location.reload();
        })
        .catch(error => {
            console.log('%cERROR: ', 'color: tomato; font-weight: bold;', error)
            toast.error('User data cannot be retrieved')
        })
}

export function login(email, password) {
    // console.log(`${email} - ${password}`)
    const formDataObject = new FormData();

    let promise = null;

    formDataObject.append("email", email);
    formDataObject.append("password", password);

    axios.get("/sanctum/csrf-cookie").then(() => {
        promise = axios
            .post("api/login", formDataObject, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => {
                // console.log(response.data.token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
                setAuthToken(response.data.token)
                // console.log(axios.defaults.headers.common['Authorization']);
                fetch()
            })
            .catch((error) => {
                console.log(error);
                toast.error(`Error logging in to user with email '${email}'`);
            });

        toast.promise(promise, {
            loading: "Loading...",
            success: () => {
                return `User logged in succesfully`;
            },
            error: "Error",
        });
    });
}

export function register(name, email, password) {
    // console.log(`${email} - ${password}`)
    const formDataObject = new FormData();

    let promise = null;

    formDataObject.append("name", name);
    formDataObject.append("email", email);
    formDataObject.append("password", password);

    axios.get("/sanctum/csrf-cookie").then(() => {
        promise = axios
            .post("api/register", formDataObject, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => {
                // console.log(response.data);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
                setAuthToken(response.data.token)
                // console.log(axios.defaults.headers.common['Authorization']);
                fetch()
                login(email, password)
            })
            .catch((error) => {
                console.log(error);
                toast.error(`Error logging in to user with email '${email}'`);
            });

        toast.promise(promise, {
            loading: "Loading...",
            success: () => {
                return `User registered in succesfully`;
            },
            error: "Error",
        });
    });
}

export function logout() {
    // const navigate = useNavigate();

    axios.get("/sanctum/csrf-cookie").then(() => {
        axios.post('api/logout', {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(() => {
                localStorage.removeItem('user');
                localStorage.removeItem('token');

                axios.defaults.headers.common['Authorization'] = null
                setAuthToken()

                // TODO: If router exists, the replace it with route to homepage
                // window.location.replace('/');

                // navigate("/");
                window.location.replace('/');
            })
            .catch(error => {
                // TODO: Error handling
                console.log('%cERROR: ', 'color: tomato; font-weight: bold;', error)

                localStorage.removeItem('user');

                axios.defaults.headers.common['Authorization'] = null

                // navigate("/");
                window.location.replace('/');
            })
    });
}

export function setAuthToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        localStorage.setItem('token', token); // Store the token in local storage
    } else {
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('token'); // Remove the token from local storage
    }
}