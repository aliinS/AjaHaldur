import AppLayout from "../components/elements/AppLayout";

export default function SettingsTable() {

  return (
    <AppLayout>
      <div className="text-[#c2c2c2] p-6">
        <h1 className="font-bold text-2xl">SEADED</h1>
        <p className="text-gray-300/50">
          Change your settings here.
        </p>
        <p className="text-red-500">NB! This is a work in progress.</p>
      </div>
    </AppLayout>
  );
}
