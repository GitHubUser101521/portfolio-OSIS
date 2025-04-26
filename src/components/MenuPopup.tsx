type MenuPopupType = {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function MenuPopup({ setMenuOpen }: MenuPopupType) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div 
                className='black-background'
                onClick={() => setMenuOpen(false)}
            >
                
            </div>

            <div className="menu-open">
                <p className="text-3xl font-bold">Go to</p>

                <div 
                    className="flex flex-col gap-2"
                    onClick={() => setMenuOpen(false)}
                >
                    <a href="#tentang">Tentang</a>
                    <a href="#proker">Proker</a>
                    <a href="#anggota">Anggota</a>
                    <a href="#kontak">Kontak</a>
                </div>
            </div>
        </div>
    )
}

export default MenuPopup
