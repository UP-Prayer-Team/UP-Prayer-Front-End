var locations = null;

function submitRequest(method, endpoint, body, onSuccess, onFailure) {
    fetch(new Request(process.env.VUE_APP_API_HOST + endpoint, { method: method, body: body == null ? null : JSON.stringify(body), headers: { "Content-Type": "application/json" } })).then(response => {
        return response.json();
    }).then(json => {
        if (json.success) {
            onSuccess(json.data);
        }
        else {
            onFailure(json.message);
        }
    }).catch(error => {
        onFailure(error);
    });
}

export default class UPClient {

    static numberOrParse(input) {
        if (typeof(input) == "number") {
            return input;
        }
        else if (typeof(input) == "string") {
            return parseInt(input);
        }
        else {
            throw "Not a number or string.";
        }
    }

    // onFailure: (message: String) -> void

    //
    // RESERVATIONS
    //

    // year: Int
    // monthIndex: Int
    // onSuccess: ( summary: { count: Int, locations: { country: String, district: String }[] }[]) -> void
    //   The parameter is an array of summaries for the days in the requested month.
    //   Each day's summary contains the number of confirmed reservations (`count`), as well as
    //   some of the locations of those confirmed reservations.
    static getMonthSummary(year, monthIndex, onSuccess, onFailure) {
        submitRequest("GET", "/api/reservations/summary?year=" + year + "&month=" + monthIndex, null, data => {
            onSuccess(data);
        }, onFailure);
    }

    // year: Int
    // monthIndex: Int
    // dayIndex: Int
    // onSuccess: ({ country: String, district: String }[][]) -> void
    //   The parameter is an array of slot summaries.
    //   Each slot summary is an array of the locations of the reservations for that slot.
    static getDaySummary(year, monthIndex, dayIndex, onSuccess, onFailure) {
        submitRequest("GET", "/api/reservations/day?year=" + year + "&month=" + monthIndex + "&day=" + dayIndex, null, data => {
            onSuccess(data);
        }, onFailure);
    }

    // email: String
    // countryCode: String
    // districtCode: String
    // endorsementID: String
    // slots: { year: Int, monthIndex: Int, dayIndex: Int, slotIndex: Int }[]
    // onSuccess: () -> void
    static createReservations(email, countryCode, districtCode, organization, slots, onSuccess, onFailure) {
        submitRequest("POST", "/api/reservations/create", { email: email, country: countryCode, district: districtCode, endorsementID: organization, slots: slots }, _ => {
            onSuccess();
        }, onFailure);
    }

    // confirmationCode: String
    // onSuccess: ({ year: Int, monthIndex: Int, dayIndex: Int, slotIndex: Int }[]) -> void
    static confirmReservation(confirmationCode, onSuccess, onFailure) {
        submitRequest("POST", "/api/reservations/confirm", { confirmationID: confirmationCode }, data => {
            onSuccess(data.slots);
        }, onFailure);
    }

    //
    // LOCATIONS
    //

    // onSuccess: ({ countryCode: String : { name: String, districts: { districtCode: String : { name: String }}}}) -> void
    //   The parameter is a map of country codes to country data.
    //   Each country data has a display name (`name`) and a map (`districts`) of district codes to district data.
    //   Each district data has a display name (`name`).
    static getLocations(onSuccess, onFailure) {
        if (locations == null) {
            submitRequest("GET", "/api/locations/list", null, data => {
                locations = data;
                onSuccess(data);
            }, onFailure);
        }
        else {
            onSuccess(locations);
        }

    }

    //
    // ENDORSEMENTS
    //

    // onSuccess: (currentIndex: Number, endorsements: { homepageURL: String, donateURL: String, summary: String }[]) -> void
    static getEndorsementList(onSuccess, onFailure) {
        submitRequest("GET", "/api/endorsements/list", null, data => {
            onSuccess(data.currentIndex, data.endorsements);
        }, onFailure);
    }

    // onSuccess: ({ homepageURL: String, donateURL: String, summary: String }) -> void
    static getCurrentEndorsement(onSuccess, onFailure) {
        submitRequest("GET", "/api/endorsements/current", null, data => {
            onSuccess(data);
        }, onFailure);
    }

    // onSuccess: () -> void
    static updateEndorsements(currentIndex, endorsements, onSuccess, onFailure) {
        submitRequest("POST", "/api/endorsements/update", { currentIndex: currentIndex, endorsements: endorsements }, _ => {
            onSuccess();
        }, onFailure);
    }

    //
    // BLOG POSTS
    //

    // onSuccess: ({ id: String, title: String, date: String, author: String, content: "" }[]) -> void
    static listPosts(onSuccess, onFailure) {
        submitRequest("GET", "/api/posts/list", null, data => {
            onSuccess(data);
        }, onFailure);
    }

    // id: String
    // onSuccess: ({ id: String, title: String, date: String, author: String, content: String }) -> void
    static getPost(id, onSuccess, onFailure) {
        submitRequest("GET", "/api/posts/post/" + id, null, onSuccess, onFailure);
    }
}

/* EXAMPLE
getEndorsementsList(
    (currentIndex, endorsements) => {
        console.log("current index: " + currentIndex);
    },
    (message) => {
        console.log("o no");
    }
)
*/