import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
    container:{
        width:1200,
        margin:'50px auto',
        display:'block'
    },
    productWrapper:{
        width:'100%',
        display:'flex',
        boxShadow:'0 0 7px 2px gray'
        
    },
    productImage:{
        width:'100%',
        '& img':{
            width:400,
            height:500,
            padding:10
        }
    },
    productInfo:{
        width:'100%',
        padding:10
    },
    recommendedWrapper:{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginTop:30,boxShadow:'0 0 7px 2px gray'
    }
})