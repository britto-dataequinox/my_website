import { Grid } from "@mui/material"

const ResponsiveGrid = ({ children }: any) => {
    return (
        <Grid container spacing={2}>
            {children}
        </Grid>
    )
}

export default ResponsiveGrid