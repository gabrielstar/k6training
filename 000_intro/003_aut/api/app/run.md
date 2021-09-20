Powershell:
        
        $env:FLASK_ENV='development';$env:FLASK_APP='app'; python -m flask run
        docker build --tag python-docker .        
        docker run --rm --expose 5000:5000 python-docker

Test:

        Invoke-WebRequest -Uri http://localhost:5000/ -Method GET