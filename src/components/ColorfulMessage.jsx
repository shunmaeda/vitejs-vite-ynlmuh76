export const ColorfulMessage = (props) => {
    const contentStyleA = {
        color: props.color,
        fontSize: '28px',
    };
    return (
        <p style={contentStyleA}>{props.children}</p>
    )
}