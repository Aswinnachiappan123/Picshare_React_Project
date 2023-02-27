import React from'react'
import {useNavigate,Link} from 'react-router-dom'
import { Grid ,Paper,Avatar, TextField,Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{
    const navigate=useNavigate();
    const paperStyle={padding:20,height:'70vh',width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid id='page'>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username'fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={()=>{navigate('/home');
            }}>Sign in</Button>
                 <Typography >
                    
                </Typography>
                <Typography > Do you have an account ?
                     <Link to='/signup' >
                        Sign Up 
                </Link>
                </Typography>
            
            
            </Paper>
        </Grid>
     </Grid>
    )
}
export default Login