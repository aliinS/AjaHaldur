import AppLayout from "../components/elements/AppLayout";

export default function SettingsTable() {

  return (
    <AppLayout>
      <div className="text-[#c2c2c2] p-6 flex flex-col gap-2">
        <div className="p-2 w-full bg-white rounded-md flex gap-4 items-center text-black">
          <h1 className="font-bold text-2xl">SEADED</h1>
          <p className="text-black/75">
            Muuda oma seaded siin.
          </p>
        </div>
        <p className="text-red-500">NB! This is a work in progress.</p>
      </div>
    </AppLayout>
  );
}
