import { Icon } from "@iconify/react";
import { useState, useEffect } from "react"

const _user = {
    name: "Ana Alface",
    username: "anaalface",
    email: "ana@ana.com",
    urlPhoto: "https://randomuser.me/api/portraits/med/women/56.jpg"
}

export default function FakeUser() {
    const [ user, setUser ] = useState(_user)

    return (
        <>
            <div className="">
                <div className="">
                    <div>
                        <img src={user.urlPhoto} alt="" className="w-16 h-16 rounded-lg" />
                    </div>
                    <div className="">
                        <div className="">
                            {user.name}
                        </div>
                        <div>
                            @{user.username}
                        </div>
                        <div className="">
                            {user.email}
                        </div>
                    </div>
                </div>
                <div className="">
                    <Icon icon="mdi-refresh" className=""/>
                </div>
            </div>
        </>
    )
}