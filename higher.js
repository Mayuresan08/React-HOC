function withBorders(WrapperComponent)
{
    return(props)=>{
        return(
            <>
            <div style={{border:"1px solid black"}}>
            <WrapperComponent {...props}/>
            </div>
            <p>in HOC</p>
            </>
        )
    }
}
export default withBorders