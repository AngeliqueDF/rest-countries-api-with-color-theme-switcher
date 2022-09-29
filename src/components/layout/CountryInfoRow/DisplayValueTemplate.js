const DisplayValueTemplate = ({ value }) => {
  return (
    <dd style={{ marginRight: "4px" }} key={value}>
      {value}
    </dd>
  );
};

export default DisplayValueTemplate;
