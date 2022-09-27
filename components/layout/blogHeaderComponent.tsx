import { FC } from "react";

interface Props {
  title: string;
  dateString: string;
  mainImageUrl: string;
}

const BlogHeaderComponent: FC<Props> = ({
  title,
  dateString,
  mainImageUrl,
}) => {
  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h1>{title}</h1>
      <img src={mainImageUrl} style={{ width: "600px" }} />
      <p>Posted on {dateString}</p>
    </div>
  );
};

export default BlogHeaderComponent;
