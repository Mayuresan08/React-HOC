function withBgcolor(WrapperComponent)
{const userInfo={
    name:"mayu",
    age:24,
    place:"trichy"
}
    return(props)=>{
        let newProps={...props,name:"zen",userInfo:{userInfo}}
        return(
            <>
            <div style={{backgroundColor:"red"}}>
            <WrapperComponent {...newProps} />
            </div>
            </>
        )
    }
}
export default withBgcolor