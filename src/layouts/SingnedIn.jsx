import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SingnedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png"/>
                <Dropdown pointing="top left" text='Muhammed'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Cikis Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
