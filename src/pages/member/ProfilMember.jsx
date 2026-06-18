export default function ProfilMember() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Profil Saya
      </h1>

      <div className="bg-white rounded-2xl p-6 mt-6 shadow-sm">
        <p>
          Nama : {user?.fullname}
        </p>

        <p>
          Email : {user?.email}
        </p>

        <p>
          Role : {user?.role}
        </p>
      </div>
    </div>
  );
}