import styles from "./Menu.module.scss"
import { Image, Icon, Input } from "semantic-ui-react"
import { useState, useEffect } from "react"
import { Platform } from "@/api";
import { map } from "lodash";
import Link from "next/link";
import { ENV } from "@/utils";
import classNames from "classnames";

const platformCtrl = new Platform();

export function Menu(props){

    const { isOpenSearch } = props;
    const [platforms, setPlatforms] = useState(null)
    const [showSearch, setShowSearch] = useState(false)

    const openCloseSearch = () => setShowSearch((prevState) => !prevState)

    useEffect(()=>{
        (async () => {
            try {
                const response = await platformCtrl.getAll()
                setPlatforms(response.data)
            } catch (error) {
                console.error(error)
            }
        })();
    })

    return(
        <div className={styles.platforms}>

            {map(platforms, (platform) => (
                <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                    <Image src ={`${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}`}/>
                    {platform.attributes.title}
                </Link>
            ))}

            <button className={styles.search} onClick={openCloseSearch}>
                <Icon name="search"/>
            </button>

            <div className={classNames(styles.inputContainer, {[styles.active] : showSearch})} >
                <Input id="search-games" placeholder="Buscador" className={styles.input} focus={true} />
                <Icon name="close" className={styles.closeInput} onClick={openCloseSearch}/>
            </div>
        </div>
    )
}