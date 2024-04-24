import AppLayout from "../components/elements/AppLayout";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SettingsTable() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  function fetchUserData() {
    axios
      .get("api/me")
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("User data cannot be retrieved");
      });
  }

  function updateName() {
    console.log(userData);

    axios
      .post("api/user/update", {
        name: name,
      })
      .then((response) => {
        fetchUserData();
        console.log(response.data);
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("User data cannot be retrieved");
      });
  }

  function updateEmail() {
    console.log(userData);

    axios
      .post("api/user/update", {
        email: email,
      })
      .then((response) => {
        fetchUserData();
        console.log(response.data);
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("User data cannot be retrieved");
      });
  }

  function updatePassword() {
    console.log(userData);

    axios
      .post("api/user/update", {
        password: password,
      })
      .then((response) => {
        setPassword("");
        fetchUserData();
        console.log(response.data);
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("User data cannot be retrieved");
      });
  }

  return (
    <AppLayout>
      <div className="text-[#c2c2c2] p-6 flex flex-col gap-4">
        <div className="p-2 w-full bg-white rounded-md flex gap-4 items-center text-black">
          <h1 className="font-bold text-2xl">SEADED</h1>
          <p className="text-black/75">Muuda oma seaded siin.</p>
        </div>
        <div className="flex flex-col gap-2">
          {/* Name settings */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              updateName();
            }}
            className="w-full h-fit bg-white rounded p-2 text-black flex flex-col gap-2"
          >
            <h1 className="text-xl">Update name</h1>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="max-w-xl p-2 bg-gray-200 rounded-sm"
            />
            <button
              type="submit"
              className="max-w-xl bg-gray-200 p-2 rounded-sm"
            >
              Save
            </button>
          </form>

          {/* Email settings */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              updateEmail();
            }}
            className="w-full h-fit bg-white rounded p-2 text-black flex flex-col gap-2"
          >
            <h1 className="text-xl">Update email</h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="max-w-xl p-2 bg-gray-200 rounded-sm"
            />
            <button
              type="submit"
              className="max-w-xl bg-gray-200 p-2 rounded-sm"
            >
              Save
            </button>
          </form>

          {/* Password settings */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              updatePassword();
            }}
            className="w-full h-fit bg-white rounded p-2 text-black flex flex-col gap-2"
          >
            <h1 className="text-xl">Change password</h1>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="max-w-xl p-2 bg-gray-200 rounded-sm"
            />
            <button
              type="submit"
              className="max-w-xl bg-gray-200 p-2 rounded-sm"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
