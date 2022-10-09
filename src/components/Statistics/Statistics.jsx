import randomColor from 'randomcolor';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatsList,
  StatsListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title ? <Title>{title}</Title> : null}
      <StatsList>
        {stats.map(data => (
          <StatsListItem
            key={data.id}
            style={{
              backgroundColor: randomColor({
                luminosity: 'dark',
                format: 'rgba',
                alpha: 0.5,
              }),
            }}
          >
            <Label>{data.label}</Label>
            <Percentage>{data.percentage}%</Percentage>
          </StatsListItem>
        ))}
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
