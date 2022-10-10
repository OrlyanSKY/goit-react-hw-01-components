import PropTypes from 'prop-types';
import { Body, Item } from './TableBody.styled';
import randomColor from 'randomcolor';

export const TableBody = ({ items }) => {
  return (
    <Body>
      {items.map(({ id, type, amount, currency }) => (
        <Item
          key={id}
          style={{
            backgroundColor: randomColor({
              luminosity: 'light',
              hue: 'blue',
            }),
          }}
        >
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </Item>
      ))}
    </Body>
  );
};

TableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
