export default function Footer (){
    const footerStyle = {
      fontFamily:'Inter',
      fontSize:'10px',
      background:'black',
      color:'#6e6e6e',
      height:'75px',
      lineHeight: '24px',
      textAlign:'center',
      paddingTop:'1px',
    }
    return(
        <footer style={footerStyle}>
            <p>DESIGN BY THE BROTHER OF 来福</p>
            <p>COPYRIGHT © 1999 – 2021 ORKA 张宏年</p>
        </footer>
    )
}