const Header=()=><header><h1>Welcome User!</h1></header>;
const Content=()=><main><h1>Main Content</h1></main>;
const Footer=()=><footer><h1>&copy; 2026</h1></footer>;

function Comp()
{
    return(
        <div>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}
export default Comp