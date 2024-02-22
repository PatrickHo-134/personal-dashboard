import React, { useEffect } from "react";
import {
  useDispatch,
  // useSelector
} from "react-redux";
// import { fetchNewsData } from "../../api/news";
import { setNews } from "../../actions/newsActions";

import PropTypes from "prop-types";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Link } from "@mui/material";


const columnStyles = {
  title: { width: "50%" },
  source: { width: "25%" },
  publishedDate: { width: "25%" },
};

function NewsTable() {
  const dispatch = useDispatch();
  // const newsData = useSelector((state) => state.news.topHeadlines);
  const mockData = [{
    title:
      "Baulkham Hills, North Parramatta triple death: Troubling text emerges as bodies of husband, wife and seven-yea - Daily Mail",
    link: "https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTMxMDI2NDMvSG9ycm9yLXRocmVlLWJvZGllcy1TeWRuZXktaW5jbHVkaW5nLWNoaWxkLUJhdWxraGFtLUhpbGxzLVBhcnJhbWF0dGEuaHRtbNIBf2h0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTMxMDI2NDMvYW1wL0hvcnJvci10aHJlZS1ib2RpZXMtU3lkbmV5LWluY2x1ZGluZy1jaGlsZC1CYXVsa2hhbS1IaWxscy1QYXJyYW1hdHRhLmh0bWw?oc=5",
    entry_id:
      "CBMie2h0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTMxMDI2NDMvSG9ycm9yLXRocmVlLWJvZGllcy1TeWRuZXktaW5jbHVkaW5nLWNoaWxkLUJhdWxraGFtLUhpbGxzLVBhcnJhbWF0dGEuaHRtbNIBf2h0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9uZXdzL2FydGljbGUtMTMxMDI2NDMvYW1wL0hvcnJvci10aHJlZS1ib2RpZXMtU3lkbmV5LWluY2x1ZGluZy1jaGlsZC1CYXVsa2hhbS1IaWxscy1QYXJyYW1hdHRhLmh0bWw",
    published_date: "Tue, 20 Feb 2024 09:35:34 GMT",
    source: "Daily Mail",
    source_href: "https://www.dailymail.co.uk",
  },
  {
    title: "Trump weighs in on death of Putin foe - news.com.au",
    link: "https://news.google.com/rss/articles/CBMirAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS93b3JsZC9ldXJvcGUvYWxleGVpLW5hdmFsbnlzLXdpZG93LXNheXMtcHV0aW4ta2lsbGVkLWhlci1odXNiYW5kLWFzLWRvbmFsZC10cnVtcC1icmVha3Mtc2lsZW5jZS1vbi1kZWF0aC9uZXdzLXN0b3J5L2IyMzQxZjk2MDI1MjBkNDE0YzNmYjZhOWRiNWUxYTlm0gGwAWh0dHBzOi8vd3d3Lm5ld3MuY29tLmF1L3dvcmxkL2V1cm9wZS9hbGV4ZWktbmF2YWxueXMtd2lkb3ctc2F5cy1wdXRpbi1raWxsZWQtaGVyLWh1c2JhbmQtYXMtZG9uYWxkLXRydW1wLWJyZWFrcy1zaWxlbmNlLW9uLWRlYXRoL25ld3Mtc3RvcnkvYjIzNDFmOTYwMjUyMGQ0MTRjM2ZiNmE5ZGI1ZTFhOWY_YW1w?oc=5",
    entry_id:
      "CBMirAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS93b3JsZC9ldXJvcGUvYWxleGVpLW5hdmFsbnlzLXdpZG93LXNheXMtcHV0aW4ta2lsbGVkLWhlci1odXNiYW5kLWFzLWRvbmFsZC10cnVtcC1icmVha3Mtc2lsZW5jZS1vbi1kZWF0aC9uZXdzLXN0b3J5L2IyMzQxZjk2MDI1MjBkNDE0YzNmYjZhOWRiNWUxYTlm0gGwAWh0dHBzOi8vd3d3Lm5ld3MuY29tLmF1L3dvcmxkL2V1cm9wZS9hbGV4ZWktbmF2YWxueXMtd2lkb3ctc2F5cy1wdXRpbi1raWxsZWQtaGVyLWh1c2JhbmQtYXMtZG9uYWxkLXRydW1wLWJyZWFrcy1zaWxlbmNlLW9uLWRlYXRoL25ld3Mtc3RvcnkvYjIzNDFmOTYwMjUyMGQ0MTRjM2ZiNmE5ZGI1ZTFhOWY_YW1w",
    published_date: "Mon, 19 Feb 2024 17:48:36 GMT",
    source: "news.com.au",
    source_href: "https://www.news.com.au",
  },];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await fetchNewsData();
        dispatch(setNews(mockData));
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [dispatch]);


  return (
    <div style={{ maxHeight: "30rem", overflowY: "auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ width: "60%", fontWeight: "bold" }}>Title</TableCell>
              <TableCell style={{ width: "20%", fontWeight: "bold" }}>Source</TableCell>
              <TableCell style={{ width: "20%", fontWeight: "bold" }}>Published Date</TableCell>
            </TableRow>
            {mockData.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={columnStyles.title}>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" color="blue">
                    {item.title}
                  </Link>
                </TableCell>
                <TableCell style={columnStyles.source}>{item.source}</TableCell>
                <TableCell style={columnStyles.publishedDate}>{item.published_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
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
