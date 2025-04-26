type MemberCardType = {
    name: string,
    position: string
}

function MemberCard({ name, position }: MemberCardType) {
    const formattedName = name.toLowerCase().split(' ').join('-')

    return (
        <div className="w-1/3 lg:max-w-1/5 flex flex-col gap-8">
            <div>
                <img src={`/anggota/${formattedName}.png`} className="w-full aspect-square border-4 border-[#122a4f] rounded-2xl"/>
            </div>
            
            <div>
                <p className="text-md lg:text-xl font-bold text-center">{ name }</p>
                <p className="text-xs mt-2 text-center">{ position }</p>
            </div>
        </div>
    )
}

function Anggota() {
    const leader: MemberCardType[] = [
        {
            name: 'Christella Wahyudi',
            position: 'Ketua OSIS'
        },
        {
            name: 'Vanessa Lovianus',
            position: 'Wakil Ketua OSIS'
        },
        {
            name: 'Jolyn Horencia',
            position: 'Sekretaris'
        },
        {
            name: 'Candi Wijaya',
            position: 'Bendahara'
        }
    ]

    const humas: MemberCardType[] = [
        {
            name: 'Hantriana Travers',
            position: 'Public Relations'
        },
        {
            name: 'Jesslyn Caroline',
            position: 'Public Relations'
        },
        {
            name: 'Della Pertiwi',
            position: 'Public Relations'
        }
    ]

    const acara: MemberCardType[] = [
        {
            name: 'Abel',
            position: 'Acara'
        },
        {
            name: 'Alikha',
            position: 'Acara'
        },
        {
            name: 'Javelin',
            position: 'Acara'
        }
    ]

    const desain: MemberCardType[] = [
        {
            name: 'Vanecya Liu',
            position: 'Kreatif'
        },
        {
            name: 'Jaycee Fong',
            position: 'Kreatif'
        },
        {
            name: 'Andika',
            position: 'Kreatif'
        },
        {
            name: 'Surya Ratana',
            position: 'Kreatif'
        }
    ]

    const OlahragaRohani: MemberCardType[] = [
        {
            name: 'Steven Brighver',
            position: 'Seni Olahraga'
        },
        {
            name: 'Louie Kent',
            position: 'Seni Olahraga'
        },
        {
            name: 'Cherryl Callista',
            position: 'Rohani'
        }
    ]
    return (
        <div id="anggota" className='section'>
            <hr className="border-t-2 border-gray-600" />

            <h2 className="sub-title">Anggota OSIS</h2>

            <div className="flex flex-col gap-16">
                <div className="member-container">
                {
                    leader.map(l => (
                        <MemberCard {...l} key={l.name}/>
                    ))
                }
                </div>

                <div className="member-container border-2 border-[#122a4f] rounded-2xl py-8">
                {
                    humas.map(h => (
                        <MemberCard {...h} key={h.name} />
                    ))
                }
                </div>

                <div className="member-container">
                {
                    acara.map(a => (
                        <MemberCard {...a} key={a.name}/>
                    ))
                }
                </div>

                <div className="member-container border-2 border-[#122a4f] rounded-2xl py-8">
                {
                    OlahragaRohani.map(o => (
                        <MemberCard {...o} key={o.name} />
                    ))
                }
                </div>

                <div className="member-container">
                {
                    desain.map(d => (
                        <MemberCard {...d} key={d.name}/>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Anggota
