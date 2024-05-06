import { BasicLayout } from "@/layout"
import { Home } from "@/components/Home"
import { Separator } from "@/components/Shared"
import { Container } from "semantic-ui-react"

export default function HomePage(){
    return(
        <>
            <BasicLayout isContainer>
                <Home.BannerLastGamePublished />

                <Separator height={100} />

                
            <Container>
                <Home.LatestGames />
            </Container>
            </BasicLayout>
        </>
    )
}