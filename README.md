## Food Truck Location App (REST API)

**This service should be started before the UI**

### Features
* API endpoint that allows you to get information about food trucks in the San Francisco area
* Hot module reload when in dev mode including when using the Docker container
* Endpoint has the ability to self paginate (i.e. it has query params) such as `limit` and `offset`
* Http exception handling ensuring no Http error goes unhandled
* Powered by [Nest](https://github.com/nestjs/nest) (a node framework)
* Uses **Node 18**
* Note: All routes within this app are prefixed with `api'

### Local Environment Setup

URL: http://localhost:3001/api

```bash
# Run the app in a Docker Container
npm run docker
# Or, run the app directly on your machine
npm install 
npm run dev
````

### Prod Environment Setup

URL: http://YOUR_DOMAIN.com/api

- Bind the external port to container port `3001`
- Launch the Dockerfile


### Things I would add, if I had more time
- Ability to select what fields via the request to return
- Add a geolocation in the request, and use that to get the closest food trucks around the given location
- Route caching
- Add Swagger API documentation
- Add an endpoint to lookup a specific food truck (i.e. `/trucks/:truckId` and connect that with Google Maps Place (if it exists))
- Add authorization around the endpoints
- Unit tests


### Endpoints
```http request
GET / 200
```
```http request
GET /trucks?limit=100&offset=0 200
```
Available optional query parameters: 

`limit` (default is 1000), 

`offset` (default is 0)



example response: 
```json
{
    "data": [
        {
            "objectid": "3334444",
            "applicant": "Some name",
            "facilitytype": "Push Cart",
            "cnn": "1234000",
            "locationdescription": "NEW MONTGOMERY ST: AMBROSE BIERCE ST to MISSION ST (77 - 99)",
            "address": "STREET NAME",
            "blocklot": "123424",
            "block": "1111",
            "lot": "111",
            "permit": "",
            "status": "",
            "fooditems": "Everything but hot dogs",
            "x": "444.444",
            "y": "555.555",
            "latitude": "37.78788969990609",
            "longitude": "-122.40053532677749",
            "schedule": "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=12MFF-0083&ExportPDF=1&Filename=12MFF-0083_schedule.pdf",
            "dayshours": "Mo-Su:7AM-6PM",
            "received": "19880403",
            "priorpermit": "0",
            "location": {
                "latitude": "37.78788969990609",
                "longitude": "-122.40053532677749",
                "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
            }
        }
    ],
    "meta": {
        "results": 1
    }
}
