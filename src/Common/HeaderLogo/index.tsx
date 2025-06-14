import { Grid, Typography } from '@mui/material'
import theme from '../../theme'
const HeaderLogo = () => {
    const logoStyle = {
        marginRight: '0.2rem',
        marginLeft: '0.2rem',
        paddingTop: 0.5,
        paddingBottom: 0.5,
    }
    const headerLogoStyle = {
        pr: 1,
        pl: 1,
        width: 'auto',
        transform: "skew(-10deg)",
    }

    const typographyStylePart1 = {
        pr: 1,
        pl: 1,
        fontFamily: 'Anton',
        color: 'white',
        fontSize: 42,
        textDecoration: 'none',
    }
    const typographyStylePart2 = {
        pr: 1,
        pl: 1,
        background: theme.palette.primary.main,
        fontFamily: 'Anton',
        color: 'black',
        fontSize: 42,
        textDecoration: 'none',
    }
    const typographyStylePart3 = {
        pr: 1.5,
        pl: 1,
        fontFamily: 'Anton',
        color: theme.palette.primary.contrastText,
        background: theme.palette.secondary.light,
        fontSize: 40,
        mt: 'auto',
        mb: 'auto',
        textDecoration: 'none',
    }

    return <>
        <Grid container sx={headerLogoStyle}>
            <Grid item>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#"
                    sx={typographyStylePart1}
                >
                    THE
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#"
                    sx={typographyStylePart2}
                >
                    DRIFT
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#"
                    sx={typographyStylePart3}
                >
                    AUTOMOTIVE
                </Typography>
            </Grid>
        </Grid>
    </>
}

export default HeaderLogo