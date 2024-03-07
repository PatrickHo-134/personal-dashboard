## Resolve the issue with "base 64 deprecation"
After installed pygooglenews, on starting of the server, you may face this error
```
/venv/lib/python3.11/site-packages/feedparser.py", line 93, in <module>
    _base64decode = getattr(base64, 'decodebytes', base64.decodestring)
                                                   ^^^^^^^^^^^^^^^^^^^
AttributeError: module 'base64' has no attribute 'decodestring'
```

Run the following commands to reinstall some dependencies
```
pip3 install "setuptools<58"
pip3 install -U --no-deps "dateparser>=1.0.0"
pip3 install -U --no-deps "feedparser>=6.0.8"
```