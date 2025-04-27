import { useEffect } from "react"
import { groupStagger } from "../utils/gsapAnimations"

function Kontak() {

    useEffect(() => {
        const kontak = document.querySelectorAll('.kontak')

        groupStagger(kontak, 0.2)
    }, [])

    return (
        <div id="kontak" className='section h-screen'>
            <hr className="border-t-2 border-gray-600" />

            <div className="flex flex-col lg:flex-row gap-20 lg:gap-40 mt-24">
                <div>
                    <h2 className="font-bold text-gray-800 text-4xl mb-4">Kontak Kami</h2>
                    <p>
                        Punya pertanyaan atau saran untuk kegiatan OSIS? 
                        <br />
                        Sampaikan pada kami!
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Email */}
                    <div className="kontak">
                        <div>
                            <img src="/email.png" className="w-12 aspect-square"/>
                        </div>

                        <div className="flex flex-col">
                            <span>E-mail</span>
                            <a href="mailto:osissmktriratna@gmail.com" className="opacity-75">osissmktriratna@gmail.com</a>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="kontak">
                        <div>
                            <img src="/website.png" className="w-12 aspect-square"/>
                        </div>

                        <div className="flex flex-col">
                            <span>School Website</span>
                            <a href="https://www.triratna.sch.id/" target="_blank" className="opacity-75">triratna.sch.id</a>
                        </div>
                    </div>

                    {/* Instagram */}
                    <div className="kontak">
                        <div>
                            <img src="/instagram.png" className="w-12 aspect-square"/>
                        </div>

                        <div className="flex flex-col">
                            <span>Instagram</span>
                            <a href="https://www.instagram.com/osis_smktriratna/" target="_blank" className="opacity-75">osis_smktriratna</a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="kontak">
                        <div>
                            <img src="/address.png" className="w-12 aspect-square"/>
                        </div>

                        <div className="flex flex-col">
                            <span>School Address</span>
                            <a className="opacity-75 break-words">
                                Jl. Talib I No.35-37, Tamansari, 
                                <br />
                                Jakarta Barat, 11140 - Indonesia
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontak
