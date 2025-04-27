import { useEffect, useRef, useState } from "react"
import MenuPopup from "./MenuPopup"
import { animateRotation } from "../utils/gsapAnimations"

function Header() {
    const [ menuOpen, setMenuOpen ] = useState(false)
    const menuImgRef = useRef(null)

    useEffect(() => {
        if (menuOpen) {
            animateRotation(menuImgRef.current, 45)
        } else {
            animateRotation(menuImgRef.current, 360)
        }
    }, [menuOpen])

    return (
        <>
            <div className='header section'>
                <div>
                    <img 
                        src="/logo-text-horizontal.png" 
                        alt="OSIS SMK TRI RATNA" 
                        className="w-40 lg:w-60"
                    />
                </div>

                <div className="hidden md:flex gap-4">
                    <a href="#tentang">Tentang</a>
                    <a href="#proker">Proker</a>
                    <a href="#anggota">Anggota</a>
                    <a href="#kontak">Kontak</a>
                </div>

                <div 
                    className="md:hidden cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <img 
                        src="/menu.png" 
                        alt="Menu" 
                        ref={menuImgRef} 
                    />
                </div>
            </div>

            {
                menuOpen && <MenuPopup setMenuOpen={setMenuOpen} />
            }
        </>
    )
}

export default Header
