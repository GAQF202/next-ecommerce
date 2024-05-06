import { BasicLayout } from "@/layout"
import { useState } from "react"
import { Info } from "@/components/Auth/Account"
import { Tab } from "semantic-ui-react"
import styles from "./account.module.scss"
import { useAuth } from "@/hooks"
import { useRouter } from "next/router"
import { Settings } from "@/components/Settings"
import { useEffect, useRef } from "react"
import { Separator } from "@/components/Shared"
import { Address } from "@/components/Auth/Account/Adress"

export default function AccountPage(){

    const { user, logout } = useAuth()
    const router = useRouter()
    const mounted = useRef();
    const [reload, setReload] = useState(false);

    const onReload = () => setReload((prevState) => !prevState);
    
    useEffect(()=>{
        (async () => {
            if (!mounted.current) {
                mounted.current = true;
            } else {
                if(!user){
                    router.push("/")
                }
            }
        })();
    })

    const panes = [
        {
            menuItem:"Mis pedidos",
            render: ()=>(
                <Tab.Pane attached={false}>
                    <Separator height={80} />
                </Tab.Pane>
            )
        },
        {
            menuItem:"Lista de deseos",
            render: ()=>(
                <Tab.Pane attached={false}>
                    <p>Mi lista de deseos...</p>
                </Tab.Pane>
            )
        },
        {
            menuItem:"Direcciones",
            render: ()=>(
                <Tab.Pane attached={false}>
                    <Address.AddAddress onReload={onReload} />
                    <Address.ListAddressess reload={reload} onReload={onReload} />
                    <Separator height={80} />
                </Tab.Pane>
            )
        },
        {
            menuItem:{ key:20, icon: "settings", content: "Ajustes" },
            render: ()=>(
                <Tab.Pane attached={false}>
                    <Settings.ChangeNameForm/>
                    <div className={styles.containerForms}>
                        <Settings.ChangeEmailForm/>
                        <Settings.ChangePasswordForm/>
                    </div>
                    <Separator height={80} />
                </Tab.Pane>
            )
        },{
            menuItem: {
                key: 21,
                icon: "log out",
                content: "",
                onClick: logout,
            }
        }
    ]
    return(
        <>
            <BasicLayout isContainer relative>
                <Info/>

                <Tab menu={{secondary:true, pointing:true}} panes={panes} className={styles.tabs}/>
            </BasicLayout>
        </>
    )
}