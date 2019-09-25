# Codecov.io Setup Instructions - for use with [tape](https://www.npmjs.com/package/tape) & [nyc](https://www.npmjs.com/package/nyc)

Follow these instructions to add a shiny new code coverage badge to your project readme! 

:sparkles: :fire: :boom: ---> [![codecov](https://codecov.io/gh/bobbysebolao/testing-week-codecov-demo/branch/master/graph/badge.svg)](https://codecov.io/gh/bobbysebolao/testing-week-codecov-demo) <--- :sparkles: :fire: :boom:

Step 1: Run ```npm i nyc -D``` to install nyc as a project dev dependency

Step 2: Add the following command to ```scripts``` in your ```package.json```:

```
{
  "scripts": {
    "report-coverage": "nyc report --reporter=text-lcov > coverage.lcov && codecov",
    ...
  }
  ...
}
```

Step 3: Go to codecov.io and [sign up for a free account](https://codecov.io/)

Step 4: Give codecov.io access to the GitHub account/organisation where your repo lives

Step 5: Select your repo from the list

Step 6: Copy the codecov token and add it to the end of the ```report-coverage``` command you added to your package.json scripts, like so:

```
{
  "scripts": {
    "report-coverage": "nyc report --reporter=text-lcov > coverage.lcov && codecov --token=[ADD YOUR UNIQUE CODECOV TOKEN HERE]",
    ...
  }
  ...
}
```

Step 7: Run ```npm run report-coverage``` to generate a code coverage report in the .nyc_output folder (if no such folder exists, nyc will automatically create one) and send it to codecov.io.

Step 8: Go to www.codecov.io and navigate to your repo. You should see the code coverage report you just uploaded! 

Step 9: Go to 'Settings' and click on 'Badge' in the sidebar to the left. Copy the codecov badge markdown snippet

Step 10: Add the markdown to your readme. You can now show off your amazing code coverage to the world! 
