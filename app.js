import withBorders from "./higher";
import withBgcolor from "./higher1";
function App(props)
{
    return(
        <>
         {console.log(props)}
        <p>in Parent</p>
        </>
    )
}
export default withBgcolor(App)