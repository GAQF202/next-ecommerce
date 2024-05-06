import { useState, useEffect } from "react"
import { Game } from "@/api"

const gameCtrl = new Game()
const limit = 9
const platformId = null;

export function LatestGames(){

    const [games, setGames] = useState(null);

    useEffect(()=>{
        (async () => {
            try {
                const response = await gameCtrl.getLatestPublished({limit, platformId})
                setGames(response.data)
            } catch (error) {
                console.error(error)
            }
        })()
    })

    if(!games) return null;

    return(
        <div>
            <h2>LatestGames</h2>
        </div>
    )
}