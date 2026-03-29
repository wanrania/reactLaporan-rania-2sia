export default function Biodata() {
  return (
    <div>
      <h1>Wan Rania Salma Faizaty</h1>
      <img src="./img/profile.jpg" width="100%" alt="Profile" />
      <UserCard
        nama="Wan Rania Salma Faizaty"
        nim="2457301151"
        alamat="Jalan Air Dingin No. 123, Pekanbaru"
      />
      <Profile />
      <TanggalLahir />
      <KeahlianKu />
      <PendidikanText />
      <KontakCard label="Telepon" value="082286667590" />
    </div>
  );
}

function TanggalLahir() {
  return <small className="card">Pekanbaru, 24 Desember 2005</small>;
}

function Profile() {
  return (
    <div>
      <hr />
      <p>
        Saya adalah seorang mahasiswa politeknik caltex riau <br />
        dengan jurusan sistem informasi semester 4
      </p>
    </div>
  );
}

function KeahlianKu() {
  const text = "UI/UX Designer";
  const text2 = "Data Analyst";
  const text3 = "Graphic Designer";
  return (
    <div>
      <hr />
      <h3>Keahlian</h3>
      <p>{text.toUpperCase()}</p>
      <p>{text2.toUpperCase()}</p>
      <p>{text3.toUpperCase()}</p>
    </div>
  );
}

function PendidikanText() {
  const sd = "Indonesian Creative School";
  const smp = "SMPN 1 Pekanbaru";
  const sma = "SMAN 1 Pekanbaru";
  const kuliah = "Politeknik Caltex Riau";
  return (
    <div>
      <hr />
      <h3>Riwayat Pendidikan</h3>
      <p>{sd} (2013-2019)</p>
      <p>{smp} (2019-2021)</p>
      <p>{sma} (2021-2024)</p>
      <p>{kuliah} (2024-Sekarang)</p>
    </div>
  );
}

function UserCard(props) {
  return (
    <div>
      <p>Nama: {props.nama}</p>
      <p>NIM: {props.nim}</p>
      <p>Alamat: {props.alamat}</p>
    </div>
  );
}

function KontakCard(props) {
  return (
    <div>
      <hr />
      <h3>Contact Me!</h3>
      <p>
        <b>{props.label}:</b> {props.value}
      </p>
    </div>
  );
}
