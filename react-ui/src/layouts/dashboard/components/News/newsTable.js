import React, { useEffect, useState } from "react";
import {
  useDispatch,
  useSelector
} from "react-redux";
import { fetchNews, setCountry, setNewsTopic } from '../../../../actions/newsActions';

import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper, Link, Card, Icon, Menu, MenuItem, ToggleButton, ToggleButtonGroup
} from "@mui/material";

// Soft UI Dashboard React components
import SuiBox from "../../../../components/SuiBox";
import SuiTypography from "../../../../components/SuiTypography";

const CountryToggleButtons = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.news.country);
  const selectedTopic = useSelector((state) => state.news.topic);

  const handleCountryChange = (event, newCountry) => {
    if (newCountry !== null) {
      dispatch(setCountry(newCountry));
      dispatch(fetchNews(newCountry, selectedTopic));
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedCountry}
      exclusive
      onChange={handleCountryChange}
      aria-label="country selection"
    >
      <ToggleButton value="AU" aria-label="Australia">
        AU
      </ToggleButton>
      <ToggleButton value="US" aria-label="United States">
        US
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

const TopicToggleButtons = () => {
  const newsTopics = ["top news", "world", "nation", "business", "technology", "entertainment", "science", "sports", "health"]
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.news.country);
  const selectedTopic = useSelector((state) => state.news.topic);

  const handleTopicChange = (event, topic) => {
    if (topic !== null) {
      dispatch(setNewsTopic(topic));
      dispatch(fetchNews(selectedCountry, topic));
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedTopic}
      exclusive
      onChange={handleTopicChange}
      aria-label="news topic selection"
    >
      {newsTopics.map((item, index) => (
        <ToggleButton key={index} value={item} aria-label={item}>
          {item}
        </ToggleButton>
      ))}

    </ToggleButtonGroup>
  );
};

function Headlines() {
  const dispatch = useDispatch();
  const { loading, news, error, country, topic } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews(country, topic));
  }, [dispatch]);

  if (loading) {
    return (
      <SuiTypography>
        Loading...
      </SuiTypography>
    );
  }

  if (error) {
    return (
      <SuiTypography>
        {error}
      </SuiTypography>
    );
  }

  return (
    <div style={{
      maxHeight: "40rem",
      overflowY: "auto"
    }}>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {news.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" color="blue">
                    {item.title}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function NewsTable() {
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiBox>
          <SuiTypography variant="h6" fontWeight="bold">
            News
          </SuiTypography>

          <SuiBox>
            <CountryToggleButtons />
            <TopicToggleButtons />
          </SuiBox>


        </SuiBox>
        <SuiBox color="text" px={2}>
          <Icon className="cursor-pointer font-bold" fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SuiBox>
        {renderMenu}
      </SuiBox>
      <SuiBox p={2}>
        <Headlines />
      </SuiBox>
    </Card>
  );
}


NewsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsTable;
