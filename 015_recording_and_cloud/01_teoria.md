# Nagrywanie (record-correlate-replay)

Do nagrywania użyjemy pluginu [k6 Browser Recorder](https://chrome.google.com/webstore/search/k6) dla Chrome'a. Będzie nam równiez potrzebne konto w k6 Cloud. Możecie do zalogowania wykorzystać konto na Gicie.

![cloud](img/cloud.png)

Plugin do nagrywania tworzy plik .HAR, które następnie zostaje przesłany do `k6 Cloud` i zaimportowany do Test Buildera:
- w postaci skryptu i kodu JS lub
- do edytora wizualnego takiego jak np, w Postmanie

W tej części wejdziemy na stronę https://red-water-022d04b03.azurestaticapps.net/ nagramy kilka akcji użytkownika i wyślemy nagaranie do `k6 Cloud
Następnie odegramy ruch.

