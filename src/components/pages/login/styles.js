import {createUseStyles} from 'react-jss'

export const styles=createUseStyles({
    wrapper:{
        width:'100%',
        position:'relative',
        '& img':{
            width:'100%',
            height:'calc(100vh - 50px)'
        },
        '& div':{
            width:400,
            height:500,
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50% , -50%)',
            padding:'70px 30px',
            background:'  linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(241,178,44,1) 100%)' ,
            borderRadius:10,
            '& label':{
                marginTop:20,
                fontsize:20,
                fontWeight:'bold'
            },
            '& button':{
                marginTop:50,
                borderRadius:10
            },
            '& input':{
                borderRadius:10
            }
                        
        }

    },
    error:{
        fontWeight:'bold',
        fontSize:14,
        color:'red'
    }
})