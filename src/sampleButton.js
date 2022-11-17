const sampleButton = ({ onClick, children }) => {
  const handleClick = () => {
    onClick();
    return 2;
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default sampleButton;
