import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
    invoiceWrapper:{
        width:800,
        display:'flex',
        flexDirection:'column',
        margin:'30px auto',
        '& strong':{
            color:'#333'
        }
    },
    invoiceInfo:{
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        border:'1px solid #dde',
        padding:'7px 12px'
    },
    customerInfo:{
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'7px 15px',
        border:'1px solid #dde'
    },
    productInfo:{
        display:'flex',
        justifyContent:'flex-start',
        padding:15,
        border:'1px solid #dde'   
    },
    productImage:{
        width:'40%',
        '& img':{
            width:150,
            height:150
        }
    }

})
