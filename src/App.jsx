export const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: 'Blue',
    fontSize: '28px',
    margin: 50,
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      {console.log('hoge')}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
