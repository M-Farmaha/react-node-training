import { Image, ItemWrap } from "./DealsItem-styled";

export const DealsItem = ({ el }) => {
  const { _id, days_left, price, sold, ticket, title, url, output } = el;
  return (
    <ItemWrap>
      <Image src={url} alt={title} />
    </ItemWrap>
  );
};
