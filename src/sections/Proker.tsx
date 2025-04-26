
function Proker() {
    const proker = [
        {
            "title": "Pembentukan Tim Jurnalistik",
            "description": "Membentuk tim jurnalistik untuk mengelola konten media sosial OSIS dan mading sekolah."
        },
        {
            "title": "Pameran Expo Jurusan",
            "description": "Mengadakan pameran yang menampilkan keunggulan dan potensi dari setiap jurusan di SMK Tri Ratna."
        },
        {
            "title": "Business Collaboration",
            "description": "Membangun kerjasama dengan dunia usaha atau industri terkait untuk memberikan kesempatan belajar, praktik kerja, atau bahkan peluang karir bagi siswa SMK Tri Ratna."
        },
        {
            "title": "Portofolio Digital",
            "description": "Mendorong dan memfasilitasi siswa dalam membuat portofolio digital yang menampilkan karya, keterampilan, dan prestasi mereka."
        },
        {
            "title": "Pembentukan Club Sport/Esport",
            "description": "Membentuk wadah bagi siswa yang memiliki minat dan bakat di bidang olahraga dan e-sport."
        },
        {
            "title": "Pekan Olahraga Sport/Esport",
            "description": "Mengadakan pekan olahraga dan e-sport sekolah yang meriah dan kompetitif."
        },
        {
            "title": "Memfasilitasi Turnamen Antar Sekolah",
            "description": "Memfasilitasi partisipasi siswa dalam turnamen atau cup olahraga dan e-sport antar sekolah."
        },
        {
            "title": "Melanjutkan Program Menfess",
            "description": "Meneruskan dan mengembangkan program 'Menfess' agar tetap relevan dan memberikan manfaat positif bagi siswa."
        },
        {
            "title": "Penghargaan Siswa Tahunan",
            "description": "Sebagai bentuk apresiasi terhadap prestasi akademik maupun non-akademik siswa, memotivasi siswa lain untuk berprestasi."
        }
    ]
    return (
        <div id="proker" className="section">
            <hr className="border-t-2 border-gray-600" />

            <h2 className="sub-title">Projek Kerja</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 lg:px-20 gap-8 lg:gap-20 mt-30">
            {
                proker.map((p, index) => (
                    <div className="flex flex-col gap-12" key={index}>
                        <div>
                            <img 
                                src={`0${index}.png`} 
                                className="w-1/2 mx-auto"
                            />
                        </div>

                        <div className="flex flex-col gap-8">
                            <p className="font-bold text-center text-xl">{ p.title }</p>
                            <p className="text-xs text-justify">{ p.description }</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Proker
