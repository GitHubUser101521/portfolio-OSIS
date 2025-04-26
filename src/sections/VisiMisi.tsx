
function VisiMisi() {
    const misi = [
        "Membuat hubungan dan membangun citra positif yang berintegritas antara sekolah dan masyarakat",
        "Mengoptimalkan Kolaborasi dan Sinergi dalam Pengembangan Potensi Siswa",
        "Menciptakan Lingkungan yang Kompetitif dan Berprestasi",
        "Mengadakan Event Inovatif yang Menarik dan Interaktif",
        "Mengembangkan Kreativitas dan Keterampilan Siswa sehingga menjadi Jembatan bagi Siswa untuk Berprestasi dan Berkarya",
        "Melanjutkan serta mengembangkan program-program yang ada pada masa kepengurusan OSIS sebelumnya menjadi lebih baik lagi"
    ]

    return (
        <div id="tentang" className="section">
            <hr className="border-t-2 border-gray-600" />
            
            <h2 className="sub-title">Visi Kami</h2>

            <p className="italic text-center w-4/5 mx-auto">
                "Menjadikan organisasi sekolah sebagai wadah dan dasar pengembangan siswa yang kreatif, aktif, berprestasi dan berintegritas, sehingga dapat membawa nama sekolah menjadi lebih dikenal di mata masyarakat."
            </p>

            <h2 className="sub-title">Misi Kami</h2>

            <div className="lg:w-4/5 flex flex-col gap-4 mx-auto">
            {
                misi.map((m, index) => (
                    <div className="misi" key={index}>
                        <div className="bg-orange w-12 h-12 rounded-full flex justify-center items-center">
                            <span className="text-white font-bold">{ index + 1 }</span>
                        </div>

                        <p className="break-words lg:w-9/10 text-center lg:text-left">{ m }</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default VisiMisi
