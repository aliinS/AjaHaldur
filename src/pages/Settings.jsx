import AppLayout from "../components/elements/AppLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { Save, Upload, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function SettingsTable() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  function fetchUserData() {
    axios
      .get("api/me")
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setAvatarPreview(response.data.avatar_url); // Assuming your API returns avatar_url
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("User data cannot be retrieved");
      });
  }

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast.error("Pilt peab olema väiksem kui 2MB");
        return;
      }

      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function uploadAvatar() {
    if (!avatar) return;

    const formData = new FormData();
    formData.append('avatar', avatar);

    axios
      .post("api/user/avatar", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        toast.success("Profiilipilt edukalt uuendatud");
        fetchUserData();
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("Profiilipildi üleslaadimine ebaõnnestus");
      });
  }

  function deleteAvatar() {
    axios
      .delete("api/user/avatar")
      .then(() => {
        setAvatarPreview(null);
        toast.success("Profiilipilt edukalt kustutatud");
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("Profiilipildi kustutamine ebaõnnestus");
      });
  }

  function updateName() {

    axios
      .post("api/user/update", {
        name: name,
      })
      .then((response) => {
        fetchUserData();
        toast.success("Nimi edukalt uuendatud");
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("User data cannot be retrieved");
      });
  }

  function updateEmail() {

    axios
      .post("api/user/update", {
        email: email,
      })
      .then((response) => {
        fetchUserData();
      })
      .catch((error) => {
        console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        toast.error("User data cannot be retrieved");
      });
  }

  function updatePassword() {

    axios
      .post("api/user/update", {
        password: password,
      })
      .then((response) => {
        setPassword("");
        fetchUserData();
        toast.success("Parool edukalt uuendatud");
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
          <div className="w-full h-fit bg-white rounded p-2 text-black flex flex-col gap-2">
            <h1 className="text-xl">Profiilipilt</h1>
            <div className="flex gap-2 items-center">
              {avatarPreview ? (
                <img
            src={avatarPreview}
            alt="Avatar Preview"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
                />
              ) : (
                <img
            src={`${import.meta.env.VITE_API_URL}api/avatar/${JSON.parse(localStorage.getItem("user")).uuid}/small`}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
                id="avatar-upload"
              />
              <label htmlFor="avatar-upload" className="cursor-pointer">
                <Upload size={24} />
              </label>
              <button
                onClick={uploadAvatar}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Laadi üles
              </button>
              <button
                onClick={deleteAvatar}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                <Trash2 size={24} />
              </button>
            </div>
          </div>

          {/* Name settings */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            updateName();
          }}
          className="w-full h-fit bg-white rounded p-2 text-black flex flex-col gap-2"
        >
          <h1 className="text-xl">Muuda nime</h1>
          <div className="flex gap-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="flex w-full lg:w-96 rounded h-fit bg-gray-200 p-2"
            />
            <button
              type="submit"
              className="max-w-xl bg-gray-200 py-2 px-2 rounded"
            >
              <Save size={24} />
            </button>
          </div>
        </form>

        {/* Email settings */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            updateEmail();
          }}
          className="w-full h-fit bg-white rounded p-2 text-black flex flex-col gap-2"
        >
          <h1 className="text-xl">Muuda E-maili</h1>
          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="flex w-full lg:w-96 rounded h-fit bg-gray-200 p-2"
            />
            <button
              type="submit"
              className="max-w-xl bg-gray-200 py-2 px-2 rounded"
            >
              <Save size={24} />
            </button>
          </div>
        </form>

        {/* Password settings */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            updatePassword();
          }}
          className="w-full h-fit bg-white rounded p-2 text-black flex flex-col gap-2"
        >
          <h1 className="text-xl">Muuda parooli</h1>
          <div className="flex gap-2">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="flex w-full lg:w-96 rounded h-fit bg-gray-200 p-2"
            />
            <button
              type="submit"
              className="max-w-xl bg-gray-200 py-2 px-2 rounded"
            >
              <Save size={24} />
            </button>
          </div>
        </form>

        {/* Delete account section */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (window.confirm("Kas olete kindel, et soovite oma konto kustutada? See toiming on pöördumatu.")) {
              axios
                .delete("api/user/delete")
                .then(() => {
                  toast.success("Konto on edukalt kustutatud");
                  setTimeout(() => {
                    localStorage.removeItem("user");
                    window.location.href = "/";
                  }, 3000);
                })
                .catch((error) => {
                  console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
                  toast.error("Konto kustutamine ebaõnnestus");
                });
            }
          }}
          className="w-full h-fit bg-white rounded p-2 text-black flex flex-col gap-2"
        >
          <h1 className="text-xl">Kustuta konto</h1>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Kustuta konto
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Hoiatus: Konto kustutamine on pöördumatu toiming. Kõik teie andmed kustutatakse jäädavalt.
          </p>
        </form>

        <div className="p-4 w-full bg-white rounded-md text-black">
          <h2 className="text-lg font-semibold mb-2">Juriidiline info</h2>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="/privacy"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privaatsuspoliitika
            </a>
            <a
              href="/terms"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kasutustingimused
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
