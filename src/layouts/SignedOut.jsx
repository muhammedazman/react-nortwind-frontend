import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Button primary onClick={signIn}>Giris Yap</Button>
            <Button primary>Kayit Ol</Button>
        </div>
    )
}
