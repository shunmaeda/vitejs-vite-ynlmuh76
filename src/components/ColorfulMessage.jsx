// export const ColorfulMessage = (props) => {
export const ColorfulMessage = ({ color, children }) => {
    // const { color, children } = props;
    const contentStyleA = {
        color,
        fontSize: '28px',
    };
    return (
        <p style={contentStyleA}>{children}</p>
    )
}