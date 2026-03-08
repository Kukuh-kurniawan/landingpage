import Dataimage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 rounded-2xl w-fit p-4">
            <img
              src={Dataimage.HeroImage}
              alt="Data image"
              className="w-10 rounded-md"
            />
            <q className="text-xs/loose capitalize pt-5 w-full">
              disiplin tidak mengekang mu,tetapi memberimu kebebasan
            </q>
          </div>
          <h1 className="text-md/loose font-bold mb-6 pt-10 text-[#ff0000] uppercase ">
            welcome to my landing page
          </h1>

          <div className="flex items-center sm:gap-4 gap-3 p-1 text-[#ffffff] ">
            <a
              href="#"
              className="bg-[#fc1313] p-3 text-xs hover:scale-105 hover:bg-[#FFFF00] hover:text-black rounded-md"
            >
              Donwload CV
            </a>
            <a
              href=""
              className="bg-[#fc1313] p-3 text-xs hover:scale-105 hover:bg-[#FFFF00] hover:text-black rounded-md"
            >
              Lihat proyek
            </a>
          </div>
        </div>
        <img
          src={Dataimage.HeroImage}
          alt="data image"
          className="w-75 md:ml-auto rounded-2xl"
        />
      </div>
      {/* tool */}
      <div className="about text-sm/loose xl:w-2/3 lg:3/4 w-full mt-32 pt-10 mx-auto p-7 rounded-lg border">
        <div>
          <img
            src={Dataimage.HeroImage}
            alt="Heroimage"
            className="w-12 mb-5 md:hidden"
          />
          <p className="loose mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quae
            quaerat ut facere repellat fugit provident laudantium, quis a
            aliquid animi saepe omnis soluta? Perferendis.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={Dataimage.HeroImage}
              alt="Hero image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-3xl mb-1">
                  24
                  <span className="text-red-800">+</span>
                </h1>
                <p>Proyek selesai</p>
              </div>
              <div>
                <h1 className="text-3xl mb-1">
                  1<span className="text-red-800">+</span>
                </h1>
                <p>Tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32">
        <div className="text-center">
          <h1 className="text-base font-bold mb-4 capitalize text-white ">
            tools yang di pakai:
          </h1>
          <p className="w-full text-sm/loose opacity-50 capitalize">
            berikut ini adalah tools yang saya gunakan untuk pembuatan web dan
            design.
          </p>
        </div>

        <div className="tools-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border group "
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="tools"
                className="w-14 p-1 bg-zinc-800 group-hover:bg-zinc-900"
              />
              <div>
                <h4 className="font-bold text-xs mb-1">{tool.nama}</h4>
                <p className="opacity-50 text-xs">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* tool */}
      {/* proyek */}
      <div className="proyek mt-32 py-10 capitalize">
        <h1 className="text-base text-center font-bold mb-2 text-white">
          proyek
        </h1>
        <p className="text-sm/loose opacity-50 text-center mb-5">
          berikut ini bebrapa proyek yang saya buat
        </p>
        <div className="proyek-box gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="bg-zinc-500 rounded-md p-4">
              <img src={proyek.gambar} alt="proyek Gambar" />
              <div>
                <h1 className="text-base text-[#fc1313] text-center font-bold my-4">
                  {proyek.nama}
                </h1>
                <p className="text-sm/loose mb-4 opacity-50 bg-white p-2 rounded-md">
                  {proyek.desk}
                </p>
                <div className="flex flex-wrap gap-2 text-base">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 text-[#ffff00] rounded-md bg-zinc-500 border text-xs opacity-70"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="text-center mt-8 text-base  text-white px-2">
                  <a className="bg-[#fc1313] rounded-md p-2 " href="#">
                    lihat website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* contact */}
      <div className="mt-32 text-center font-bold text-white capitalize p-0 sm:p-10 ">
        <h1 className="text-2xl mb-2 font-bold text-center">contact</h1>
        <p className="text-xs/loose text-center opacity-50 mb-3">
          mari terhubung dengan saya
        </p>
        <form
          // masukan emali
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="bg-zinc-800 p-10 mx-auto rounded-md sm:w-fit w-full "
          autoComplete="off"
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Nama lengkap</label>
            <input
              className="bg-zinc-500 border rounded-md text-xs/loose"
              type="text"
              name="nama"
              placeholder="masukan nama..."
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label className="font-semibold mt-2">Email</label>
            <input
              className="bg-zinc-500 border rounded-md text-xs/loose"
              type="email"
              name="email"
              placeholder="masukan email..."
              required
            />
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="pesan" className="font-semibold mt-2">
              Pesan
            </label>
            <textarea
              className="border rounded-md text-xs/loose bg-zinc-500"
              name="pesan"
              id="pesan"
              cols={45}
              rows={7}
              placeholder="masukan pesan..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="my-3 bg-[#fc1313] p-1 rounded-md hover:bg-white hover:text-[#fc1313] w-full cursor-pointer"
            >
              Kirim pesan
            </button>
          </div>
        </form>
      </div>
      {/* contact */}
    </>
  );
}

export default App;
