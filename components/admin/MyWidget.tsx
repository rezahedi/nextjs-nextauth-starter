const MyWidget = ({title}: {title?: string}) => {
  return (
    <div className="widget">
      {title || "Widget Title"}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MyWidget;
