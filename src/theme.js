import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MyComponent: {
            variants: [
                {
                    props: { variant: 'danger' },
                    style: {
                        backgroundColor: 'red',
                        color: 'white',
                    },
                },
                {
                    props: { variant: 'success' },
                    style: {
                        backgroundColor: 'green',
                        color: 'white',
                    },
                },
            ],
        },
    },
});

export default theme