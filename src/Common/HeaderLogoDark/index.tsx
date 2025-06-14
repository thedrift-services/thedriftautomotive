import { Grid, Typography } from '@mui/material'
import LogoImage from '../../Assets/Logo/primaryLogoTrans.png'
import theme from '../../theme'
const HeaderLogoDark = () => {
    const logoStyle = {
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: 0.5,
        paddingBottom: 0.5,
    }
    const headerLogoStyle = {
        marginLeft: "auto",
        marginRight: "auto",
    }


    return <>
        <Grid container sx={headerLogoStyle}>

            <img src={LogoImage} height="90%" width="80%" style={logoStyle} />
        </Grid>
    </>
}

export default HeaderLogoDark