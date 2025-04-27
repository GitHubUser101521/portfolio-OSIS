import { useEffect } from "react"
import { groupStagger } from "../utils/gsapAnimations"

function Landing() {
    useEffect(() => {
        const group = document.querySelectorAll('.landing-group')

        groupStagger(group, 0.2)
    }, [])
    return (
        <div className="section">
            <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between items-center lg:h-[70vh] mt-20">
                <div className="flex flex-col gap-8">
                    <h2 className="font-bold text-gray-800 landing-group">Periode 2024/2025</h2>
                    <h1 className="title landing-group">
                        OSIS SMK
                        <br />
                        TRI RATNA
                    </h1>
                    <p className="lg:w-2/3 landing-group">
                        OSIS SMK Tri Ratna mendukung murid-murid untuk aktif mengembangkan dan memperlihatkan bakat mereka.
                    </p>
                </div>

                <img src="/placeholder.png" alt="/logo-only.png" className="landing-group"/>
            </div>
        </div>
    )
}

export default Landing
