"use client";
import { useState } from "react";
import { Header } from "@/components/header/header";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Alex Morgan",
    role: "Interior Designer",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate about creating warm, functional living spaces with modern sensibilities.",
  });

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(profile);
  const [message, setMessage] = useState<string | null>(null);

  const startEdit = () => {
    setForm(profile);
    setEditing(true);
    setMessage(null);
  };

  const cancelEdit = () => {
    setEditing(false);
    setForm(profile);
    setMessage(null);
  };

  const saveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(form);
    setEditing(false);
    setMessage("Profile saved");
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between h-16 px-6">
          <nav className="flex items-center space-x-2 text-gray-500">
            <span className="text-gray-500 font-medium">Account</span>
            <span className="text-gray-400">/</span>
            <span className="text-amber-700 font-medium">Profile</span>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-gray-600">Settings</button>
          </div>
        </div>
      </header>

      <main className="p-6 h-[calc(100vh-4rem)] overflow-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {/* Left column - profile card */}
          <aside className="col-span-1 bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bf5fe8dc00b506410e9646a00ebbe8973ae23ce3?width=160"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="mt-4 text-lg font-semibold text-gray-900">{profile.name}</h2>
              <p className="text-sm text-gray-500">{profile.role}</p>

              <div className="mt-4 w-full">
                <button
                  onClick={startEdit}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-amber-700 rounded-md hover:bg-amber-800"
                >
                  Edit Profile
                </button>
              </div>

              <div className="mt-6 w-full text-left text-sm text-gray-600">
                <p><span className="font-medium text-gray-800">Email: </span>{profile.email}</p>
                <p className="mt-1"><span className="font-medium text-gray-800">Phone: </span>{profile.phone}</p>
              </div>
            </div>
          </aside>

          {/* Right column - details and security */}
          <section className="col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Profile Details</h3>
                <div className="text-sm text-green-600">{message}</div>
              </div>

              {!editing ? (
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">About</h4>
                    <p className="mt-2 text-sm text-gray-600">{profile.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Contact</h4>
                    <p className="mt-2 text-sm text-gray-600">{profile.email}</p>
                    <p className="mt-1 text-sm text-gray-600">{profile.phone}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={saveProfile} className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full name</label>
                    <input
                      className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    <label className="block text-sm font-medium text-gray-700 mt-4">Role</label>
                    <input
                      className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                    />

                    <label className="block text-sm font-medium text-gray-700 mt-4">Bio</label>
                    <textarea
                      className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      rows={4}
                      value={form.bio}
                      onChange={(e) => setForm({ ...form, bio: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <label className="block text-sm font-medium text-gray-700 mt-4">Phone</label>
                    <input
                      className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />

                    <div className="mt-6 flex items-center space-x-3">
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-amber-700 rounded-md hover:bg-amber-800"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Security</h3>
              <div className="mt-4 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Password</h4>
                  <p className="mt-2 text-sm text-gray-600">Last changed: 2024-04-02</p>
                  <div className="mt-4">
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">Change password</button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700">Two-Factor</h4>
                  <p className="mt-2 text-sm text-gray-600">Two-factor authentication is not enabled.</p>
                  <div className="mt-4">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-amber-700 rounded-md hover:bg-amber-800">Enable 2FA</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Danger Zone</h3>
                <p className="text-sm text-gray-600 mt-1">Delete your account and all associated data. This action is irreversible.</p>
              </div>

              <div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">Delete account</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
