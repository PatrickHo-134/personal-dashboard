// import axios from "axios";

// const API_BASE_URL = "http://127.0.0.1:5000/api";
const NewsData = [
    {
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
    },
    {
      title:
        "The forgotten budget paper that shows Dutton is wrong on border force budget - Sydney Morning Herald",
      link: "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5zbWguY29tLmF1L3BvbGl0aWNzL2ZlZGVyYWwvdGhlLWZvcmdvdHRlbi1idWRnZXQtcGFwZXItdGhhdC1zaG93cy1kdXR0b24taXMtd3Jvbmctb24tYm9yZGVyLWZvcmNlLWJ1ZGdldC0yMDI0MDIyMC1wNWY2ZGYuaHRtbNIBiQFodHRwczovL2FtcC5zbWguY29tLmF1L3BvbGl0aWNzL2ZlZGVyYWwvdGhlLWZvcmdvdHRlbi1idWRnZXQtcGFwZXItdGhhdC1zaG93cy1kdXR0b24taXMtd3Jvbmctb24tYm9yZGVyLWZvcmNlLWJ1ZGdldC0yMDI0MDIyMC1wNWY2ZGYuaHRtbA?oc=5",
      entry_id:
        "CBMiiQFodHRwczovL3d3dy5zbWguY29tLmF1L3BvbGl0aWNzL2ZlZGVyYWwvdGhlLWZvcmdvdHRlbi1idWRnZXQtcGFwZXItdGhhdC1zaG93cy1kdXR0b24taXMtd3Jvbmctb24tYm9yZGVyLWZvcmNlLWJ1ZGdldC0yMDI0MDIyMC1wNWY2ZGYuaHRtbNIBiQFodHRwczovL2FtcC5zbWguY29tLmF1L3BvbGl0aWNzL2ZlZGVyYWwvdGhlLWZvcmdvdHRlbi1idWRnZXQtcGFwZXItdGhhdC1zaG93cy1kdXR0b24taXMtd3Jvbmctb24tYm9yZGVyLWZvcmNlLWJ1ZGdldC0yMDI0MDIyMC1wNWY2ZGYuaHRtbA",
      published_date: "Tue, 20 Feb 2024 06:27:56 GMT",
      source: "Sydney Morning Herald",
      source_href: "https://www.smh.com.au",
    },
    {
      title:
        "Australian navy overhaul to double surface fleet and add ‘optionally crewed’ warships - The Guardian Australia",
      link: "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9hdXN0cmFsaWEtbmV3cy8yMDI0L2ZlYi8yMC9hdXN0cmFsaWFuLW5hdnktd2Fyc2hpcC1zdXJmYWNlLWNvbWJhdGFudC1mbGVldC1kb3VibGUtaHVudGVyLWNsYXNzLWxvc3bSAX9odHRwczovL2FtcC50aGVndWFyZGlhbi5jb20vYXVzdHJhbGlhLW5ld3MvMjAyNC9mZWIvMjAvYXVzdHJhbGlhbi1uYXZ5LXdhcnNoaXAtc3VyZmFjZS1jb21iYXRhbnQtZmxlZXQtZG91YmxlLWh1bnRlci1jbGFzcy1sb3N2?oc=5",
      entry_id:
        "CBMif2h0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9hdXN0cmFsaWEtbmV3cy8yMDI0L2ZlYi8yMC9hdXN0cmFsaWFuLW5hdnktd2Fyc2hpcC1zdXJmYWNlLWNvbWJhdGFudC1mbGVldC1kb3VibGUtaHVudGVyLWNsYXNzLWxvc3bSAX9odHRwczovL2FtcC50aGVndWFyZGlhbi5jb20vYXVzdHJhbGlhLW5ld3MvMjAyNC9mZWIvMjAvYXVzdHJhbGlhbi1uYXZ5LXdhcnNoaXAtc3VyZmFjZS1jb21iYXRhbnQtZmxlZXQtZG91YmxlLWh1bnRlci1jbGFzcy1sb3N2",
      published_date: "Tue, 20 Feb 2024 02:07:00 GMT",
      source: "The Guardian Australia",
      source_href: "https://www.theguardian.com",
    },
    {
      title:
        "Dangerous friable asbestos found at popular inner city Sydney park, more sites test positive - 9News",
      link: "https://news.google.com/rss/articles/CBMimwFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvYXNiZXN0b3MtZm91bmQtaW4tZml2ZS1tb3JlLXN5ZG5leS1zaXRlcy1hbmQtYmljZW50ZW5uaWFsLXBhcmstZ2xlYmUtYXMtY3Jpc2lzLWdyb3dzLzQ2YzY1ZGJkLTE2MTUtNDU0NC1hNTUyLWI3Y2Q1MDFkZGUwOdIBRWh0dHBzOi8vYW1wLjluZXdzLmNvbS5hdS9hcnRpY2xlLzQ2YzY1ZGJkLTE2MTUtNDU0NC1hNTUyLWI3Y2Q1MDFkZGUwOQ?oc=5",
      entry_id:
        "CBMimwFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvYXNiZXN0b3MtZm91bmQtaW4tZml2ZS1tb3JlLXN5ZG5leS1zaXRlcy1hbmQtYmljZW50ZW5uaWFsLXBhcmstZ2xlYmUtYXMtY3Jpc2lzLWdyb3dzLzQ2YzY1ZGJkLTE2MTUtNDU0NC1hNTUyLWI3Y2Q1MDFkZGUwOdIBRWh0dHBzOi8vYW1wLjluZXdzLmNvbS5hdS9hcnRpY2xlLzQ2YzY1ZGJkLTE2MTUtNDU0NC1hNTUyLWI3Y2Q1MDFkZGUwOQ",
      published_date: "Tue, 20 Feb 2024 03:48:04 GMT",
      source: "9News",
      source_href: "https://www.9news.com.au",
    },
    {
      title: "Major delays on Sydney roads after flash flooding - 9News",
      link: "https://news.google.com/rss/articles/CBMiiAFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvc3lkbmV5LXdlYXRoZXItc2V2ZXJlLXRodW5kZXJzdG9ybXMtY29udGludWUtYmF0dGVyaW5nLWVhc3QtY29hc3QvOWVkZTIwNjAtYWRlNS00YTI2LThhZmUtODM3MDcxNmQ2ZDI10gFFaHR0cHM6Ly9hbXAuOW5ld3MuY29tLmF1L2FydGljbGUvOWVkZTIwNjAtYWRlNS00YTI2LThhZmUtODM3MDcxNmQ2ZDI1?oc=5",
      entry_id:
        "CBMiiAFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvc3lkbmV5LXdlYXRoZXItc2V2ZXJlLXRodW5kZXJzdG9ybXMtY29udGludWUtYmF0dGVyaW5nLWVhc3QtY29hc3QvOWVkZTIwNjAtYWRlNS00YTI2LThhZmUtODM3MDcxNmQ2ZDI10gFFaHR0cHM6Ly9hbXAuOW5ld3MuY29tLmF1L2FydGljbGUvOWVkZTIwNjAtYWRlNS00YTI2LThhZmUtODM3MDcxNmQ2ZDI1",
      published_date: "Tue, 20 Feb 2024 05:37:47 GMT",
      source: "9News",
      source_href: "https://www.9news.com.au",
    },
    {
      title:
        "Victoria to launch inquiry into storm power fail as thousands still without electricity - 9News",
      link: "https://news.google.com/rss/articles/CBMioQFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvdmljdG9yaWEtbmV3cy12aWN0b3JpYS10by1sYXVuY2gtaW5xdWlyeS1pbnRvLXN0b3JtLXBvd2VyLWZhaWwtYXMtMzAwMC1zdGlsbC13aXRob3V0LXBvd2VyL2Q0YzEwZjZlLWI4ZTUtNDNkYi1iOWM2LWIxYjBjNTQxMDRiNNIBRWh0dHBzOi8vYW1wLjluZXdzLmNvbS5hdS9hcnRpY2xlL2Q0YzEwZjZlLWI4ZTUtNDNkYi1iOWM2LWIxYjBjNTQxMDRiNA?oc=5",
      entry_id:
        "CBMioQFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvdmljdG9yaWEtbmV3cy12aWN0b3JpYS10by1sYXVuY2gtaW5xdWlyeS1pbnRvLXN0b3JtLXBvd2VyLWZhaWwtYXMtMzAwMC1zdGlsbC13aXRob3V0LXBvd2VyL2Q0YzEwZjZlLWI4ZTUtNDNkYi1iOWM2LWIxYjBjNTQxMDRiNNIBRWh0dHBzOi8vYW1wLjluZXdzLmNvbS5hdS9hcnRpY2xlL2Q0YzEwZjZlLWI4ZTUtNDNkYi1iOWM2LWIxYjBjNTQxMDRiNA",
      published_date: "Tue, 20 Feb 2024 07:39:11 GMT",
      source: "9News",
      source_href: "https://www.9news.com.au",
    },
    {
      title:
        "Government announces $50m grant for Australian scientists designing world's first long-term artificial heart - ABC News",
      link: "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbmV3cy8yMDI0LTAyLTIwL2F1c3RyYWxpYS1zY2llbnRpc3RzLWxvbmctdGVybS1hcnRpZmljaWFsLWhlYXJ0LWdvdmVybm1lbnQtZ3JhbnQvMTAzNDkwOTY00gEoaHR0cHM6Ly9hbXAuYWJjLm5ldC5hdS9hcnRpY2xlLzEwMzQ5MDk2NA?oc=5",
      entry_id:
        "CBMicWh0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbmV3cy8yMDI0LTAyLTIwL2F1c3RyYWxpYS1zY2llbnRpc3RzLWxvbmctdGVybS1hcnRpZmljaWFsLWhlYXJ0LWdvdmVybm1lbnQtZ3JhbnQvMTAzNDkwOTY00gEoaHR0cHM6Ly9hbXAuYWJjLm5ldC5hdS9hcnRpY2xlLzEwMzQ5MDk2NA",
      published_date: "Tue, 20 Feb 2024 09:13:55 GMT",
      source: "ABC News",
      source_href: "https://www.abc.net.au",
    },
    {
      title: "Masked intruders enter through Melbourne home's cat flap during burglary - 9News",
      link: "https://news.google.com/rss/articles/CBMinQFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvbWVsYm91cm5lLW5ld3MtbWFza2VkLWludHJ1ZGVycy1lbnRlci10aHJvdWdoLW1lbGJvdXJuZS1ob21lcy1jYXQtZmxhcC1kdXJpbmctYnVyZ2xhcnkvYjFmZTU4YTktZGUyZC00NmVlLTk2YzgtYWRiN2NiYjNiNTc10gFFaHR0cHM6Ly9hbXAuOW5ld3MuY29tLmF1L2FydGljbGUvYjFmZTU4YTktZGUyZC00NmVlLTk2YzgtYWRiN2NiYjNiNTc1?oc=5",
      entry_id:
        "CBMinQFodHRwczovL3d3dy45bmV3cy5jb20uYXUvbmF0aW9uYWwvbWVsYm91cm5lLW5ld3MtbWFza2VkLWludHJ1ZGVycy1lbnRlci10aHJvdWdoLW1lbGJvdXJuZS1ob21lcy1jYXQtZmxhcC1kdXJpbmctYnVyZ2xhcnkvYjFmZTU4YTktZGUyZC00NmVlLTk2YzgtYWRiN2NiYjNiNTc10gFFaHR0cHM6Ly9hbXAuOW5ld3MuY29tLmF1L2FydGljbGUvYjFmZTU4YTktZGUyZC00NmVlLTk2YzgtYWRiN2NiYjNiNTc1",
      published_date: "Tue, 20 Feb 2024 06:27:00 GMT",
      source: "9News",
      source_href: "https://www.9news.com.au",
    },
    {
      title: "New rule after shocking groper killings - news.com.au",
      link: "https://news.google.com/rss/articles/CBMipAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9uYXRpb25hbC9uc3ctYWN0L3BvbGl0aWNzL25zdy1nb3Zlcm5tZW50LXRvLWJhbi1hbGwtZmlzaGluZy1vZi1ibHVlLWdyb3BlcnMtYWZ0ZXItc2hvY2sta2lsbGluZ3MvbmV3cy1zdG9yeS8zYWUzNzRkMjkyMWVmOGI4MjFmZjRiMmY0MGQ2ODA4ZdIBqAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9uYXRpb25hbC9uc3ctYWN0L3BvbGl0aWNzL25zdy1nb3Zlcm5tZW50LXRvLWJhbi1hbGwtZmlzaGluZy1vZi1ibHVlLWdyb3BlcnMtYWZ0ZXItc2hvY2sta2lsbGluZ3MvbmV3cy1zdG9yeS8zYWUzNzRkMjkyMWVmOGI4MjFmZjRiMmY0MGQ2ODA4ZT9hbXA?oc=5",
      entry_id:
        "CBMipAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9uYXRpb25hbC9uc3ctYWN0L3BvbGl0aWNzL25zdy1nb3Zlcm5tZW50LXRvLWJhbi1hbGwtZmlzaGluZy1vZi1ibHVlLWdyb3BlcnMtYWZ0ZXItc2hvY2sta2lsbGluZ3MvbmV3cy1zdG9yeS8zYWUzNzRkMjkyMWVmOGI4MjFmZjRiMmY0MGQ2ODA4ZdIBqAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9uYXRpb25hbC9uc3ctYWN0L3BvbGl0aWNzL25zdy1nb3Zlcm5tZW50LXRvLWJhbi1hbGwtZmlzaGluZy1vZi1ibHVlLWdyb3BlcnMtYWZ0ZXItc2hvY2sta2lsbGluZ3MvbmV3cy1zdG9yeS8zYWUzNzRkMjkyMWVmOGI4MjFmZjRiMmY0MGQ2ODA4ZT9hbXA",
      published_date: "Tue, 20 Feb 2024 08:00:16 GMT",
      source: "news.com.au",
      source_href: "https://www.news.com.au",
    },
    {
      title: "Julian Assange: court considers last-ditch bid to fight US extradition - The Guardian",
      link: "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9tZWRpYS8yMDI0L2ZlYi8yMC9qdWxpYW4tYXNzYW5nZS1jb3VydC1jb25zaWRlcnMtbGFzdC1kaXRjaC1iaWQtdG8tZmlnaHQtdXMtZXh0cmFkaXRpb27SAQA?oc=5",
      entry_id:
        "CBMic2h0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9tZWRpYS8yMDI0L2ZlYi8yMC9qdWxpYW4tYXNzYW5nZS1jb3VydC1jb25zaWRlcnMtbGFzdC1kaXRjaC1iaWQtdG8tZmlnaHQtdXMtZXh0cmFkaXRpb27SAQA",
      published_date: "Tue, 20 Feb 2024 05:00:00 GMT",
      source: "The Guardian",
      source_href: "https://www.theguardian.com",
    },
    {
      title: "Israel pounds Gaza ahead of UN truce vote - news.com.au",
      link: "https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3Lm5ld3MuY29tLmF1L2JyZWFraW5nLW5ld3MvaXNyYWVsLXBvdW5kcy1nYXphLWFoZWFkLW9mLXVuLXRydWNlLXZvdGUvbmV3cy1zdG9yeS9hMGY1ZTE2OTczMGRlZjE0YjYzNjhlNzZkZDNiN2NkMdIBf2h0dHBzOi8vd3d3Lm5ld3MuY29tLmF1L2JyZWFraW5nLW5ld3MvaXNyYWVsLXBvdW5kcy1nYXphLWFoZWFkLW9mLXVuLXRydWNlLXZvdGUvbmV3cy1zdG9yeS9hMGY1ZTE2OTczMGRlZjE0YjYzNjhlNzZkZDNiN2NkMT9hbXA?oc=5",
      entry_id:
        "CBMie2h0dHBzOi8vd3d3Lm5ld3MuY29tLmF1L2JyZWFraW5nLW5ld3MvaXNyYWVsLXBvdW5kcy1nYXphLWFoZWFkLW9mLXVuLXRydWNlLXZvdGUvbmV3cy1zdG9yeS9hMGY1ZTE2OTczMGRlZjE0YjYzNjhlNzZkZDNiN2NkMdIBf2h0dHBzOi8vd3d3Lm5ld3MuY29tLmF1L2JyZWFraW5nLW5ld3MvaXNyYWVsLXBvdW5kcy1nYXphLWFoZWFkLW9mLXVuLXRydWNlLXZvdGUvbmV3cy1zdG9yeS9hMGY1ZTE2OTczMGRlZjE0YjYzNjhlNzZkZDNiN2NkMT9hbXA",
      published_date: "Tue, 20 Feb 2024 10:18:45 GMT",
      source: "news.com.au",
      source_href: "https://www.news.com.au",
    },
    {
      title: "The dark web site of notorious cyber criminal gang just got seized - 9News",
      link: "https://news.google.com/rss/articles/CBMijQFodHRwczovL3d3dy45bmV3cy5jb20uYXUvd29ybGQvZmJpLWFuZC1hbGxpZXMtc2VpemUtZGFya3dlYi1zaXRlLW9mLXdvcmxkcy1tb3N0LXByb2xpZmljLXJhbnNvbXdhcmUtZ2FuZy8xMjRiMDc0ZC1kMTIyLTRlYjctOGNjNS1kNmU0NjU5ZmUwNzfSAUVodHRwczovL2FtcC45bmV3cy5jb20uYXUvYXJ0aWNsZS8xMjRiMDc0ZC1kMTIyLTRlYjctOGNjNS1kNmU0NjU5ZmUwNzc?oc=5",
      entry_id:
        "CBMijQFodHRwczovL3d3dy45bmV3cy5jb20uYXUvd29ybGQvZmJpLWFuZC1hbGxpZXMtc2VpemUtZGFya3dlYi1zaXRlLW9mLXdvcmxkcy1tb3N0LXByb2xpZmljLXJhbnNvbXdhcmUtZ2FuZy8xMjRiMDc0ZC1kMTIyLTRlYjctOGNjNS1kNmU0NjU5ZmUwNzfSAUVodHRwczovL2FtcC45bmV3cy5jb20uYXUvYXJ0aWNsZS8xMjRiMDc0ZC1kMTIyLTRlYjctOGNjNS1kNmU0NjU5ZmUwNzc",
      published_date: "Tue, 20 Feb 2024 06:21:58 GMT",
      source: "9News",
      source_href: "https://www.9news.com.au",
    },
    {
      title: "Single mum sacked for eating leftover tuna sandwich - 9News",
      link: "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LjluZXdzLmNvbS5hdS93b3JsZC93b3JsZC1uZXdzLWNsZWFuZXItc2Fja2VkLXR1bmEtc2FuZHdpY2gvNTE0ZmE0NmItYzU3MS00MTI2LWFiNTItODIzNGM5MjIxNDAx0gFFaHR0cHM6Ly9hbXAuOW5ld3MuY29tLmF1L2FydGljbGUvNTE0ZmE0NmItYzU3MS00MTI2LWFiNTItODIzNGM5MjIxNDAx?oc=5",
      entry_id:
        "CBMia2h0dHBzOi8vd3d3LjluZXdzLmNvbS5hdS93b3JsZC93b3JsZC1uZXdzLWNsZWFuZXItc2Fja2VkLXR1bmEtc2FuZHdpY2gvNTE0ZmE0NmItYzU3MS00MTI2LWFiNTItODIzNGM5MjIxNDAx0gFFaHR0cHM6Ly9hbXAuOW5ld3MuY29tLmF1L2FydGljbGUvNTE0ZmE0NmItYzU3MS00MTI2LWFiNTItODIzNGM5MjIxNDAx",
      published_date: "Tue, 20 Feb 2024 05:29:10 GMT",
      source: "9News",
      source_href: "https://www.9news.com.au",
    },
    {
      title:
        "BHP says Australian support for nickel miners 'may not be enough' to save industry - Financial Times",
      link: "https://news.google.com/rss/articles/CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50LzQ5NzNhMzI2LWUwZmUtNDA3YS04NTA2LWU4ODdlZWMyN2VmMdIBAA?oc=5",
      entry_id:
        "CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50LzQ5NzNhMzI2LWUwZmUtNDA3YS04NTA2LWU4ODdlZWMyN2VmMdIBAA",
      published_date: "Tue, 20 Feb 2024 00:43:24 GMT",
      source: "Financial Times",
      source_href: "https://www.ft.com",
    },
    {
      title:
        "Jayne Hrdlicka to step down as Virgin Australia CEO after almost four years, says time is right to 'pass the baton' - ABC News",
      link: "https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbmV3cy8yMDI0LTAyLTIwL3Zpcmdpbi1hdXN0cmFsaWEtY2VvLWpheW5lLWhyZGxpY2thLXN0ZXBzLWRvd24tZnJvbS1haXJsaW5lLzEwMzQ4OTg3ONIBKGh0dHBzOi8vYW1wLmFiYy5uZXQuYXUvYXJ0aWNsZS8xMDM0ODk4Nzg?oc=5",
      entry_id:
        "CBMibGh0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbmV3cy8yMDI0LTAyLTIwL3Zpcmdpbi1hdXN0cmFsaWEtY2VvLWpheW5lLWhyZGxpY2thLXN0ZXBzLWRvd24tZnJvbS1haXJsaW5lLzEwMzQ4OTg3ONIBKGh0dHBzOi8vYW1wLmFiYy5uZXQuYXUvYXJ0aWNsZS8xMDM0ODk4Nzg",
      published_date: "Tue, 20 Feb 2024 05:45:04 GMT",
      source: "ABC News",
      source_href: "https://www.abc.net.au",
    },
    {
      title: "ANZ's $3.2 bln Suncorp bank unit buyout approved by tribunal - Reuters",
      link: "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZGVhbHMvYW56cy0zMi1ibG4tc3VuY29ycC1iYW5rLXVuaXQtYnV5b3V0LWRlY2lzaW9uLWR1ZS10dWVzZGF5LTIwMjQtMDItMTkv0gEA?oc=5",
      entry_id:
        "CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZGVhbHMvYW56cy0zMi1ibG4tc3VuY29ycC1iYW5rLXVuaXQtYnV5b3V0LWRlY2lzaW9uLWR1ZS10dWVzZGF5LTIwMjQtMDItMTkv0gEA",
      published_date: "Tue, 20 Feb 2024 07:43:00 GMT",
      source: "Reuters",
      source_href: "https://www.reuters.com",
    },
    {
      title:
        "Shoppers sceptical of whether Coles or Woolworths specials offer actual savings, Choice survey shows - The Guardian Australia",
      link: "https://news.google.com/rss/articles/CBMimgFodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vYXVzdHJhbGlhLW5ld3MvMjAyNC9mZWIvMjAvZG8tY29sZXMtd29vbHdvcnRocy1zcGVjaWFscy1hY3R1YWxseS1vZmZlci1zYXZpbmdzLWNob2ljZS1zdXJ2ZXktc3VwZXJtYXJrZXQtcHJpY2UtZ291Z2luZy1pbnF1aXJ50gGaAWh0dHBzOi8vYW1wLnRoZWd1YXJkaWFuLmNvbS9hdXN0cmFsaWEtbmV3cy8yMDI0L2ZlYi8yMC9kby1jb2xlcy13b29sd29ydGhzLXNwZWNpYWxzLWFjdHVhbGx5LW9mZmVyLXNhdmluZ3MtY2hvaWNlLXN1cnZleS1zdXBlcm1hcmtldC1wcmljZS1nb3VnaW5nLWlucXVpcnk?oc=5",
      entry_id:
        "CBMimgFodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vYXVzdHJhbGlhLW5ld3MvMjAyNC9mZWIvMjAvZG8tY29sZXMtd29vbHdvcnRocy1zcGVjaWFscy1hY3R1YWxseS1vZmZlci1zYXZpbmdzLWNob2ljZS1zdXJ2ZXktc3VwZXJtYXJrZXQtcHJpY2UtZ291Z2luZy1pbnF1aXJ50gGaAWh0dHBzOi8vYW1wLnRoZWd1YXJkaWFuLmNvbS9hdXN0cmFsaWEtbmV3cy8yMDI0L2ZlYi8yMC9kby1jb2xlcy13b29sd29ydGhzLXNwZWNpYWxzLWFjdHVhbGx5LW9mZmVyLXNhdmluZ3MtY2hvaWNlLXN1cnZleS1zdXBlcm1hcmtldC1wcmljZS1nb3VnaW5nLWlucXVpcnk",
      published_date: "Tue, 20 Feb 2024 05:42:00 GMT",
      source: "The Guardian Australia",
      source_href: "https://www.theguardian.com",
    },
    {
      title:
        "Human HEPATOMUNE® cultures for long-term culturing : Get Quote, RFQ, Price or Buy - News-Medical.Net",
      link: "https://news.google.com/rss/articles/CBMiUmh0dHBzOi8vd3d3Lm5ld3MtbWVkaWNhbC5uZXQvSHVtYW4tSEVQQVRPTVVORWMyYWUtY3VsdHVyZXMtZm9yLWxvbmctdGVybS1jdWx0dXJpbmfSAQA?oc=5",
      entry_id:
        "CBMiUmh0dHBzOi8vd3d3Lm5ld3MtbWVkaWNhbC5uZXQvSHVtYW4tSEVQQVRPTVVORWMyYWUtY3VsdHVyZXMtZm9yLWxvbmctdGVybS1jdWx0dXJpbmfSAQA",
      published_date: "Tue, 20 Feb 2024 08:57:38 GMT",
      source: "News-Medical.Net",
      source_href: "https://www.news-medical.net",
    },
    {
      title: "Retired couple charged almost $2000 for two light bulb replacements - Nine Shows",
      link: "https://news.google.com/rss/articles/CBMipAFodHRwczovLzlub3cubmluZS5jb20uYXUvYS1jdXJyZW50LWFmZmFpci9ub3RvcmlvdXMtcGx1bWJpbmctYW5kLWVsZWN0cmljYWwtY29tcGFueS1zdHJpa2VzLWFnYWluLXdpdGgtMjAwMC1saWdodC1zZXJ2aWNlLXF1b3RlL2I2NDNiZDJhLWM4NWYtNDE5ZS04YTNjLWU1MzA4OTM5N2Q3MNIBRGh0dHBzOi8vYW1wLm5pbmUuY29tLmF1L2FydGljbGUvYjY0M2JkMmEtYzg1Zi00MTllLThhM2MtZTUzMDg5Mzk3ZDcw?oc=5",
      entry_id:
        "CBMipAFodHRwczovLzlub3cubmluZS5jb20uYXUvYS1jdXJyZW50LWFmZmFpci9ub3RvcmlvdXMtcGx1bWJpbmctYW5kLWVsZWN0cmljYWwtY29tcGFueS1zdHJpa2VzLWFnYWluLXdpdGgtMjAwMC1saWdodC1zZXJ2aWNlLXF1b3RlL2I2NDNiZDJhLWM4NWYtNDE5ZS04YTNjLWU1MzA4OTM5N2Q3MNIBRGh0dHBzOi8vYW1wLm5pbmUuY29tLmF1L2FydGljbGUvYjY0M2JkMmEtYzg1Zi00MTllLThhM2MtZTUzMDg5Mzk3ZDcw",
      published_date: "Tue, 20 Feb 2024 08:57:29 GMT",
      source: "Nine Shows",
      source_href: "https://9now.nine.com.au",
    },
    {
      title:
        "I’ve always hated the sounds of chewing, slurping and sniffling – but now I know I’m not alone - The Guardian",
      link: "https://news.google.com/rss/articles/CBMihwFodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vYm9va3MvMjAyNC9mZWIvMTkvaXZlLWFsd2F5cy1oYXRlZC10aGUtc291bmRzLW9mLWNoZXdpbmctc2x1cnBpbmctYW5kLXNuaWZmbGluZy1idXQtbm93LWkta25vdy1pbS1ub3QtYWxvbmXSAQA?oc=5",
      entry_id:
        "CBMihwFodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vYm9va3MvMjAyNC9mZWIvMTkvaXZlLWFsd2F5cy1oYXRlZC10aGUtc291bmRzLW9mLWNoZXdpbmctc2x1cnBpbmctYW5kLXNuaWZmbGluZy1idXQtbm93LWkta25vdy1pbS1ub3QtYWxvbmXSAQA",
      published_date: "Sun, 18 Feb 2024 23:12:00 GMT",
      source: "The Guardian",
      source_href: "https://www.theguardian.com",
    },
    {
      title: "My cousin gave her daughter the worst name ever - Daily Mail",
      link: "https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9mZW1haWwvcGFyZW50aW5nL2FydGljbGUtMTMxMDIyMjEvUmVkZGl0LWNvdXNpbi1nYXZlLWRhdWdodGVyLXdvcnN0LW5hbWUuaHRtbNIBAA?oc=5",
      entry_id:
        "CBMiaWh0dHBzOi8vd3d3LmRhaWx5bWFpbC5jby51ay9mZW1haWwvcGFyZW50aW5nL2FydGljbGUtMTMxMDIyMjEvUmVkZGl0LWNvdXNpbi1nYXZlLWRhdWdodGVyLXdvcnN0LW5hbWUuaHRtbNIBAA",
      published_date: "Tue, 20 Feb 2024 02:22:00 GMT",
      source: "Daily Mail",
      source_href: "https://www.dailymail.co.uk",
    },
    {
      title: "Sydney Swift fans fear the worst - news.com.au",
      link: "https://news.google.com/rss/articles/CBMinwFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9lbnRlcnRhaW5tZW50L211c2ljL3RvdXJzL2V4dHJlbWUtd2VhdGhlci1jb25kaXRpb25zLXB1dC10YXlsb3Itc3dpZnRzLXN5ZG5leS1zaG93cy1hdC1yaXNrL25ld3Mtc3RvcnkvNmZlNTgzZjllYTUyNTk2NTc0MTA0ODk1Y2Y2ZDIzNWbSAaMBaHR0cHM6Ly93d3cubmV3cy5jb20uYXUvZW50ZXJ0YWlubWVudC9tdXNpYy90b3Vycy9leHRyZW1lLXdlYXRoZXItY29uZGl0aW9ucy1wdXQtdGF5bG9yLXN3aWZ0cy1zeWRuZXktc2hvd3MtYXQtcmlzay9uZXdzLXN0b3J5LzZmZTU4M2Y5ZWE1MjU5NjU3NDEwNDg5NWNmNmQyMzVmP2FtcA?oc=5",
      entry_id:
        "CBMinwFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9lbnRlcnRhaW5tZW50L211c2ljL3RvdXJzL2V4dHJlbWUtd2VhdGhlci1jb25kaXRpb25zLXB1dC10YXlsb3Itc3dpZnRzLXN5ZG5leS1zaG93cy1hdC1yaXNrL25ld3Mtc3RvcnkvNmZlNTgzZjllYTUyNTk2NTc0MTA0ODk1Y2Y2ZDIzNWbSAaMBaHR0cHM6Ly93d3cubmV3cy5jb20uYXUvZW50ZXJ0YWlubWVudC9tdXNpYy90b3Vycy9leHRyZW1lLXdlYXRoZXItY29uZGl0aW9ucy1wdXQtdGF5bG9yLXN3aWZ0cy1zeWRuZXktc2hvd3MtYXQtcmlzay9uZXdzLXN0b3J5LzZmZTU4M2Y5ZWE1MjU5NjU3NDEwNDg5NWNmNmQyMzVmP2FtcA",
      published_date: "Tue, 20 Feb 2024 05:51:31 GMT",
      source: "news.com.au",
      source_href: "https://www.news.com.au",
    },
    {
      title: "Star’s son looks just like his mum in new pics - news.com.au",
      link: "https://news.google.com/rss/articles/CBMiyAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9lbnRlcnRhaW5tZW50L2NlbGVicml0eS1saWZlL2NlbGVicml0eS1waG90b3Mvc2FyYWgtamVzc2ljYS1wYXJrZXItYW5kLW1hdHRoZXctYnJvZGVyaWNrcy1zb24tamFtZXMtd2lsa2llLWJyb2Rlcmljay1pcy1hbGwtZ3Jvd24tdXAvbmV3cy1zdG9yeS80MTA1NzU4M2FmMGY3MGM1MzQxNjIwM2RkNzUxZjQyZNIBzAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9lbnRlcnRhaW5tZW50L2NlbGVicml0eS1saWZlL2NlbGVicml0eS1waG90b3Mvc2FyYWgtamVzc2ljYS1wYXJrZXItYW5kLW1hdHRoZXctYnJvZGVyaWNrcy1zb24tamFtZXMtd2lsa2llLWJyb2Rlcmljay1pcy1hbGwtZ3Jvd24tdXAvbmV3cy1zdG9yeS80MTA1NzU4M2FmMGY3MGM1MzQxNjIwM2RkNzUxZjQyZD9hbXA?oc=5",
      entry_id:
        "CBMiyAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9lbnRlcnRhaW5tZW50L2NlbGVicml0eS1saWZlL2NlbGVicml0eS1waG90b3Mvc2FyYWgtamVzc2ljYS1wYXJrZXItYW5kLW1hdHRoZXctYnJvZGVyaWNrcy1zb24tamFtZXMtd2lsa2llLWJyb2Rlcmljay1pcy1hbGwtZ3Jvd24tdXAvbmV3cy1zdG9yeS80MTA1NzU4M2FmMGY3MGM1MzQxNjIwM2RkNzUxZjQyZNIBzAFodHRwczovL3d3dy5uZXdzLmNvbS5hdS9lbnRlcnRhaW5tZW50L2NlbGVicml0eS1saWZlL2NlbGVicml0eS1waG90b3Mvc2FyYWgtamVzc2ljYS1wYXJrZXItYW5kLW1hdHRoZXctYnJvZGVyaWNrcy1zb24tamFtZXMtd2lsa2llLWJyb2Rlcmljay1pcy1hbGwtZ3Jvd24tdXAvbmV3cy1zdG9yeS80MTA1NzU4M2FmMGY3MGM1MzQxNjIwM2RkNzUxZjQyZD9hbXA",
      published_date: "Tue, 20 Feb 2024 05:04:49 GMT",
      source: "news.com.au",
      source_href: "https://www.news.com.au",
    },
    {
      title:
        "Where you might recognise new bride Madeleine from as she ties the knot on MAFS 2024 - Nine Shows",
      link: "https://news.google.com/rss/articles/CBMimQFodHRwczovLzlub3cubmluZS5jb20uYXUvbWFycmllZC1hdC1maXJzdC1zaWdodC9tYWZzLTIwMjQtbWFkZWxlaW5lLW1heHdlbGwtYWN0b3ItaG9tZS1hbmQtYXdheS13aG8taXMtc2hlLWV4cGxhaW5lci83ZTMwYTQ3ZC03YWU0LTQ5OWQtYmI5Ni0yYTU0YTMzNTc4OGXSAURodHRwczovL2FtcC5uaW5lLmNvbS5hdS9hcnRpY2xlLzdlMzBhNDdkLTdhZTQtNDk5ZC1iYjk2LTJhNTRhMzM1Nzg4ZQ?oc=5",
      entry_id:
        "CBMimQFodHRwczovLzlub3cubmluZS5jb20uYXUvbWFycmllZC1hdC1maXJzdC1zaWdodC9tYWZzLTIwMjQtbWFkZWxlaW5lLW1heHdlbGwtYWN0b3ItaG9tZS1hbmQtYXdheS13aG8taXMtc2hlLWV4cGxhaW5lci83ZTMwYTQ3ZC03YWU0LTQ5OWQtYmI5Ni0yYTU0YTMzNTc4OGXSAURodHRwczovL2FtcC5uaW5lLmNvbS5hdS9hcnRpY2xlLzdlMzBhNDdkLTdhZTQtNDk5ZC1iYjk2LTJhNTRhMzM1Nzg4ZQ",
      published_date: "Tue, 20 Feb 2024 09:53:19 GMT",
      source: "Nine Shows",
      source_href: "https://9now.nine.com.au",
    },
    {
      title:
        "Prince Harry will not return to royal duties ‘in any way, shape or form’, insiders claim - Sky News Australia",
      link: "https://news.google.com/rss/articles/CBMiyAFodHRwczovL3d3dy5za3luZXdzLmNvbS5hdS93b3JsZC1uZXdzL3ByaW5jZS1oYXJyeS13aWxsLW5vdC1yZXR1cm4tdG8tcm95YWwtZHV0aWVzLWluLWFueS13YXktc2hhcGUtb3ItZm9ybS1hbWlkLWtpbmctY2hhcmxlcy1jYW5jZXItZGlhZ25vc2lzLXNvdXJjZXMtY2xhaW0vbmV3cy1zdG9yeS8xMTRkOGUxNWNlMzgwMDFkNzhjNmQxODkxMTBkMjM3Y9IBzAFodHRwczovL3d3dy5za3luZXdzLmNvbS5hdS93b3JsZC1uZXdzL3ByaW5jZS1oYXJyeS13aWxsLW5vdC1yZXR1cm4tdG8tcm95YWwtZHV0aWVzLWluLWFueS13YXktc2hhcGUtb3ItZm9ybS1hbWlkLWtpbmctY2hhcmxlcy1jYW5jZXItZGlhZ25vc2lzLXNvdXJjZXMtY2xhaW0vbmV3cy1zdG9yeS8xMTRkOGUxNWNlMzgwMDFkNzhjNmQxODkxMTBkMjM3Yz9hbXA?oc=5",
      entry_id:
        "CBMiyAFodHRwczovL3d3dy5za3luZXdzLmNvbS5hdS93b3JsZC1uZXdzL3ByaW5jZS1oYXJyeS13aWxsLW5vdC1yZXR1cm4tdG8tcm95YWwtZHV0aWVzLWluLWFueS13YXktc2hhcGUtb3ItZm9ybS1hbWlkLWtpbmctY2hhcmxlcy1jYW5jZXItZGlhZ25vc2lzLXNvdXJjZXMtY2xhaW0vbmV3cy1zdG9yeS8xMTRkOGUxNWNlMzgwMDFkNzhjNmQxODkxMTBkMjM3Y9IBzAFodHRwczovL3d3dy5za3luZXdzLmNvbS5hdS93b3JsZC1uZXdzL3ByaW5jZS1oYXJyeS13aWxsLW5vdC1yZXR1cm4tdG8tcm95YWwtZHV0aWVzLWluLWFueS13YXktc2hhcGUtb3ItZm9ybS1hbWlkLWtpbmctY2hhcmxlcy1jYW5jZXItZGlhZ25vc2lzLXNvdXJjZXMtY2xhaW0vbmV3cy1zdG9yeS8xMTRkOGUxNWNlMzgwMDFkNzhjNmQxODkxMTBkMjM3Yz9hbXA",
      published_date: "Mon, 19 Feb 2024 12:16:25 GMT",
      source: "Sky News Australia",
      source_href: "https://www.skynews.com.au",
    },
    {
      title: "Demons drugs twist: AFL responds to Smith trafficking accusations - Herald Sun",
      link: "https://news.google.com/rss/articles/CBMinwFodHRwczovL3d3dy5oZXJhbGRzdW4uY29tLmF1L3Nwb3J0L2FmbC9uZXdzL2FmbC0yMDI0LW1lbGJvdXJuZS1mb290YmFsbGVyLWpvZWwtc21pdGgtYWNjdXNlZC1vZi1jb2NhaW5lLXRyYWZmaWNraW5nL25ld3Mtc3RvcnkvYzBkZGEwNjRiYjIwZTk5OTg0YjI3YjE5NDRiOTFjM2LSAaMBaHR0cHM6Ly93d3cuaGVyYWxkc3VuLmNvbS5hdS9zcG9ydC9hZmwvbmV3cy9hZmwtMjAyNC1tZWxib3VybmUtZm9vdGJhbGxlci1qb2VsLXNtaXRoLWFjY3VzZWQtb2YtY29jYWluZS10cmFmZmlja2luZy9uZXdzLXN0b3J5L2MwZGRhMDY0YmIyMGU5OTk4NGIyN2IxOTQ0YjkxYzNiP2FtcA?oc=5",
      entry_id:
        "CBMinwFodHRwczovL3d3dy5oZXJhbGRzdW4uY29tLmF1L3Nwb3J0L2FmbC9uZXdzL2FmbC0yMDI0LW1lbGJvdXJuZS1mb290YmFsbGVyLWpvZWwtc21pdGgtYWNjdXNlZC1vZi1jb2NhaW5lLXRyYWZmaWNraW5nL25ld3Mtc3RvcnkvYzBkZGEwNjRiYjIwZTk5OTg0YjI3YjE5NDRiOTFjM2LSAaMBaHR0cHM6Ly93d3cuaGVyYWxkc3VuLmNvbS5hdS9zcG9ydC9hZmwvbmV3cy9hZmwtMjAyNC1tZWxib3VybmUtZm9vdGJhbGxlci1qb2VsLXNtaXRoLWFjY3VzZWQtb2YtY29jYWluZS10cmFmZmlja2luZy9uZXdzLXN0b3J5L2MwZGRhMDY0YmIyMGU5OTk4NGIyN2IxOTQ0YjkxYzNiP2FtcA",
      published_date: "Tue, 20 Feb 2024 09:45:37 GMT",
      source: "Herald Sun",
      source_href: "https://www.heraldsun.com.au",
    },
    {
      title: "Swift fix needed for MCG after concerts trashed turf - Herald Sun",
      link: "https://news.google.com/rss/articles/CBMilQFodHRwczovL3d3dy5oZXJhbGRzdW4uY29tLmF1L25ld3MvdmljdG9yaWEvbWVnYS1yZXBhaXItam9iLW5lZWRlZC1mb3ItbWNnLWFmdGVyLXN3aWZ0bWFuaWEtc2VlLXRoZS1waG90b3MvbmV3cy1zdG9yeS9hZGNlMDVmNjM1OGYyOGRjYjE4ZDhmNWU0OWIzYTVjOdIBmQFodHRwczovL3d3dy5oZXJhbGRzdW4uY29tLmF1L25ld3MvdmljdG9yaWEvbWVnYS1yZXBhaXItam9iLW5lZWRlZC1mb3ItbWNnLWFmdGVyLXN3aWZ0bWFuaWEtc2VlLXRoZS1waG90b3MvbmV3cy1zdG9yeS9hZGNlMDVmNjM1OGYyOGRjYjE4ZDhmNWU0OWIzYTVjOT9hbXA?oc=5",
      entry_id:
        "CBMilQFodHRwczovL3d3dy5oZXJhbGRzdW4uY29tLmF1L25ld3MvdmljdG9yaWEvbWVnYS1yZXBhaXItam9iLW5lZWRlZC1mb3ItbWNnLWFmdGVyLXN3aWZ0bWFuaWEtc2VlLXRoZS1waG90b3MvbmV3cy1zdG9yeS9hZGNlMDVmNjM1OGYyOGRjYjE4ZDhmNWU0OWIzYTVjOdIBmQFodHRwczovL3d3dy5oZXJhbGRzdW4uY29tLmF1L25ld3MvdmljdG9yaWEvbWVnYS1yZXBhaXItam9iLW5lZWRlZC1mb3ItbWNnLWFmdGVyLXN3aWZ0bWFuaWEtc2VlLXRoZS1waG90b3MvbmV3cy1zdG9yeS9hZGNlMDVmNjM1OGYyOGRjYjE4ZDhmNWU0OWIzYTVjOT9hbXA",
      published_date: "Tue, 20 Feb 2024 09:49:40 GMT",
      source: "Herald Sun",
      source_href: "https://www.heraldsun.com.au",
    },
    {
      title:
        "NRL news 2024: Pre-season challenge team lists, trials teams, ins and outs, AJ Brimson named at centre, Titans, Stephen Crichton, Bulldogs, Mitchell Moses returns, Eels - Fox Sports",
      link: "https://news.google.com/rss/articles/CBMi-wFodHRwczovL3d3dy5mb3hzcG9ydHMuY29tLmF1L25ybC9ucmwtcHJlbWllcnNoaXAvbnJsLW5ld3MtMjAyNC1wcmVzZWFzb24tY2hhbGxlbmdlLXRlYW0tbGlzdHMtdHJpYWxzLXRlYW1zLWlucy1hbmQtb3V0cy1hai1icmltc29uLW5hbWVkLWF0LWNlbnRyZS10aXRhbnMtc3RlcGhlbi1jcmljaHRvbi1idWxsZG9ncy1taXRjaGVsbC1tb3Nlcy1yZXR1cm5zLWVlbHMvbmV3cy1zdG9yeS9hZjZlMTk0ZTgxNWNhNjVlZTgzMzQ2NjdlOWIyMWMxZNIBAA?oc=5",
      entry_id:
        "CBMi-wFodHRwczovL3d3dy5mb3hzcG9ydHMuY29tLmF1L25ybC9ucmwtcHJlbWllcnNoaXAvbnJsLW5ld3MtMjAyNC1wcmVzZWFzb24tY2hhbGxlbmdlLXRlYW0tbGlzdHMtdHJpYWxzLXRlYW1zLWlucy1hbmQtb3V0cy1hai1icmltc29uLW5hbWVkLWF0LWNlbnRyZS10aXRhbnMtc3RlcGhlbi1jcmljaHRvbi1idWxsZG9ncy1taXRjaGVsbC1tb3Nlcy1yZXR1cm5zLWVlbHMvbmV3cy1zdG9yeS9hZjZlMTk0ZTgxNWNhNjVlZTgzMzQ2NjdlOWIyMWMxZNIBAA",
      published_date: "Tue, 20 Feb 2024 05:48:22 GMT",
      source: "Fox Sports",
      source_href: "https://www.foxsports.com.au",
    },
    {
      title: "Rising stocks: Players who shone in Pre-Season Challenge Week 1 - NRL.COM",
      link: "https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3Lm5ybC5jb20vbmV3cy8yMDI0LzAyLzIwL3Jpc2luZy1zdG9ja3MtcGxheWVycy13aG8tc2hvbmUtaW4tcHJlLXNlYXNvbi1jaGFsbGVuZ2Utd2Vlay0xL9IBZ2h0dHBzOi8vd3d3Lm5ybC5jb20vbmV3cy8yMDI0LzAyLzIwL3Jpc2luZy1zdG9ja3MtcGxheWVycy13aG8tc2hvbmUtaW4tcHJlLXNlYXNvbi1jaGFsbGVuZ2Utd2Vlay0xL2FtcC8?oc=5",
      entry_id:
        "CBMiY2h0dHBzOi8vd3d3Lm5ybC5jb20vbmV3cy8yMDI0LzAyLzIwL3Jpc2luZy1zdG9ja3MtcGxheWVycy13aG8tc2hvbmUtaW4tcHJlLXNlYXNvbi1jaGFsbGVuZ2Utd2Vlay0xL9IBZ2h0dHBzOi8vd3d3Lm5ybC5jb20vbmV3cy8yMDI0LzAyLzIwL3Jpc2luZy1zdG9ja3MtcGxheWVycy13aG8tc2hvbmUtaW4tcHJlLXNlYXNvbi1jaGFsbGVuZ2Utd2Vlay0xL2FtcC8",
      published_date: "Tue, 20 Feb 2024 01:01:11 GMT",
      source: "NRL.COM",
      source_href: "https://www.nrl.com",
    },
    {
      title: "Bubble-Like 'Stars Within Stars' Could Explain Black Hole Weirdness - ScienceAlert",
      link: "https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vYnViYmxlLWxpa2Utc3RhcnMtd2l0aGluLXN0YXJzLWNvdWxkLWV4cGxhaW4tYmxhY2staG9sZS13ZWlyZG5lc3PSAQA?oc=5",
      entry_id:
        "CBMiXmh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vYnViYmxlLWxpa2Utc3RhcnMtd2l0aGluLXN0YXJzLWNvdWxkLWV4cGxhaW4tYmxhY2staG9sZS13ZWlyZG5lc3PSAQA",
      published_date: "Tue, 20 Feb 2024 05:21:28 GMT",
      source: "ScienceAlert",
      source_href: "https://www.sciencealert.com",
    },
    {
      title: "Australian scientists find fastest growing black hole in universe - ABC News",
      link: "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbGlzdGVuL3Byb2dyYW1zL3BtL2Zhc3Rlc3QtZ3Jvd2luZy1ibGFjay1ob2xlLWluLXVuaXZlcnNlLS8xMDM0OTEyNjjSAQA?oc=5",
      entry_id:
        "CBMiW2h0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbGlzdGVuL3Byb2dyYW1zL3BtL2Zhc3Rlc3QtZ3Jvd2luZy1ibGFjay1ob2xlLWluLXVuaXZlcnNlLS8xMDM0OTEyNjjSAQA",
      published_date: "Tue, 20 Feb 2024 07:30:00 GMT",
      source: "ABC News",
      source_href: "https://www.abc.net.au",
    },
    {
      title:
        "Novel ASO screening study paves the way for duchenne muscular dystrophy (DMD) therapy advancements - News-Medical.Net",
      link: "https://news.google.com/rss/articles/CBMimAFodHRwczovL3d3dy5uZXdzLW1lZGljYWwubmV0L3doaXRlcGFwZXIvMjAyNDAyMjAvTm92ZWwtQVNPLVNjcmVlbmluZy1TdHVkeS1QYXZlcy10aGUtV2F5LWZvci1EdWNoZW5uZS1NdXNjdWxhci1EeXN0cm9waHktKERNRCktVGhlcmFweS1BZHZhbmNlbWVudHMuYXNweNIBAA?oc=5",
      entry_id:
        "CBMimAFodHRwczovL3d3dy5uZXdzLW1lZGljYWwubmV0L3doaXRlcGFwZXIvMjAyNDAyMjAvTm92ZWwtQVNPLVNjcmVlbmluZy1TdHVkeS1QYXZlcy10aGUtV2F5LWZvci1EdWNoZW5uZS1NdXNjdWxhci1EeXN0cm9waHktKERNRCktVGhlcmFweS1BZHZhbmNlbWVudHMuYXNweNIBAA",
      published_date: "Tue, 20 Feb 2024 10:11:00 GMT",
      source: "News-Medical.Net",
      source_href: "https://www.news-medical.net",
    },
    {
      title: "Reptiles Assist in Understanding Threats to Aussie Biodiversity - Mirage News",
      link: "https://news.google.com/rss/articles/CBMiT2h0dHBzOi8vd3d3Lm1pcmFnZW5ld3MuY29tL3JlcHRpbGVzLWFzc2lzdC1pbi11bmRlcnN0YW5kaW5nLXRocmVhdHMtdG8tMTE3NzE0Ni_SAQA?oc=5",
      entry_id:
        "CBMiT2h0dHBzOi8vd3d3Lm1pcmFnZW5ld3MuY29tL3JlcHRpbGVzLWFzc2lzdC1pbi11bmRlcnN0YW5kaW5nLXRocmVhdHMtdG8tMTE3NzE0Ni_SAQA",
      published_date: "Tue, 20 Feb 2024 03:36:00 GMT",
      source: "Mirage News",
      source_href: "https://www.miragenews.com",
    },
    {
      title:
        "Women see more benefits to their health with exercise than men, study suggests - AppleValleyNewsNow.com",
      link: "https://news.google.com/rss/articles/CBMirgFodHRwczovL3d3dy5hcHBsZXZhbGxleW5ld3Nub3cuY29tL25ld3MvaGVhbHRoL3dvbWVuLXNlZS1tb3JlLWJlbmVmaXRzLXRvLXRoZWlyLWhlYWx0aC13aXRoLWV4ZXJjaXNlLXRoYW4tbWVuLXN0dWR5LXN1Z2dlc3RzL2FydGljbGVfZjk0NGY3OGYtNzExZC01NWM2LTkyOGMtYjBhYmZlNmQ5MWM0Lmh0bWzSAQA?oc=5",
      entry_id:
        "CBMirgFodHRwczovL3d3dy5hcHBsZXZhbGxleW5ld3Nub3cuY29tL25ld3MvaGVhbHRoL3dvbWVuLXNlZS1tb3JlLWJlbmVmaXRzLXRvLXRoZWlyLWhlYWx0aC13aXRoLWV4ZXJjaXNlLXRoYW4tbWVuLXN0dWR5LXN1Z2dlc3RzL2FydGljbGVfZjk0NGY3OGYtNzExZC01NWM2LTkyOGMtYjBhYmZlNmQ5MWM0Lmh0bWzSAQA",
      published_date: "Mon, 19 Feb 2024 21:00:09 GMT",
      source: "AppleValleyNewsNow.com",
      source_href: "https://www.applevalleynewsnow.com",
    },
    {
      title:
        "Missing gut microbes after antibiotics and a high-fat diet may be to blame for sugar-free candy and gum giving you gas - News-Medical.Net",
      link: "https://news.google.com/rss/articles/CBMipgFodHRwczovL3d3dy5uZXdzLW1lZGljYWwubmV0L25ld3MvMjAyNDAyMjAvTWlzc2luZy1ndXQtbWljcm9iZXMtYWZ0ZXItYW50aWJpb3RpY3MtYW5kLWEtaGlnaC1mYXQtZGlldC1tYXktYmUtdG8tYmxhbWUtZm9yLXN1Z2FyLWZyZWUtY2FuZHktYW5kLWd1bS1naXZpbmcteW91LWdhcy5hc3B40gEA?oc=5",
      entry_id:
        "CBMipgFodHRwczovL3d3dy5uZXdzLW1lZGljYWwubmV0L25ld3MvMjAyNDAyMjAvTWlzc2luZy1ndXQtbWljcm9iZXMtYWZ0ZXItYW50aWJpb3RpY3MtYW5kLWEtaGlnaC1mYXQtZGlldC1tYXktYmUtdG8tYmxhbWUtZm9yLXN1Z2FyLWZyZWUtY2FuZHktYW5kLWd1bS1naXZpbmcteW91LWdhcy5hc3B40gEA",
      published_date: "Tue, 20 Feb 2024 08:17:00 GMT",
      source: "News-Medical.Net",
      source_href: "https://www.news-medical.net",
    },
    {
      title: "Does masturbating too much cause erectile dysfunction? - Body+Soul",
      link: "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5ib2R5YW5kc291bC5jb20uYXUvaGVhbHRoL2hlYWx0aC1uZXdzL2Nhbi1tYXN0dXJiYXRpbmctY2F1c2UtZXJlY3RpbGUtZHlzZnVuY3Rpb24vbmV3cy1zdG9yeS9hYWZhMDg5NGY3ODk5NzIwMGU4MWQyYzk3MzBmMzE3ONIBAA?oc=5",
      entry_id:
        "CBMiiQFodHRwczovL3d3dy5ib2R5YW5kc291bC5jb20uYXUvaGVhbHRoL2hlYWx0aC1uZXdzL2Nhbi1tYXN0dXJiYXRpbmctY2F1c2UtZXJlY3RpbGUtZHlzZnVuY3Rpb24vbmV3cy1zdG9yeS9hYWZhMDg5NGY3ODk5NzIwMGU4MWQyYzk3MzBmMzE3ONIBAA",
      published_date: "Tue, 20 Feb 2024 06:11:21 GMT",
      source: "Body+Soul",
      source_href: "https://www.bodyandsoul.com.au",
    },
    {
      title:
        "Human whole blood for drug target discovery and immune response analysis - News-Medical.Net",
      link: "https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3Lm5ld3MtbWVkaWNhbC5uZXQvSHVtYW4td2hvbGUtYmxvb2QtZm9yLWRydWctdGFyZ2V0LWRpc2NvdmVyeS1hbmQtaW1tdW5lLXJlc3BvbnNlLWFuYWx5c2lz0gEA?oc=5",
      entry_id:
        "CBMiZWh0dHBzOi8vd3d3Lm5ld3MtbWVkaWNhbC5uZXQvSHVtYW4td2hvbGUtYmxvb2QtZm9yLWRydWctdGFyZ2V0LWRpc2NvdmVyeS1hbmQtaW1tdW5lLXJlc3BvbnNlLWFuYWx5c2lz0gEA",
      published_date: "Tue, 20 Feb 2024 08:57:38 GMT",
      source: "News-Medical.Net",
      source_href: "https://www.news-medical.net",
    },
  ];

export const fetchNewsData = async () => {
    try {
        // const response =
        // await axios.get(`${API_BASE_URL}/news`);
        // return response.data;
        return NewsData;
    } catch (error) {
        console.error("Error fetching news data:", error);
        throw error;
    }
};
