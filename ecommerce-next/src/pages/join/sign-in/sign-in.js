import React from 'react'
import styles from './sign-in.module.scss'
import { JoinLayout } from '@/layout'
import Link from 'next/link'
import { LoginForm } from '@/components/Auth/LoginForm'

export default function SignInPage(){
    return(
        <JoinLayout>
            <div className={styles.signIn}>
                <h3>Iniciar sesión</h3>

                <LoginForm/>
                
                <div className={styles.actions}>
                    <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
                </div>
            </div>
        </JoinLayout>
    )
}