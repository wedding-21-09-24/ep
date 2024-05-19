import {extendTheme} from "@mui/joy";

const customTheme = extendTheme({
    components: {
        JoyTypography: {
            styleOverrides: {
                root: ({ownerState, theme}) => ({
                    ...((ownerState.variant === 'regularText' && {
                            textAlign: 'center',
                            fontSize: '17px',
                            marginBottom: '17px',
                            fontFamily: 'GilroyLight, sans-serif',
                            fontWeight: '300',
                            lineHeight: '19.55px',
                            color: 'black'
                        })),
                    ...((ownerState.variant === 'headerText' && {
                            textAlign: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginBottom: '17px',
                            fontFamily: 'GilroyLight, sans-serif',
                            color: 'black'
                        })),
                    ...((ownerState.variant === 'handwriteText' && {
                            textAlign: 'center',
                            fontSize: '32px',
                            marginBottom: '16px',
                            fontFamily: 'ShlapakScript, sans-serif',
                            color: 'black'
                        })),
                }),
            },
        },
        JoyFormLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'GilroyLight, sans-serif'
                },
            },
        },
        JoyRadio: {
            styleOverrides: {
                root: {
                    fontFamily: 'GilroyLight, sans-serif'
                },
            },
        },
        JoyCheckbox: {
            styleOverrides: {
                root: {
                    fontFamily: 'GilroyLight, sans-serif'
                },
            },
        },
        JoyButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'GilroyLight, sans-serif'
                },
            },
        },
        JoyInput: {
            styleOverrides: {
                root: {
                    borderColor: 'black'
                },
            },
        }
    },
});

export default customTheme;