export const ColorfulMessage = (props) => {
    const { color, children } = props;
    const contentStyleA = {
        color: color,
        fontSize: '28px',
    };
    return (
        <p style={contentStyleA}>{children}</p>
    )
}