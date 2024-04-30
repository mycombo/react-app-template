import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { COLOR_BODY_DARK, COLOR_BODY_LIGHT } from './colors'

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode(COLOR_BODY_LIGHT, COLOR_BODY_DARK)(props)
        }
    })
}

const theme = extendTheme({ config, styles })

export default theme