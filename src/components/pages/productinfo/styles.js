import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
    container:{
        width:1200,
        margin:'20px auto',
        display:'block'
    },
    productWrapper:{
        width:'100%',
        display:'flex',
        justifyContent:'space-around',
        boxShadow:'0 0 7px 2px gray',
        
    },
    productImage:{
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
        '& img':{
           
            width:250,
            height:300,
            padding:10
        }
    },
    productInfo:{
        width:'70%',
        padding:10,
        display:"flex",
        flexDirection:"column",
       
        '& i':{
            color:'yellow',
                    
        }
    },
    recommendedWrapper:{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginTop:30,boxShadow:'0 0 7px 2px gray'
    },
    rate:{
        display:"flex", 
        justifyContent:'space-around'
    }
})