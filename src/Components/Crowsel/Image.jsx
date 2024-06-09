function Image(props) {
  const { id, download_url = "https://picsum.photos/id/0/5000/3333" } = props;

  return (
    <div>
      <img
        style={{ width: "500px", height: "300px" }}
        src={download_url}
        alt={id}
      />
    </div>
  );
}

export default Image;
