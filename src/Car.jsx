function Car(props)
{
    return (
       
        <div style={{ background: "pink",color: '#11E682FF'}}>
            <h1>color:{props.carinfo.color}<br />
            <br />description:{props.children}</h1>
            </div>
        
    );
}
export default Car;
