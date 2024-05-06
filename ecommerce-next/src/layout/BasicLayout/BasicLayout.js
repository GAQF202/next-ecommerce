import styles from "./BasicLayout.module.scss"
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import { TopBar } from "@/components/Auth/Layout";
import { Footer } from "@/components/Auth/Layout";

export function BasicLayout( props ){
    const { children, isOpenSearch = false, isContainer = false, relative = false } = props;

    return(
        <>
        <TopBar isOpenSearch={isOpenSearch}></TopBar>

        <Container fluid>
            <div className={classNames({ [styles.relative]: relative })}>

                {isContainer ? <Container>{children}</Container> : children}
            </div>
        </Container>

        <Footer/>
        </>
    )
}